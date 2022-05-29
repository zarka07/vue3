<template>
  <div class="d-flex flex-row mt-3 mb-3 justify-content-between">
    <h3 class="m-3">Счет</h3>
    <button class="reload m-2">
      <i class="bi bi-bootstrap-reboot"></i>
    </button>
  </div>
  <hr />

  <Loader v-if="loading" />

  <div v-else class="row justify-content-evenly">
    <bill-component :rate="rate"> </bill-component>
    <currency-component></currency-component>
  </div>
  <div>{{ currency }}</div>
</template>

<script>
import Loader from "../components/Loader.vue";
import BillComponent from "../components/BillComponent.vue";
import CurrencyComponent from "../components/CurrencyComponent.vue";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "home-component",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },
  data() {
    return {
      loading: false,
      currency: null,
      rate: 0,
      to: "USD",
      from: "EUR",
    };
  },
  components: {
    "bill-component": BillComponent,
    "currency-component": CurrencyComponent,
    Loader,
  },
  async mounted() {
    this.currency = await this.crmStore.$patch(
      "getCurrency",
      this.to,
      this.from
    );
    //this.rate = this.currency.info.rate
    //console.log(this.currency.info);
    //this.loading = false;
  },
};
</script>

<style scoped>
.bi-bootstrap-reboot {
  font-size: 150% !important;
  color: #fff;
  text-align: center;
}

.reload {
  width: 50px;
  height: 50px;
  background-color: rgb(64, 190, 232);
  border-color: transparent;
  border-radius: 50%;
}
</style>