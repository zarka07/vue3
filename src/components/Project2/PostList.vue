<template>
  <div class="postlist p-2">
    <!-- postlist -->
    <div>
      <div>
        <div>
          <div class="posts">
            <h3>{{ $t("PostlistVue.Postlist") }}</h3>
          </div>
          <ul class="post" v-if="posts">
            <li v-for="post in displayedPosts" :key="post.id">
              <router-link
                :to="{
                  name: 'PostId',
                  params: { id: post.id, currentPage: userStore.currentPage },
                }"
              >
                {{ post.id }}. {{ post.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            style="color: #4caf50"
            v-if="userStore.currentPage != 1"
            @click="userStore.currentPage--"
          >
            {{ $t("PostlistVue.Previous") }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(
              userStore.currentPage - 1,
              userStore.currentPage + 5
            )"
            :key="pageNumber"
            @click="userStore.currentPage = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="userStore.currentPage++"
            style="color: #4caf50"
            v-if="userStore.currentPage < pages.length"
            class="page-link"
          >
            {{ $t("PostlistVue.Next") }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { UserStore } from "@/stores/UserStore";
import { ErrorStore } from "@/stores/ErrorStore";
import { ref, reactive, computed, onBeforeMount } from "vue";
import { LoaderStore } from "@/stores/LoaderStore";
import axios from "axios";
const loader = LoaderStore();
const userStore = UserStore();
const error = ErrorStore();
const perPage = 10;
let path = "posts";
let posts = ref([]);
let pages = reactive([]);
onBeforeMount(async () => {
  loader.showLoader()
  let cb = null
  posts.value = await axios
    .get(process.env.VUE_APP_API_P2ENDPOINT_URL + path, cb)
    .then((response) => (cb !== null ? cb(response.data) : response.data))
    .catch((err) => {
      error.showError(err)      
    })
    .finally(() => {
      loader.hideLoader();
    });
  if(posts.value){
    setPages()
  }else{
    return 0
  }
});
function setPages() {
  let numberOfPages = Math.ceil(posts.value.length / perPage);
  for (let index = 1; index <= numberOfPages; index++) {
    pages.push(index);
  }
  return pages;
}
let displayedPosts = computed(() => {
  return paginate(posts.value);
})
function paginate(value) {
    let page = userStore.currentPage;
    let from = page * perPage - perPage;
    let to = page * perPage;
    return value.slice(from, to);
}
// filters: {
//   trimWords(value) {
//     return value.split(" ").splice(0, 20).join(" ") + "...";
//   },
// },
</script>
<style scoped>
.post {
  margin-left: 2em;
  list-style: none;
}

h3 {
  text-align: center;
  color: black;
}

span {
  margin: 15px;
}

.modal {
  display: block;
  height: 500px;
  width: 80%;
}

a {
  color: black;
}

button.page-link {
  display: inline-block;
}

button.page-link {
  font-size: 15px;
  color: #0b34caba;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border: 1px dotted;
  border-radius: 2px;
}

.offset {
  width: 500px !important;
  margin: 20px auto;
}

.pagination {
  align-items: center;
  justify-content: center;
  padding-left: 0;
}
</style>
