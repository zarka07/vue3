<template>
  <div class="form-body">
    <div>
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
            <div class="form-items">
              <h3>Sign In</h3>
              <form class="requires-validation" novalidate netlify name="signin-form">
                <!-- email input -->
                <div class="col-md-12">
                  <div :class="{ error: v$.email.$silentErrors.length }">
                    <input
                      class="form-control"
                      type="email"
                      v-model="form.email"
                      placeholder="E-mail"
                      autocomplete="email"
                      name="email"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.email.$silentErrors"
                      :key="error.$uid"
                    >
                      <div class="error-msg pt-1">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <!-- password input -->
                <div class="col-md-12">
                  <div :class="{ error: v$.password.$silentErrors.length }">
                    <input
                      class="form-control"
                      type="password"
                      v-model="form.password"
                      placeholder="Password"
                      autocomplete="current-password"
                      name="password"
                      required
                    />

                    <div
                      class="input-errors"
                      v-for="error of v$.password.$silentErrors"
                      :key="error.$uid"
                    >
                      <div class="error-msg pt-1">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <!-- back button -->
                <div class="form-button mt-3">
                  <button
                    type="button"
                    @click.prevent="$emit('back')"
                    class="btn btn-primary"
                  >
                    back
                  </button>
                </div>
                <!-- sign-in button -->
                <div class="form-button mt-3">
                  <button type="submit" @click.prevent="signIn" class="btn btn-success">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserStore } from "@/stores/UserStore";
import { email, required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { LoaderStore } from "@/stores/LoaderStore";
import { reactive, defineEmits } from "vue";

const mainStore = UserStore();
const loader = LoaderStore();
const form = reactive({
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};
const emit = defineEmits(["sign-in"]);
const v$ = useVuelidate(rules, form);

function signIn() {
  if (v$._value.$silentErrors.length != 0) {
    return;
  }
  loader.loading = true;
  try {
    login(form);
    loader.loading = false;
  } catch (e) {
    console.log(e);
    loader.loading = false;
  }
}
function login() {
  const email = mainStore.userInfo.email;
  const password = mainStore.userInfo.password;
  if (email == form.email && password == form.password) {
    emit("showUser");
    clearForm();
  } else {
    alert("Login or password is incorrect");
    clearForm();
  }
}
function clearForm() {
  form.email = "";
  form.password = "";
}

</script>

<style scoped>
.error-msg {
  color: red;
  font-size: small;
}
</style>
