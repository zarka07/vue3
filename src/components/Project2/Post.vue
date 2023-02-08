<template>
  <div>
    <Header />
    <div>
      <div>
        <div class="postNumber">
          <h3>
            {{ $t("PostVue.Comments") }} {{ $t("PostVue.Post") }} {{ route.params.id }}
          </h3>
        </div>
        <!-- comment -->
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <p>
            <b>{{ $t("PostVue.Name") }}:</b> {{ comment.name }}
          </p>
          <p>
            <b>{{ $t("PostVue.Email") }}:</b> {{ comment.email }}
          </p>
          <p>
            <b>{{ $t("PostVue.Body") }}:</b> {{ comment.body }}
          </p>
        </div>
        <!-- modal -->
        <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-2">
          <button class="btn btn-success" type="button" @click="showModal">
            {{ $t("Agreement.ShowAgreement") }}
          </button>
          <button class="btn btn-primary" type="button" @click="back">
            {{ $t("PostVue.Back") }}
          </button>
        </div>
        <!-- agreement -->
        <div class="modal" v-if="modalStore.show">
          <div class="modalContent"><Agreement /></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Agreement from "@/components/Project2/Agreement.vue";
import axios from "axios";
import { ModalStore } from "@/stores/ModalStore";
import { ref, onMounted, defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LoaderStore } from "@/stores/LoaderStore";
import { ErrorStore } from "@/stores/ErrorStore";
const error = ErrorStore();
const loader = LoaderStore();
const emit = defineEmits(["currentPage"]);
const router = useRouter();
const route = useRoute();
let comments = ref([]);
//const path = "posts/" + route.params.id
const commentsPath = "posts/" + route.params.id + "/comments";
const modalStore = ModalStore();

onMounted(() => {
  showComments(commentsPath);
});
async function showComments(commentsPath) {
  comments.value = await get(commentsPath);
}
function back() {
  emit("currentPage", route.params.currentPage);
  router.go(-1);
}
function showModal() {
  modalStore.showModal(true);
}
async function get(path, cb = null) {
  loader.showLoader();
  return await axios
    .get(process.env.VUE_APP_API_P2ENDPOINT_URL + path)
    .then((response) => (cb !== null ? cb(response.data) : response.data))
    .catch((err) => {
      error.showError(err.statusCode);
    })
    .finally(() => {
      loader.hideLoader();
    });
}
</script>
<style scoped>
.btn {
  margin-left: 25px;
  margin-right: 25px;
}

.btn:nth-child(even) {
  margin-left: 100px;
  margin-right: 100px;
}

.postNumber {
  text-align: center;
}

.comment {
  border: 4px double black;
  margin: 6px 4px;
  padding-left: 4px;
  padding-bottom: 2px;
}

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
  padding: 30px 0;
  background: rgb(192, 187, 187);
}

.modalContent {
  margin: auto;
  width: 600px;
  max-width: 100%;
}

.v-btn {
  margin: 5px;
}
</style>
