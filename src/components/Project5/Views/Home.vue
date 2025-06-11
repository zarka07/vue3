<template>
  <div class="d-flex flex-row mt-3 mb-3 justify-content-between">
    <h3 class="m-3">Bill</h3>
    <button class="reload m-2" @click="refresh">
      <i class="bi bi-bootstrap-reboot"></i>
    </button>
  </div>
  <hr />

  <div class="row m-3 justify-content-evenly flex-sm-wrap flex-md-wrap">
    <BillComponent
      class="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-4 mb-4 bg-gradient bill"
      :billParams="billParams"
    />
    <CurrencyComponent
      class="col-xl-6 col-lg-6 col-md-6 col-sm-10 p-4 mb-4 bg-gradient currency"
      :billParams="billParams"
      :rateDate="date"
    />
  </div>
</template>

<script>
import BillComponent from "../components/BillComponent.vue";
import CurrencyComponent from "../components/CurrencyComponent.vue";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "home-component",

  components: {
    BillComponent,
    CurrencyComponent,
  },

  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },

  data() {
    return {
      currency: null,
      date: "",
      billParams: { loading: false, from: "UAH", to: "USD", result: 0 },
    };
  },

  methods: {
    async refresh() {
      this.billParams.loading = true;
      this.currency = await this.crmStore.getCurrency(this.billParams.to, this.billParams.from);
      this.billParams.loading = false;
    },
  },

  async mounted() {
    //this.currency = await this.crmStore.getCurrency(this.billParams.to, this.billParams.from);
    //this.billParams.result = this.currency.result;
    //this.date = this.currency.date;
    //this.billParams.loading = false;
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
