import { defineStore } from 'pinia';

export const ModalStore = defineStore('modal', {
    state:() => {
        return { 
            show: false
        }
    },
    actions:{
        showModal(newStatus){
            this.show = newStatus
        },
    }
})