<template>
  <div class="d-flex flex-row mt-3 mb-3 justify-content-between">
    <h3 class="m-3">Счет</h3>
    <button class="reload m-2" @click="refresh">
      <i class="bi bi-bootstrap-reboot"></i>
    </button>
  </div>
  <hr />

  <div class="row justify-content-evenly">
    <BillComponent :loading="loading" :fromValue="from" :result="result" :toValue="to" />
    <CurrencyComponent :loading="loading" :toValue="to" :result="result" :rateDate="date" />
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
      loading: true,
      currency: null,
      result: 0,
      to: "USD",
      from: "UAH",
      date: "",
    };
  },

  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.crmStore.getCurrency(this.to, this.from);
      this.loading = false;
    },
  },

  async mounted() {
    this.currency = await this.crmStore.getCurrency(this.to, this.from);
    this.result = this.currency.result;
    this.date = this.currency.date;
    this.loading = false;
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