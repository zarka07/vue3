<template>
  <div class="p-4 record" v-if="categories.length">
    <div class="">
      <h3>New item</h3>
    </div>
    <hr />
    <form class="newItem" @submit.prevent="onSubmit">
      <div class="pb-2">
        <select id="selectCategory" v-model="current" placeholder="Choose category">
          <option disabled>Categories:</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.categoryName }}
          </option>
        </select>
        <br />
        <label for="selectCategory" class="chooseCategory">Choose the category</label>
      </div>

      <div class="radio pb-2">
        <label>
          <input class="" v-model="type" name="type" type="radio" value="income" />
          <span class="mx-2">Income</span>
        </label>
        <label>
          <input class="" v-model="type" name="type" type="radio" value="outcome" />
          <span class="mx-2">Expenses</span>
        </label>
      </div>

      <div class="summ">
        <input id="summ" v-model.number="summ" type="number" placeholder="Summ" />
        <div v-if="v$.$invalid" class="text-danger errors">
          <span class="error" v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'summ'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="mt-4 _description">
        <input
          id="description"
          v-model="description"
          type="text"
          placeholder="Description"
        />
        <div v-if="v$.$invalid" class="text-danger errors">
          <span class="error" v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'description'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="mt-4">
        <button type="submit" class="btn btn-success shadow-sm rounded">
          CREATE <i class="bi bi-send float-end ms-2"></i>
        </button>
      </div>
    </form>
  </div>
  <p class="text-center m-4 p-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 flex-wrap" v-else>
    You didn't add categories. <router-link to="/categories">Add new</router-link>
  </p>
</template>
<script>
import { CRMstore } from "@/stores/CRMstore";
import useVuelidate from "@vuelidate/core";
import { required, minLength, between } from "@vuelidate/validators";
export default {
  name: "record-component",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      current: {},
      type: "income",
      summ: 1,
      description: "",
    };
  },
  validations() {
    return {
      summ: {
        required,
        between: between(1, 1000000),
      },
      description: {
        required,
        minLength: minLength(3),
      },
    };
  },
  mounted() {
    if (this.categories.length) {
      this.current = this.categories[0].id;
    }
  },
  computed: {
    userBill() {
      return this.crmStore.GET_USER_BILL;
    },
    categories() {
      return this.crmStore.categories;
    },
    canCreateRecord() {
      if (this.type === "income") {
        return true;
      }
      return this.userBill >= this.summ;
    },
  },
  methods: {
    async onSubmit() {
      if (this.v$.$invalid) {
        return;
      }
      if (this.canCreateRecord) {
        const formData = {
          selectedCategoryId: this.current,
          type: this.type,
          summ: this.summ,
          description: this.description,
          date: new Date().toJSON().slice(0, 19),
        };
        try {
          await this.crmStore.createRecord(formData).then((res) => {
            this.$toast.success(`New ${res} has been created!`);
          });
          this.summ = 1;
          this.description = "";
          const newBill =
            this.type === "income"
              ? this.userBill + this.summ
              : this.userBill - this.summ;
          await this.crmStore.updateUserInfo(newBill);
          this.v$.$reset();
        } catch (error) {
          this.$toast.warning(error.message);
        }
      } else {
        this.$toast.error(`You haven't enough money: -${this.summ - this.userBill}`);
      }
    },
  },
};
</script>

<style scoped>
#selectCategory {
  width: 190px;
}

.chooseCategory {
  font-size: 80%;
  color: blue;
  margin-bottom: 10px;
}

.radio {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
}
</style>
