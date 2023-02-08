<template>
  <div class="user-main">
    <Header />
    <CV />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CV from "@/components/Project1/CV.vue";
import Footer from "@/components/Footer.vue";

</script>
<style scoped>
.mxauto {
  position: absolute !important;
  left: 55%;
  transform: translateX(-45%);
}
#settings {
  margin-top: 10px;
}
</style>
