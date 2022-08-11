<template>
  <div>
    <router-view @showUser="toUser">
      <div v-if="!store.email"><Authorization /></div>
      <div v-else><User /></div>
    </router-view>
  </div>
</template>

<script>
import Authorization from "@/views/Authorization.vue";
import User from "@/views/User.vue";
import { UserStore } from "@/stores/UserStore";

export default {
  name: "project1-component",
  components: { Authorization, User, },
  setup() {
    const store = UserStore();
    return {
      store,
    };
  },
  methods: {
    toUser() {
      this.$router.push("/user");
    },
  },
};
</script>
