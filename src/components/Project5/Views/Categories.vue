<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Категории</h3>
    </div>
    <hr />
    <section>
      <div class="row justify-content-evenly">
        <AddCategory @categoryCreated="addCategory"/>

        <EditCategory />
      </div>
    </section>
  </div>
</template>

<script>
import AddCategory from '../components/AddCategoryComponent.vue';
import EditCategory from '../components/EditCategoryComponent.vue';
export default {
  name: "categories-component",

  components:{AddCategory,EditCategory},

  data(){
    return{
      categories:[]
    }
  },

  methods:{
    addCategory(newCategory){
      this.categories.push(newCategory)
      //console.log(this.categories)
    }
  }
};
</script>
