<template>
    <div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>

          <p class="currency-line">
            <span>{{rate}} грн</span>
          </p>
        </div>
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
      getUserBill(){
        return this.crmStore.getters.userBill
      }
    },
    methods(){
      // getCurrency(currency){
      //   return this.getUserBill * this.rate
      // }
    }
}
</script>
