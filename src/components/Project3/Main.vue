<template>
  <div>
    <Header/>
  <my-header></my-header>
  <main class="m-3">
    <div v-for="product in sortedProducts" :key="product.id">
      <div class="row">
        <div class="col-md-4 col-md-offset-0">
          <figure>
            <img class="product" v-bind:src="product.image" >
          </figure>
        </div>
        <div class="col-md-8 col-md-offset-0 description">
          <h3><router-link 
            :to="{ name : 'ProductId', params: {id: product.id}}" 
            >{{product.title}}
            </router-link>
          </h3>
          <p v-html="product.description"></p>
          <!--| formatPrice-->
          <p class="price">Цена:  
            {{product.price }}  грн
          </p>
          <div class="rating">
            <span>Состояние товара: </span>
            <span  
              :class="{'rating-active' :checkRating(n, product)}"
              v-for="n in 5" :key="n">☆</span>
          </div>
          <br>
          <div class="d-flex mt-4 flex-wrap align-content-around">
            <button class="btn add-btn"
              v-on:click="addToCart(product)"
              v-if="canAddToCart(product)">Добавить в корзину
            </button>
            <button disabled="true" class=" btn btn-light"
              v-else >Добавить в корзину
            </button>
            <span class="inventory-message"
                v-if="product.availableInventory - cartCount(product.id) === 0">Товар закончился
            </span>
            <div class="inventory-message"
                v-else-if="product.availableInventory - cartCount(product.id) < 5">
                Осталось: {{product.availableInventory - cartCount(product.id)}} шт!
            </div>
            <span class="inventory-message"
              v-else>Купить сейчас!
            </span>
          </div>
        </div><!-- end of col-md-6-->
      </div><!-- end of row-->
      <hr />
    </div><!-- end of v-for-->
  </main>
</div>
</template>
<script>
import MyHeader from './Header.vue';
import axios from 'axios';
import { UserStore } from '@/stores/UserStore';
export default {
  name: 'main-component',
  data() {
    return {
      products: [],
    };
  },
  components: { MyHeader },
  setup(){
    const userStore = UserStore();
        return{
          userStore,
        }
  },
  methods: {
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(Product) {
      this.userStore.addToCart(Product.id)
      localStorage.setItem("products-list", JSON.stringify(this.userStore.cartItemCount))
    },
    canAddToCart(Product) {
      //return this.product.availableInventory > this.cartItemCount;
      return (
        Product.availableInventory >
        this.cartCount(Product.id)
      );
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.userStore.cartItemCount.length; i++) {
        if (this.userStore.cartItemCount[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  computed: {
    cartItemCount() {
      return this.userStore.cartItemCount.length || '';
    },
    sortedProducts() {
      function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
          return 0;
        }
      if (Object.keys(this.products).length > 0) {
        let productsArray = this.products.slice(0);
        return productsArray.sort(compare);
      }
      return 0;
    }
  },
  /*filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return '';
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split('').reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    }
  },*/
  created: async function() {
    await axios.get('products.json').then(response => {
      this.products = response.data.products;
    });
    const productsData = localStorage.getItem("products-list")
    if(productsData){
      this.userStore.cartItemCount = JSON.parse(productsData)
    }
  },
};
</script>
<style scoped>
  .btn{
  background-color: greenyellow;
}
</style>