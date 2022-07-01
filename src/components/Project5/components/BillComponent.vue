<template>
  <div v-if="billParams.loading" aria-hidden="true">
    <div class="m-1">
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7 mb-3"></span>
        <span class="placeholder col-4 mb-3"></span>
        <span class="placeholder col-4 mb-3"></span>
        <span class="placeholder col-6 mb-3"></span>
        <span class="placeholder col-8 mb-3"></span>
      </p>
      <hr />
    </div>
  </div>

  <div v-else>
    <div>
      <span class="m-2 text-light">Счет в валюте</span>
      <p class="m-2 currency-line">
        <span class="text-light">{{ billParams.from }}: {{ userBillFrom }} &#8372; </span>
      </p>
      <p class="m-2 currency-line">
        <span class="text-light"
          >{{ billParams.to }}: {{ userBillTo || "Нет соединения с сервером" }}&#36;
        </span>
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "bill-component",

  props: ["billParams"],

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },

  computed: {
    isBillExist() {
      if (this.crmStore.GET_USER_BILL) {
        return this.crmStore.GET_USER_BILL;
      }
      return false;
    },

    userBillFrom() {
      return this.isBillExist ? this.crmStore.GET_USER_BILL : " ---";
    },

    userBillTo() {
      if (this.isBillExist && this.billParams.result != 0) {
        return (this.crmStore.GET_USER_BILL / this.billParams.result).toPrecision(5);
      } else {
        return " ---";
      }
    },
  },
};
</script>

<style scoped>
.bill {
  background-color: rgb(64, 190, 232);
  min-height: 40vh;
}
</style>
