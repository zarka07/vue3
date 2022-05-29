<template>
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <p class="formDescription">Домашняя бухгалтерия</p>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          autocomplete="username"
          v-model.trim="email"
        />
        <label for="floatingInput">Email </label>
        <div v-if="v$.$invalid" class="text-danger errors">
          <span v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'email'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          autocomplete="current-password"
          v-model.trim="password"
        />
        <label for="floatingPassword">Пароль</label>
        <div v-if="v$.$invalid" class="text-danger errors">
          <span v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'password'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="input-group mb-3 mt-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Имя"
          aria-label="Имя"
          aria-describedby="basic-addon1"
          v-model.trim="name"
        />
        <br />
        <div v-if="v$.$invalid" class="text-danger errors">
          <span v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'name'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          v-model="agree"
        />
        <label class="form-check-label" for="flexCheckDefault">
          С правилами согласен
        </label>
      </div>

      <div v-if="!v$.$invalid" class="mt-4 d-grid gap-2">
        <button type="submit" class="btn btn-success">
          Зарегистрироваться
          <i class="bi bi-arrow-right-square-fill float-end"></i>
        </button>
      </div>

      <div class="form-button mt-3 account have-not-account">
        <p>
          Уже есть аккаунт?
          <router-link class="register" to="/login">Войти</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "register-component",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
      v$: useVuelidate(),
    };
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { checked: (v) => v },
    };
  },
  methods: {
    async onSubmit() {
      if (this.v$.$invalid) {
        
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      try {
        await this.crmStore.register(formData);
        if(this.crmStore.GET_ERROR){
          this.$toast.error(this.crmStore.GET_ERROR);
          return
        }
        this.$router.push("/login");
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.form {
  background-color: #fff;
  width: 400px;
  height: auto;
  padding: 25px;
}

.formDescription {
  font-size: 1.5rem;
  color: rgb(87, 87, 87);
}

.i {
  margin-left: 25px !important;
}

.have-not-account {
  display: flex;
  justify-content: center;
}

.register {
  color: darkorange;
  font-size: 1.1rem;
}

small {
  color: red;
  text-align: center;
}

.errors {
  margin: 10px;
}
</style>