<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="userinfo col-md-12">
          <hr />
          <p>You are successfully logged with user info:</p>
          <p v-if="name">
            Name: <b>{{ name }}</b>
          </p>
          <p v-if="avatar">
            <img :src="avatar" alt="avatar" class="avatar" />
          </p>
          <div class="d-grid gap-2 col-2 mx-auto">
            <button
              class="btn btn-primary"
              style="margin-top: 1em"
              type="button"
              @click="logout"
            >
              Logout
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { UserStore } from "@/stores/UserStore";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const mainStore = UserStore();
const name = mainStore.userInfo.username
const avatar = mainStore.userInfo.avatar
const router = useRouter()
function logout() {
  mainStore.resetUser();
  router.push("/");
}
</script>

<style scoped>
.userinfo {
  height: 63vh;
  text-align: center;
}

.avatar {
  width: 150px;
  height: 150px;
}
</style>
