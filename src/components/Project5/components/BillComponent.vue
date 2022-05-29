<template>
    <div class="col-4 p-4 bill">
      <div class="">
        
          <span class="m-2 text-light">Счет в валюте</span>
          
          <p class="m-2 currency-line">
            <span class="text-light">{{userBill}} грн</span>
          </p>
          <hr class="text-light">
        
      </div>
    </div>
</template>

<script>
import { CRMstore } from '@/stores/CRMstore';
export default {
    name:'bill-component',
    setup(){
        const crmStore = CRMstore();
        return{
          crmStore
        }
    },
    props:['rate'],
    computed:{
      userBill(){
        return this.crmStore.USER_BILL
      }
    },
    methods(){
      // getCurrency(currency){
      //   return this.getUserBill * this.rate
      // }
    }
}
</script>

<style scoped>
  .bill{
    background-color: rgb(64, 190, 232);
    min-height:40vh;

  }
</style>
