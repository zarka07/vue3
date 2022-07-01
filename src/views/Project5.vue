<template>
  <div>
    <Header />
    <component :is="layout"> </component>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MainLayout from "../components/Project5/layouts/MainLayout";
import EmptyLayout from "../components/Project5/layouts/EmptyLayout";
export default {
  name: "project5-component",
  components: { Header, MainLayout, EmptyLayout, Footer },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>
