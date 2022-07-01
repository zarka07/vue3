<template>
  <div>
    <Header />
    <div>
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Project3/Main.vue";
export default {
  name: "project3-component",
  components: { Header, Main, Footer },
};
</script>
