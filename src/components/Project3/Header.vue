<template>
  <header>
    <div class="d.flex d-flex justify-content-between align-items-center mb-1 flex-wrap">
      <div style="margin-left: 1rem">
        <h4>
          <router-link :to="{ name: 'Project3' }">{{ sitename }}</router-link>
        </h4>
      </div>

      <div>
        <button class="btn">
          <router-link active-class="active" :to="{ name: 'Form' }">
            <p class="bi bi-cart" style="margin-top: 8px; margin-right: 1rem">
              {{ this.userStore.CURRENT_ITEMS_COUNT ?? 0 }}
            </p>
          </router-link>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import { UserStore } from "@/stores/UserStore";
export default {
  name: "my-header",
  setup() {
    const userStore = UserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      sitename: "Распродажа склада!",
    };
  },
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    },
  },
};
</script>
<style scoped>
header {
  background-color: #198754;
}

a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: rgb(8, 8, 8);
}
</style>
