<template>
  <div class="cont">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <div class="slide-fade__component" :key="$route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeView from "../components/Project7/views/HomeView.vue";
import AboutView from "../components/Project7/views/AboutView.vue";
export default {
  name: "project7-component",

  computed: {
    Component() {
      return HomeView ? HomeView : AboutView;
    },
  },

  components: { Header, Footer, HomeView, AboutView },
};
</script>

<style scoped>
@import "../components/Project7/css/App.vue.style.css";

.cont {
  background-color: #bebebe;
  margin: 0;
  padding: 0;
}
</style>
