import { defineStore } from 'pinia';

let cartItems = localStorage.getItem('products-list');
let cartItemsCount = localStorage.getItem('products-count');

export const UserStore = defineStore('auth', {
    state: () => {
        return {
            username: '',
            email: '',
            password: '',
            currentPage: 1,
            cartItems: cartItems ? JSON.parse(cartItems) : [],
            cartItemsCount: cartItemsCount ? JSON.parse(cartItemsCount) : 0,
        }
    },
    getters: {
        CURRENT_ITEMS_COUNT(state) {
            return state.cartItemsCount
        }
    },
    actions: {
        addToCart(id) {
            if (id) {
                this.cartItems.push(id);
                this.cartItemsCount++;
                localStorage.setItem("products-list", JSON.stringify(this.cartItems))
                localStorage.setItem("products-count", JSON.stringify(this.cartItemsCount))
            }
        },
        resetCart() {
            this.cartItems = [];
            this.cartItemsCount = 0;
            localStorage.removeItem("products-list");
            localStorage.removeItem("products-count");
        },
        resetUser() {
            this.username = '',
                this.email = '',
                this.password = ''
        },
        addUser(formData) {
            this.username = formData.username,
                this.email = formData.email,
                this.password = formData.password
        },
        signIn(formData) {
            this.email = formData.email,
                this.password = formData.password
        },
    }
})