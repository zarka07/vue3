<template>
  <div class="p-4 record">
    <div class="">
      <h3>Новая запись</h3>
    </div>
    <hr />
    <form class="">
      <div class="">
        <select>
          <option>name cat</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input class="" name="type" type="radio" value="income" />
          <span>Доход</span>
        </label>
      </p>
      <p>
        <label>
          <input class="" name="type" type="radio" value="outcome" />
          <span>Расход</span>
        </label>
      </p>

      <div class="">
        <input id="amount" type="number" placeholder="Сумма" />
        <!-- <span class="">amount пароль</span> -->
      </div>

      <div class="mt-4">
        <input id="description" type="text" placeholder="Описание" />
        <!-- <span class="helper-text invalid">description пароль</span> -->
      </div>

      <div class="mt-4">
        <button type="submit" class="btn btn-success shadow-sm rounded ">
          СОЗДАТЬ <i class="bi bi-send float-end ms-2"></i>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "record-component",
  mounted() {},
};
</script>



