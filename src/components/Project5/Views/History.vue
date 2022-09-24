<template>
  <div class="p-4">
    <div class="col">
      <h3>History</h3>
    </div>
    <hr />
    <div class="history-chart">
      <canvas></canvas>
    </div>

    <section>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sum</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Type</th>
            <th scope="col">Open</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1212</td>
            <td>12.12.32</td>
            <td>name</td>
            <td>
              <span class="rate shadow-sm rounded">Expenses</span>
            </td>
            <td>
              <button class="arrow-btn shadow-sm rounded">
                <i class="bi bi-box-arrow-up-right"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "history-component",
};
</script>

<style scoped>
.bi-box-arrow-up-right {
  font-size: 100% !important;
  color: #fff;
  text-align: center;
}

.arrow-btn {
  width: 50px;
  height: 30px;
  background-color: rgb(64, 190, 232);
  border-color: transparent;
  /* border-radius: 50%; */
}

.rate {
  height: 20px;
  width: auto;
  background-color: rgb(251, 69, 69);
  padding: 4px;
  font-size: 80%;
}
</style>
