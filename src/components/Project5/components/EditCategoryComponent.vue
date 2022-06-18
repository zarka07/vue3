<template>
  <div
    class="
      edit
      border border-success
      col-xl-5 col-lg-5 col-md-5 col-sm-5
      bg-light
      flex-wrap
      m-2
    "
  >
    <div class="p-2">
      <div class="mb-4">
        <h4>Редактировать</h4>
      </div>

      <form @submit.prevent="submit()">
        <div class="mb-2">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="current"
          >
            <option disabled>Категории:</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.categoryName }}
            </option>
          </select>
          <label>Выберите категорию </label>
        </div>

        <div class="mb-2">
          <input
            type="text"
            id="name"
            :placeholder="categoryName"
            v-model="categoryName"
          />
        </div>

        <div class="mb-4">
          <input
            id="limit"
            type="number"
            :placeholder="categoryLimit"
            v-model="categoryLimit"
          />
        </div>

        <button type="submit" class="btn btn-success shadow-sm rounded mb-2">
          СОЗДАТЬ <i class="bi bi-send float-end ms-2"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "edit-categorie",

  props: ["categories"],

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      selected: null,
      categoryName: '',
      categoryLimit: null,
      current: null
    };
  },

  validations() {
    return {
      categoryName: { required },
      categoryLimit: { required },
    };
  },

  watch: {
    current(categoryId) {
      const cat = this.categories.find(category => category.id === categoryId)
      this.categoryName = cat.categoryName
      this.categoryLimit = cat.categoryLimit
    },
  },

  methods:{
    submit(){
      if (this.v$.$invalid) {
        this.$toast.warning(this.v$);
        return;
      }
      
      try {
        const updatedCategory = {
        id : this.current,
        name : this.categoryName,
        limit : this.categoryLimit,
        }
        this.crmStore.updateCategory(updatedCategory)
        this.categoryName = ""
        this.categoryLimit = null
        this.v$.$reset()
        this.$emit("categoryUpdated")
        
      } catch (error) {
        this.$toast.warning(error.message)
      }
    }
  }
};
</script>