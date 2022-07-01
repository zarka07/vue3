<template>
  <div class="p-4">
    <div class="col">
      <h3>История записей</h3>
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
            <th scope="col">Сумма</th>
            <th scope="col">Дата</th>
            <th scope="col">Категория</th>
            <th scope="col">Тип</th>
            <th scope="col">Открыть</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1212</td>
            <td>12.12.32</td>
            <td>name</td>
            <td>
              <span class="rate shadow-sm rounded">Расход</span>
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
