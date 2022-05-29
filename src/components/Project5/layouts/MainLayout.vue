<template>
  <div class="main">
    <Navbar @click="isOpen = !isOpen" />

    <main class="">
      <router-view />
    </main>

    <div class="d-flex justify-content-end me-4 ">
      <router-link class="" to="/record">
        <i class="bi bi-plus-circle "></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Project5/components/Navbar.vue";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "main-layout",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },
  data: () => ({}),
  components: {
    Navbar,
  },
  async mounted() {
    // if (!Object.keys(this.crmStore.USER_NAME)) {
    //   await this.crmStore.USER_NAME
    // }
  },
};
</script>

<style scoped>
.main{
  min-height: 70vh;
}

.bi-plus-circle {
  font-size: 350% !important;
  color: #fff;
  text-align: center;
}

.bi-plus-circle::before {
  width: 56px;
  height: 56px;
  background-color: rgb(64, 190, 232);
  border-radius: 50%;
}
</style>
