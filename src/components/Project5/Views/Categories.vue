<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Категории</h3>
    </div>
    <hr />
    <Loader v-if="isLoaded" />
    <section v-else>
      <div class="row justify-content-evenly">
        <AddCategory @create-category="addCategory" />

        <EditCategory :categories="categories" />
      </div>
    </section>
  </div>
</template>

<script>
import AddCategory from "../components/AddCategoryComponent.vue";
import EditCategory from "../components/EditCategoryComponent.vue";
import Loader from "../components/Loader.vue";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "categories-component",

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },

  components: { AddCategory, EditCategory, Loader },

  data() {
    return {
      isLoaded: true,
      categories: [],
    };
  },

  methods: {
    addCategory: function (value) {
      this.categories.push(value);
      console.log(this.categories);
    },
  },

  async mounted() {
    await this.crmStore
      .fetchCategories()
      .then((res) => (this.categories = res))
      .then((this.isLoaded = false));
  },
};
</script>
