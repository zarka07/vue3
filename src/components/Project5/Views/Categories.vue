<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Categories</h3>
    </div>
    <hr />
    <!-- <Loader v-if="isLoaded" /> -->
    <section >
      <div class="row justify-content-evenly">
        <AddCategory @categoryAdded="updateCategories"/>

        <EditCategory
          :categories="categories"
          :key="categories.length + updateCount"
        />
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

  components: { AddCategory, EditCategory, //Loader 
  },

  data() {
    return {
      isLoaded: true,
      categories: this.crmStore.categories,
      updateCount: 0,
    };
  },

  methods:{
    updateCategories(){
      this.updateCount++;
    }
  },

  // async mounted() {
  //   await this.crmStore.fetchCategories().then((this.isLoaded = false));
  // },
};
</script>
