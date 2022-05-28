<template>
  <div>
    <div class="">
      <Navbar @click="isOpen = !isOpen" />

      <main class="">
        <div class="">
          <router-view />
        </div>
      </main>
  
      <div class="">
        <router-link class="" to="/record">
          <i class="bi bi-plus-circle"></i>
        </router-link>
      </div>
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
  data: () => ({
    
  }),
  components: {
    Navbar
  },
  async mounted() {
    
    // if (!Object.keys(this.crmStore.USER_NAME)) {
    //   await this.crmStore.USER_NAME
    // }
  },
};
</script>

<style scoped>


.bi-plus-circle{
  font-size: 250% !important;
  color:dodgerblue; 
  text-align: center;
}

.bi-plus-circle::before{
  width:38px;
  height:38px;
  background-color: rgb(124, 252, 85);
  border-radius: 50%;
}

</style>
