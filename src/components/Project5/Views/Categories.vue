<template>
  <div class="p-4 categories">
    <div class="">
      <h3>Категории</h3>
    </div>
    <hr />
    <section>
      <div class="row justify-content-evenly">
        <div class="create col-6">
          <div class="p-2">
            <div class="mb-4">
              <h4>Создать</h4>
            </div>

            <form>
              <div class="mb-2">
                <input id="name" type="text" placeholder="Название" />
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
        <div class="edit col-6">
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
                <input type="text" id="name" placeholder="Название"/>
              </div>

              <div class="mb-4">
                <input id="limit" type="number" placeholder="Лимит"/>
              </div>

              <button type="submit" class="btn btn-success shadow-sm rounded mb-2">
                СОЗДАТЬ <i class="bi bi-send float-end ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "categories-component",
};
</script>
