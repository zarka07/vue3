<template>
  <div v-if="loading" class="col-4 p-4 bill" aria-hidden="true">
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
  <div v-else class="col-4 p-4 bill">
    <div>
      <span class="m-2 text-light">Счет в валюте</span>
      <p class="m-2 currency-line">
        <span class="text-light">{{ fromValue }}: {{ userBillFrom }} </span>
      </p>
      <p class="m-2 currency-line">
        <span class="text-light">{{ toValue }}: {{ userBillTo }} </span>
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "bill-component",

  props: ["loading", "fromValue", "result", "toValue"],

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
      return this.isBillExist ? this.crmStore.GET_USER_BILL : "---";
    },

    userBillTo() {
      return this.isBillExist
        ? (this.crmStore.GET_USER_BILL / this.result).toPrecision(5)
        : "---";
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
