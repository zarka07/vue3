<template>
  <div class="col-6 p-4 currency">
    <div class="mb-2">
      <span class="text-light">Курс валют</span>
    </div>
    <table class="text-light table">
      <thead >
        <tr>
          <th scope="col">Валюта</th>
          <th scope="col">Курс</th>
          <th scope="col">Дата</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td >грн</td>
          <td >12121</td>
          <td >12.12.12</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "currency-component",
};
</script>

<style scoped>
.currency {
  background-color: rgb(255, 166, 0);
  min-height: 40vh;
}
</style>