<template>
  <div>
    <div v-if="showLoader">
      <Loader />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { LoaderStore } from "@/stores/LoaderStore";
  import Loader from "@/components/Project2/Loader.vue";
  const loader = LoaderStore();
  const showLoader = computed(() => {
    return loader.loading;
  });
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-align: center !important;
  color: #050505 !important;
}
</style>
