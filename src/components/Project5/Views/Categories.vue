<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Категории</h3>
    </div>
    <hr />
    <Loader v-if="isLoaded" />
    <section v-else>
      <div class="row justify-content-evenly">
        <AddCategory
          @categoryCreated="addCategory"
        />
        {{Object.keys(categories).length+updateCount}}
        
        <EditCategory
          :categories="categories"
          @categoryUpdated="updateCategory"
          :key="key"
        />
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
      categories: this.crmStore.categories|| "no user categories",
        //JSON.parse(localStorage.getItem("userCategories")) ||
        
      isLoaded: true,
      updateCount: 0,
    };
  },

  methods: {
    fetchCategories() {
      this.crmStore.fetchCategories();
    },
    addCategory() {
      this.fetchCategories();
      this.$toast.success(`Категория успешно добавлена`);
    },
    updateCategory() {
      this.fetchCategories();
      this.updateCount++;
      this.$toast.success(`Категория успешно обновлена`);
    },
  },

  created: function () {
    this.fetchCategories();
    console.log('fetched')
  },

  mounted() {
    this.crmStore.categories;
    this.isLoaded = false;
    console.log(Object.keys(this.categories).length)
  },

  computed: {
    key(){
      return Object.keys(this.categories).length + this.updateCount
    }
  },
};
</script>
