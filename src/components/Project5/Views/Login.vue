<template>
  <div class="container">
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
      </div>
      <div class="mt-4 d-grid gap-2">
        <button type="submit" class="btn btn-info">
          Войти <i class="bi bi-arrow-right-square-fill float-end"></i>
        </button>
      </div>
      <div class="form-button mt-3 account have-not-account">
        <p>
          Нет аккаунта?
          <router-link class="register" to="/register"
            >Зарегистрироваться</router-link
          >
        </p>
      </div>
    </form>
    <!-- <div class="form">
      <span>Домашняя бухгалтерия</span>
      <form class="" @submit.prevent="onSubmit">
        <div class="">
          <div class="">
            <input
              id="email"
              type="text"
              v-model.trim="email"
              :class="{
                error:
                  (v$.email.$errors && !v$.email.required) ||
                  (v$.email.$dirty && !v$.email.email),
              }"
            />
            <label for="email">Email</label>
            <small
              class="helper-text invalid"
              v-if="v$.email.$dirty && !v$.email.required"
              >Поле не должно быть пустым</small
            >
            <small
              class="helper-text invalid"
              v-else-if="v$.email.$dirty && !v$.email.email"
              >Введите корректный Email</small
            >
          </div>
          <div class="">
            <input
              id="password"
              type="password"
              v-model.trim="password"
              :class="{
                invalid:
                  (v$.password.$dirty && !v$.password.required) ||
                  (v$.password.$dirty && !v$.password.minLenght),
              }"
            />
            <label for="password">Пароль</label>
            <small
              class="helper-text invalid"
              v-if="v$.password.$dirty && !v$.password.required"
              >Введите пароль</small
            >
            <small
              class="helper-text invalid"
              v-else-if="v$.password.$dirty && !v$.password.minLength"
              >Пароль должен быть
              {{ v$.password.$params.minLength.min }} символов. Сейчас он
              {{ password.length }}</small
            >
          </div>
        </div>
        <div class="">
          <div>
            <button class="" type="submit">
              Войти
              <i class="">send</i>
            </button>
          </div>

          <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
          </p>
        </div>
      </form>
    </div> -->
  </div>
</template>

<script>
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
//import messages from "../utils/messages";
import { CRMstore } from "@/stores/CRMstore";
export default {
  name: "login-component",
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
  }),
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
  },
  mounted() {
    // if (messages[this.$route.query.message]) {
    //   this.$message(messages[this.$route.query.message]);
    // }
  },
  methods: {
    async onSubmit() {
      if (this.v$.$invalid) {
        console.log('pressed')
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      //console.log(formData)
      try {
        await this.crmStore.login(formData);
        this.$router.push("/project5");
      } catch (e) {
        console.log("error when log-in");
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
</style>