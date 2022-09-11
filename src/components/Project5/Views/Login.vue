<template>
  <Loader v-if="isLoaded" />
  <div v-else class="container">
    <form class="form" @submit.prevent="onSubmit()">
      <p class="formDescription">Домашняя бухгалтерия</p>

      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          autocomplete="username "
          v-model.trim="email"
        />
        <label for="floatingInput">Email</label>
        <div v-if="v$.$invalid" class="text-danger errors">
          <span class="error" v-for="item in v$.$silentErrors" :key="item.uid">
            <i v-if="item.$property === 'email'">{{ item.$message }}</i>
          </span>
        </div>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Пароль"
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

      <div v-if="!v$.$invalid" class="mt-4 d-grid gap-2">
        <button type="submit" class="btn btn-success">
          Войти <i class="bi bi-arrow-right-square-fill float-end"></i>
        </button>
      </div>

      <div class="form-button mt-3 account have-not-account">
        <p>
          Нет аккаунта?
          <router-link class="register" to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { CRMstore } from "@/stores/CRMstore";
import Loader from "../components/Loader.vue";
export default {
  name: "login-component",
  components: { Loader },
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
    isLoaded: false,
  }),
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
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
      };

      try {
          await this.crmStore.login(formData);
          if(localStorage.getItem("userInfo")){
            this.$router.push({ name: "Home" })
            this.$toast.success(`Вы вошли в систему`)
          }
          else return
      } catch (e) {
        this.$toast.warning(e.message)
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

.errors {
  width:100%;
}
</style>
