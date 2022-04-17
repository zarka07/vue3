<template>
  <div>
    <Header/>
  <my-header></my-header>
  <main class="m-3">
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <input v-model="filter" type="text" placeholder="Фильтр"/>
      
      <button 
        v-if="page > 1"
        class="btn btn-primary me-md-2" 
        type="button"
        @click="page--">Назад
      </button>
      <button 
        v-if="hasNextPage"
        class="btn btn-primary me-md-2" 
        type="button"
        @click="page++">Вперед
      </button>
    </div>
    <hr>
    <div v-for="product in filteredList()" :key="product.id">
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
          
          <!--| formatPrice-->
          <p class="price">Цена:  
            {{product.price || formatPrice}}  грн
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
      filter: "",
      page: 1,
      hasNextPage: true
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
    filteredList(){
      const start = (this.page - 1)*4;
      const end = this.page*4 - 1;
      const filteredList = this.products.filter(product => product.title.
        toLowerCase().
        includes(this.filter))
        
      this.hasNextPage = filteredList.length > end  
      return filteredList.slice(start, end);
    },
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
        return priceArray.reverse().join('');
      } else {
        return (price / 100).toFixed(2);
      }
    },
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(Product) {
      this.userStore.addToCart(Product.id)
      localStorage.setItem("products-list", JSON.stringify(this.userStore.cartItemCount))
      const data = localStorage.getItem("products-list")
      console.log(data)
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
  created: async function() {
    await axios.get('products.json').then(response => {
      this.products = response.data.products;
    });
    const productsData = localStorage.getItem("products-list")
    if(productsData){
      this.userStore.cartItemCount = JSON.parse(productsData)
    }
    const windowData = Object.fromEntries(new URL(window.location).searchParams.entries())
    if(windowData.filter){
      this.filter = windowData.filter
    }  
    if(windowData.page){
      this.page = windowData.page;
    }
  },
  watch:{
    filter(){
      this.page = 1;
      window.history.
      pushState(null, document.title, `/?filter=${this.filter}&page=${this.page}`)
  }
  }
};
</script>
<style scoped>
  .btn{
  background-color: greenyellow;
}
</style>