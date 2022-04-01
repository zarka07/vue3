import { defineStore } from 'pinia'

export const LoaderStore = defineStore('loader', {
    state:() => {
        return { 
            loading: false,
        }
    },
    getters:{

    },
    actions:{
        showLoader(){
            this.loading = true
        },

        hideLoader(){
            this.loading = false
        }
    }
})