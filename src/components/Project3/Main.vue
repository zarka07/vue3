<template>
  <div>
  <my-header :cartItemCount="cartItemCount"></my-header>
  <main>
    <div v-for="product in sortedProducts" :key="product.id">
      <div class="row">
        <div class="col-md-5 col-md-offset-0">
          <figure>
            <img class="product" v-bind:src="product.image" >
          </figure>
        </div>
        <div class="col-md-6 col-md-offset-0 description">
          <h1><router-link :to="{ name : 'ProductId', params: {id: product.id}}" >{{product.title}}</router-link></h1>
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
          <button class=" btn btn-primary btn-lg"
            v-on:click="addToCart(product)"
            v-if="canAddToCart(product)">Добавить в корзину</button>
          <button disabled="true" class=" btn btn-primary btn-lg"
            v-else >Добавить в корзину</button>
          <span class="inventory-message"
            v-if="product.availableInventory - cartCount(product.id) === 0">Товар закончился
        </span>
        <span class="inventory-message"
          v-else-if="product.availableInventory - cartCount(product.id) < 5">
          Осталось: {{product.availableInventory - cartCount(product.id)}} шт!
        </span>
      <span class="inventory-message"
      v-else>Купить сейчас!
    </span>
    
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
export default {
  name: 'main-component',
  data() {
    return {
      products: {},
      cart: []
    };
  },
  components: { MyHeader },
  methods: {
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct) {
      //return this.product.availableInventory > this.cartItemCount;
      return (
        aProduct.availableInventory >
        this.cartCount(aProduct.id)
      );
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length || '';
    },
    sortedProducts() {
      function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
          return 0;
        }
      if (this.products.length > 0) {
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
  }
};
</script>
<style scoped>
  h1 a{
    color: black;
  }
</style>