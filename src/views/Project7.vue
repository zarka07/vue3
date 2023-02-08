<template>
  <div class="cont">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <div class="slide-fade__component" :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeView from "../components/Project7/views/HomeView.vue";
import AboutView from "../components/Project7/views/AboutView.vue";
const route = useRoute()
const Component = computed(()=>{
  return HomeView ? HomeView : AboutView
})
onMounted(()=>console.log(Component))
</script>

<style scoped>
@import "../components/Project7/css/App.vue.style.css";

.cont {
  background-color: #bebebe;
  margin: 0;
  padding: 0;
}
</style>
