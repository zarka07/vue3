<template>
  <div>
    <Header />
    <!-- project3 header -->
    <my-header></my-header>

    <div class="row m-3">
      <!-- product image -->
      <div class="col-md-5 col-md-offset-0">
        <figure style="text-align: center">
          <img class="product" :src="product.image" />
        </figure>
        <h5>Код товара: {{ $route.params.id }}</h5>
      </div>
      <!-- product title & price -->
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">Стоимость: {{ product.price }} грн</p>
        <!-- <button @click="edit">Редактировать</button> -->
        <!-- <router-view></router-view>  -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import MyHeader from "./Header.vue";
import axios from "axios";
export default {
  name: "product-component",
  components: { Header, MyHeader },
  data() {
    return { product: "" };
  },
  created: async function () {
    await axios.get("../../products.json").then((Response) => {
      this.product = Response.data.products.filter(
        (data) => data.id == this.$route.params.id
      )[0];
      this.product.image = "../../" + this.product.image; //чтобы сделать путь абсолютным
    });
  },
  methods: {
    edit() {
      this.$router.push({ name: "Edit" });
    },
  },
};
</script>
<style scoped>
h5 {
  color: gold;
  text-align: center;
}
</style>
