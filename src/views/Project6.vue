<template>
  <Header />
  <to-do-view v-if="lsAuth"></to-do-view>
  <login-view v-else></login-view>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LoginView from "../components/Project6/views/LoginView.vue";
import ToDoView from "../components/Project6/views/ToDoView.vue";
export default {
  name: "project6-component",

  data() {
    return {
      auth: false,
      lsAuth: false,
    };
  },

  components: { Header, Footer, LoginView, ToDoView },

  mounted() {
    this.lsAuth = localStorage.getItem("auth");
    this.auth = this.lsAuth ? JSON.parse(this.lsAuth) : false;
  },
};
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #fff;
  text-decoration: none;
}
</style>
