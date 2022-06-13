<template>
  <div
    class="
      edit
      border border-success
      col-xl-5 col-lg-5 col-md-5 col-sm-5
      bg-light
      flex-wrap
      m-2
    "
  >
    <div class="p-2">
      <div class="mb-4">
        <h4>Редактировать</h4>
      </div>

      <form>
        <div class="mb-2">
          <select>
            <option>Category</option>
          </select>
          <label>Выберите категорию</label>
        </div>

        <div class="mb-2">
          <input type="text" id="name" placeholder="Название" />
        </div>

        <div class="mb-4">
          <input id="limit" type="number" placeholder="Лимит" />
        </div>

        <button type="submit" class="btn btn-success shadow-sm rounded mb-2">
          СОЗДАТЬ <i class="bi bi-send float-end ms-2"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name:'edit-categorie'
}
</script>