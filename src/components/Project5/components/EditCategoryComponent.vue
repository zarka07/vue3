<template>
  <div v-if="categories"
    class="edit border border-success col-xl-5 col-lg-5 col-md-5 col-sm-5 bg-light flex-wrap m-2"
  >
    <div class="p-2">
      <div class="mb-4">
        <h4>Edit</h4>
      </div>

      <form @submit.prevent="submit">
        <div class="mb-2">
          
          <select
            class="form-select"
            id="selectCategory"
            aria-label="Default select example"
            v-model="current"
          >
            <option disabled>Categories:</option>
            <option v-for="category in categories" :key="category.id" :value="category">
              {{ category.categoryName }}
            </option>
          </select>
          <label for="selectCategory">Choose the category</label>
        </div>

        <div class="mb-2">
          <input
            type="text"
            id="name"
            :placeholder="current.categoryName"
            v-model="current.categoryName"
          />
        </div>

        <div class="mb-4">
          <input
            id="limit"
            type="number"
            :placeholder="current.categoryLimit"
            v-model="current.categoryLimit"
          />
        </div>

        <button
          v-if="current.hasOwnProperty('categoryLimit')"
          type="submit"
          class="btn btn-success shadow-sm rounded mb-2"
        >
          UPDATE <i class="bi bi-send float-end ms-2"></i>
        </button>
      </form>
    </div>
  </div>
  <p class="text-center col-xl-5 col-lg-5 col-md-5 col-sm-5 flex-wrap" v-else>You didn't add categories</p>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "edit-category",

  props: ["categories"],

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },

  data() {
    return {
      current: {},
    };
  },

  methods: {
    submit() {
      try {
        this.crmStore.updateCategory(this.current);
        this.current = {};
        this.$toast.success("Category updated!");
      } catch (e) {
        this.$toast.warning(e.message);
      }
    },
  },
};
</script>
