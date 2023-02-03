<template>
  <div class="form-body">
    <div class="row">
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <h3>Sign Up</h3>
            <form class="requires-validation" novalidate>
              <!-- username input -->
              <div class="col-md-12">
                <div :class="{ error: v$.username.$silentErrors.length }">
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.username"
                    placeholder="Username"
                    autocomplete="username"
                  />
                  <div
                    class="input-errors"
                    v-for="error of v$.username.$silentErrors"
                    :key="error.$uid"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <!-- email input -->
              <div class="col-md-12">
                <div :class="{ error: v$.email.$silentErrors.length }">
                  <input
                    class="form-control"
                    type="email"
                    v-model="form.email"
                    placeholder="E-mail"
                    autocomplete="email"
                  />
                  <div
                    class="input-errors"
                    v-for="error of v$.email.$silentErrors"
                    :key="error.$uid"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <!-- gender input -->
              <!-- <div class="col-md-12">
                <select class="form-select mt-3" required>
                  <option selected disabled value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Femail">Femail</option>
                </select>
              </div> -->
              <!-- password input -->
              <div class="col-md-12">
                <div :class="{ error: v$.password.$silentErrors.length }">
                  <input
                    class="form-control"
                    type="password"
                    v-model="form.password"
                    placeholder="Password (at least 8 long)"
                    autocomplete="new-password"
                  />
                  <div
                    class="input-errors"
                    v-for="error of v$.password.$silentErrors"
                    :key="error.$uid"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <!-- checkbox  -->
              <div class="form-check">
                <div :class="{ error: v$.agree.$silentErrors.length }">
                  <input class="form-check-input" type="checkbox" v-model="form.agree" />
                  <div
                    class="input-errors"
                    v-for="error of v$.agree.$silentErrors"
                    :key="error.$uid"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                  <label class="form-check-label"
                    >I confirm that all data are correct</label
                  >
                </div>
              </div>
              <!-- sign up -->
              <div class="form-button mt-3">
                <button type="submit" @click.prevent="signUp" class="btn btn-success">
                  Sign Up
                </button>
              </div>
              <!-- sign in -->
              <div class="form-button mt-3 account">
                Already have an account?
                <button
                  type="submit"
                  @click.prevent="signIn"
                  class="btn account btn-link"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits, computed } from "vue";
import { UserStore } from "@/stores/UserStore";
import { email, required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { LoaderStore } from "@/stores/LoaderStore";

const mainStore = UserStore();
const loader = LoaderStore();
const form = reactive({
  username: "",
  email: "",
  password: "",
  agree: false,
});
const rules = computed(() => {
  return {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    agree: { checked: (v) => v },
  };
});
const emit = defineEmits(["sign-in"]);

const v$ = useVuelidate(rules, form);

const signIn = () => {
  emit("sign-in");
  clearForm();
};
const signUp = () => {
  if (v$._value.$silentErrors.length != 0) {
    return;
  }
  loader.loading = true;
  try {
    mainStore.userInfo.username = form.username;
    mainStore.userInfo.email = form.email;
    mainStore.userInfo.password = form.password;
    emit("sign-in");
    clearForm();
  } catch (e) {
    console.log(e);
    clearForm();
  }
  loader.loading = false;
};
function clearForm() {
  form.username = "";
  (form.email = ""), (form.password = "");
}
</script>

<style scoped>
.account {
  color: gold;
}

.form-check {
  margin-top: 20px;
}

.form-content select .form-content input {
  color: black;
}

.error-msg {
  color: red;
  font-size: small;
}
</style>
