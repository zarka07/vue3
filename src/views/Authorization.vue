<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-12 form">
          <component
            @sign-in="signIn"
            @back="back"
            @showUser="toUser"
            v-if="selected"
            :is="selected"
          >
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/Project1/SignUp.vue";
import SignIn from "@/components/Project1/SignIn.vue";
export default {
  components: { signup: SignUp, signin: SignIn },

  name: "AuthorizationItem",

  emits: {
    showUser: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      items: ["signup", "signin"],
      selected: "signup",
      articles: [],
    };
  },

  computed: {
    currentTabComponent: function () {
      return this.selected.toLowerCase();
    },
  },

  methods: {
    back() {
      if (this.selected == "signin") {
        this.selected = "signup";
      }
    },
    signIn() {
      if (this.selected == "signup") {
        this.selected = "signin";
      }
    },
    toUser() {
      this.$router.push("/user");
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap");

.form-body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

.form-body {
  height: 100%;
  background-color: #152733;
  overflow-x: hidden;
}

.form-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.form-holder .form-content {
  position: relative;
  text-align: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 5px 0 5px 0;
}

.form-content .form-items {
  border: 3px solid #fff;
  padding: 40px;
  display: inline-block;
  width: 100%;
  min-width: 400px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: center;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.form-content h3 {
  color: #fff;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-content h3.form-title {
  margin-bottom: 30px;
}

.form-content p {
  color: #fff;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 30px;
}

.form-content label,
.was-validated .form-check-input:invalid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
  color: #fff;
}

.form-content input[type="text"],
.form-content input[type="password"],
.form-content input[type="email"],
.form-content select {
  width: 100%;
  padding: 9px 20px;
  text-align: left;
  border: 0;
  outline: 0;
  border-radius: 6px;
  background-color: #fff;
  font-size: 15px;
  font-weight: 300;
  color: #8d8d8d;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.btn-primary {
  background-color: #6c757d;
  outline: none;
  border: 0px;
  box-shadow: none;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #495056;
  outline: none !important;
  border: none !important;
  box-shadow: none;
}

.form-content textarea {
  position: static !important;
  width: 100%;
  padding: 8px 20px;
  border-radius: 6px;
  text-align: left;
  background-color: #fff;
  border: 0;
  font-size: 15px;
  font-weight: 300;
  color: #8d8d8d;
  outline: none;
  resize: none;
  height: 120px;
  -webkit-transition: none;
  transition: none;
  margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
  border: 0;
  background-color: #ebeff8;
  color: #8d8d8d;
}

.mv-up {
  margin-top: -9px !important;
  margin-bottom: 8px !important;
}

.invalid-feedback {
  color: #ff606e;
}

.valid-feedback {
  color: #2acc80;
}

.form {
  padding: 0;
}

@media screen and (max-width: 576px) {
  .background {
    display: none;
  }
}
</style>
