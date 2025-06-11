<template>
  <div
    class="create border border-success col-xl-5 col-lg-5 col-md-5 col-sm-5 bg-info flex-wrap m-2"
  >
    <div class="p-2">
      <div class="mb-4">
        <h4>Create</h4>
      </div>

      <form @submit.prevent="addCategory">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingName"
            placeholder="Enter title"
            v-model="categoryName"
          />
          <label for="floatingName">Title</label>
          <!-- <div v-if="v$.$dirty" class="text-danger errors">
            <span v-for="item in v$.$silentErrors" :key="item.uid">
              <i v-if="item.$property === 'categorieName'">{{
                item.$message
              }}</i>
            </span>
          </div> -->
        </div>

        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingLimit"
            placeholder="Limit"
            min="1"
            v-model="categoryLimit"
          />
          <label for="floatingLimit">Limit</label>
          <div class="error" v-if="!v$.categoryLimit.required">Enter limit</div>
          <!-- <div v-if="v$.$dirty" class="text-danger errors">
            <span v-for="item in v$.$silentErrors" :key="item.uid">
              <i v-if="item.$property === 'categorieLimit'">{{
                item.$message
              }}</i>
            </span>
          </div> -->
        </div>

        <button
          v-if="!v$.$invalid"
          type="submit"
          class="btn btn-success shadow-sm rounded mb-2"
        >
          CREATE <i class="bi bi-send float-end ms-2"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
//import { CRMstore } from "@/stores/CRMstore";
import { useVuelidate } from "@vuelidate/core"
import { required } from "@vuelidate/validators"
import { reactive, computed } from "vue"

//emits: ["categoryAdded"],
const state = reactive({
  categoryName: '',
  categoryLimit: '',
})
const rules = computed(() => ({
  categoryName: { required },
  categoryLimit: { required },
}));
const v$ = useVuelidate(rules, state);
async function addCategory() {
  if (this.v$.$invalid) {
    for (let err of this.v$.$silentErrors) {
      this.$toast.warning(err.$message);
    }
    return;
  }

  await this.crmStore
    .setNewCategory({
      name: this.categoryName,
      limit: this.categoryLimit,
    })
    .then((res) => {
      this.$toast.success(`Category ${res.newCategory.categoryName} added`);
      this.categoryName = "";
      this.categoryLimit = "";
      this.v$.$reset();
      this.$emit("categoryAdded");
    });
}
</script>
