<template>
  <div class="form-body">
    <div>
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
            <div class="form-items">
              <h3>Sign In</h3>
              <form class="requires-validation" novalidate>
                <!-- email input -->
                <div class="col-md-12">
                  <div :class="{ error: v$.email.$errors.length }">
                    <input
                      class="form-control"
                      type="email"
                      v-model="email"
                      placeholder="E-mail"
                      autocomplete="email"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.email.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <!-- password input -->
                <div class="col-md-12">
                  <div :class="{ error: v$.password.$errors.length }">
                    <input
                      class="form-control"
                      type="password"
                      v-model="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      required
                    />

                    <div
                      class="input-errors"
                      v-for="error of v$.password.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
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

<script>
import { UserStore } from "@/stores/UserStore";
import getApiForProject1 from "@/mixins/getApiForProject1";
import { email, required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { LoaderStore } from "@/stores/LoaderStore";
export default {
  name: "signin-component",
  mixins: [getApiForProject1],
  setup() {
    const mainStore = UserStore();
    const loader = LoaderStore();
    return { v$: useVuelidate(), mainStore, loader };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(8) },
    };
  },
  emits: {
    showUser: {
      type: String,
      required: false,
      default: "",
    },
    back: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    async signIn() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      const formData = {
        login: this.email,
        password: this.password,
      };
      try {
        this.loader.loading = true;
        await this.login(formData).then((result) =>
          this.getUserInfo(result.data).then((response) => {
            if (response.data) {
              this.mainStore.userInfo = response.data;
              this.$emit("showUser");
            }
          })
        );
        this.loader.loading = false;
      } catch (e) {
        let statusText = e.response.statusText;
        let statusCode = e.response.status;
        switch (statusCode) {
          case 400:
            alert(statusCode +" "+ statusText);
            break;
          case 401:
            alert(statusCode +" "+ statusText);
            break;
          case 403:
            alert(statusCode +" "+ statusText);
            break;
          case 404:
            alert(statusCode +" "+ statusText);
            break;
            case 405:
            alert(statusCode +" "+ statusText);
            break;
          case 422:
            alert(statusCode +" "+ statusText);
            break;
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
            alert(statusCode +" "+ statusText);
            break;
          default:
            alert(statusCode +" "+ statusText);
        }
        this.loader.loading = false;
      }
    },
    clearForm() {
      (this.email = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
.error-msg {
  color: red;
}
</style>
