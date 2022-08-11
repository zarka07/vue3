<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="userinfo col-md-12">
          <hr>
          <p>You are successfully logged with user info:</p>
          <p v-if="fullname">Fullname: <b>{{ fullname }}</b></p>
          <p v-if="avatar">
            <img :src="avatar" alt="avatar" class="avatar">
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
          <hr>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { UserStore } from "@/stores/UserStore";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "user-item",
  components: { Header, Footer },
  setup() {
    const mainStore = UserStore();

    return {
      mainStore,
    };
  },
  data() {
    return {
      
    };
  },
  methods: {
    logout() {
      this.mainStore.resetUser();
      this.$router.push("/");
    },
  },
  computed:{
    fullname(){
      return this.mainStore.userInfo.fullname
    },
    avatar(){
      return this.mainStore.userInfo.avatar
    }
  }
};
</script>

<style scoped>
.userinfo {
  height: 63vh;
  text-align: center;
}

.avatar{
  width:150px;
  height:150px;
}
</style>
