import { defineStore } from 'pinia'

export const ModalStore = defineStore('modal', {
    state:() => {
        return { 
            show: false
            
        }
    },
    getters:{

    },
    actions:{
        showModal(newStatus){
            this.show = newStatus
        },

    }
})