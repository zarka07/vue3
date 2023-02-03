<template>
  <div>
    <router-view @showUser="toUser">
      <div v-if="!store.email"><Authorization /></div>
      <div v-else><User /></div>
    </router-view>
  </div>
</template>

<script setup>
import Authorization from "@/views/Authorization.vue";
import User from "@/views/User.vue";
import { UserStore } from "@/stores/UserStore";
import { useRouter } from 'vue-router';
const store = UserStore();
const router = useRouter();
function toUser() {
  router.push("/user");
}
</script>
