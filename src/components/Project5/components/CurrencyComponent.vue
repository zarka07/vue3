<template>
  <div v-if="billParams.loading" aria-hidden="true">
    <div class="m-1">
      <p class="card-text placeholder-glow">
        <span class="placeholder col-5"></span>
        <span class="placeholder col-9 ms-2 mt-4"></span>
        <span class="placeholder col-12 ms-2 mt-2"></span>
      </p>
    </div>
    <hr />
  </div>
  <div v-else>
    <div class="mb-2">
      <span class="text-light">Курс валют</span>
    </div>
    <table class="text-light table">
      <thead>
        <tr>
          <th scope="col">Валюта</th>
          <th scope="col">Курс</th>
          <th scope="col">Дата</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{{ billParams.to }}</td>
          <td>{{ (100/billParams.result).toPrecision(4) || "Нет соединения с сервером" }}</td>
          <td>{{ rateDate || date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "currency-component",

  props: ["billParams", "rateDate"],

  computed: {
    date() {
      return new Date().toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.currency {
  background-color: rgb(255, 166, 0);
  min-height: 40vh;
}
</style>
