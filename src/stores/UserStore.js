import { defineStore } from 'pinia'

export const UserStore = defineStore('auth', {
    state:() => {
        return { 
            username: '',
            email: '',
            password: '',
            cartItemCount: [],
            currentPage: 1,
        }
    },
    getters:{

    },
    actions:{
        addToCart(id){
            this.cartItemCount.push(id);
        },
        resetUser(){
            this.username = '',
            this.email = '',
            this.password = ''
        },
        addUser(formData){
            this.username = formData.username,
            this.email = formData.email,
            this.password = formData.password
        },
        signIn(formData){
            this.email = formData.email,
            this.password = formData.password
        },
        
    }
})