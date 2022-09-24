<template>
  <div class="p-4 record" v-if="categories.length">
    <div class="">
      <h3>New item</h3>
    </div>
    <hr />
    <form class="">
      <div class="">
        <select v-model="current">
          <option disabled>Categories:</option>
            <option v-for="category in categories" :key="category.id" :value="category">
              {{ category.categoryName }}
            </option>
        </select>
        <label>Choose category</label>
      </div>

      <p>
        <label>
          <input class="" name="type" type="radio" value="income" />
          <span>Income</span>
        </label>
      </p>
      <p>
        <label>
          <input class="" name="type" type="radio" value="outcome" />
          <span>Expenses</span>
        </label>
      </p>

      <div class="">
        <input id="amount" type="number" placeholder="Summ" />
        <!-- <span class="">amount пароль</span> -->
      </div>

      <div class="mt-4">
        <input id="description" type="text" placeholder="Description" />
        <!-- <span class="helper-text invalid">description пароль</span> -->
      </div>

      <div class="mt-4">
        <button type="submit" class="btn btn-success shadow-sm rounded">
          CREATE <i class="bi bi-send float-end ms-2"></i>
        </button>
      </div>
    </form>
  </div>
  <p class="text-center m-4 p-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 flex-wrap" v-else>You didn't add categories. <router-link to="/categories">Add new</router-link></p>
</template>
<script>
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "record-component",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },
  data(){
    return{
      current: {}
    }
  },
  mounted() {
    console.log(this.categories)
  },
  computed:{
    categories(){
      return this.crmStore.categories;
    }
  }
};
</script>
