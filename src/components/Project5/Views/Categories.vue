<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Categories</h3>
    </div>
    <hr />
    <!-- <Loader v-if="isLoaded" /> -->
    <section>
      <div class="row justify-content-evenly">
        <AddCategory @categoryAdded="updateCategories" />

        <EditCategory :categories="categories" :key="updateCount" />
      </div>
    </section>
  </div>
</template>

<script>
import AddCategory from "../components/AddCategoryComponent.vue";
import EditCategory from "../components/EditCategoryComponent.vue";
//import Loader from "../components/Loader.vue";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "categories-component",

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },

  components: {
    AddCategory,
    EditCategory, //Loader
  },

  data() {
    return {
      isLoaded: true,
      updateCount: 0,
    };
  },

  methods: {
    updateCategories() {
      this.updateCount++;
      this.crmStore.categories = JSON.parse(localStorage.getItem("categories"))||[];
    },
  },
  computed: {
    categories() {
      return this.crmStore._userInfo.categories;
    },
  },
  mounted(){
    this.updateCategories();
  },
  watch:{
      categories(){
        let allInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.crmStore.categories = allInfo.categories
    }
  }
};
</script>
