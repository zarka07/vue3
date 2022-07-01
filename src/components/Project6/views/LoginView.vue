<template>
  <Header />

  <div class="main_container">
    <div style="width: 100% !important">
      <div class="top-section">
        <div class="description__title">
          <p class="main-title__text">Welcome to</p>
          <p class="main-title__text">Business Analytics Online</p>
        </div>
      </div>

      <div class="bottom-section">
        <div class="bottom-section__description">
          <p class="bottom__description__analytics">
            <strong>Business Analytics</strong> — a new, convenient tool for managing and
            forecasting your business performance, which will help analyze your own
            finances and cash flows, visualize your reporting, business processes, KPI's
          </p>

          <div class="description__article">
            <img class="article__vector" src="/assets/vectorCITI.png" alt="vector" />
            <div class="article">
              <div class="article__title">
                <strong>Interactive Reporting </strong>
              </div>
              <div class="article__text">
                In just a few clicks, you can connect your data from 1C, CRM (Bitrix24,
                AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova
                Poshta), Google Analytics and many more systems that reflect different
                aspects of business activities.
              </div>
            </div>
          </div>
          <div class="description__article">
            <img class="article__vector" src="/assets/vectorCITI.png" alt="vector" />
            <div class="article">
              <div class="article__title">
                <strong>Automated data updates</strong>
              </div>
              <div class="article__text">
                The application automatically updates and structures the data in just 60
                seconds, saving you time and money.
              </div>
            </div>
          </div>
          <div class="description__article">
            <img class="article__vector" src="/assets/vectorCITI.png" alt="vector" />
            <div class="article">
              <div class="article__title">
                <strong>Data Security</strong>
              </div>
              <div class="article__text">
                The Bank guarantees the safety of your personal data, ensuring their
                integrity and confidentiality.
              </div>
            </div>
          </div>
        </div>

        <form class="form-section" @submit.prevent="onSubmit()">
          <div class="section__input" style="width: 90%">
            <label for="floatingInput" class="form__label">Name</label><br />
            <input
              type="text"
              class="form__input"
              id="floatingInput"
              placeholder="Admin"
              autocomplete="username"
              v-model.trim="username"
            />
            <div v-if="usernameErr" class="fieldError">Incorrect value</div>

            <label for="floatingPassword" class="form__label">Password</label><br />
            <input
              type="password"
              class="form__input"
              id="floatingPassword"
              placeholder="12345"
              autocomplete="current-password"
              v-model.number="password"
            />
            <div v-if="passwordErr" class="fieldError">Incorrect value</div>
          </div>

          <button type="submit" class="form__submit">LOGIN</button>

          <div class="">
            <router-link class="form__forgot" :to="{ name: 'LoginView' }"
              >Forgot password</router-link
            >
          </div>

          <button type="submit" class="form__register">Register now</button>
        </form>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "login-view-component",

  components: { Header, Footer },

  data() {
    return {
      username: "",
      password: null,
      usernameErr: false,
      passwordErr: false,
      auth: {
        status: false,
        username: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.username === "Admin") {
        if (this.password === 12345) {
          this.auth.status = true;
          this.auth.username = this.username;
          this.$router.push({ name: "ToDoView" });
          location.reload();
        } else {
          this.passwordErr = true;
          return;
        }
      } else {
        this.usernameErr = true;
        return;
      }
    },
  },

  watch: {
    auth: {
      handler(newData) {
        localStorage.setItem("username", newData.username);
        localStorage.setItem("auth", newData.status.toString());
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1201px) {
  .container {
    height: 100%;
  }
  .top-section {
    background-size: cover;
    height: 50vh;
  }
  .main-title__text {
    font-size: 40px;
  }
  .description__title {
    margin-bottom: 40px;
  }
  .bottom-section__description {
    margin-left: 20%;
  }
  .bottom-section__description {
    margin-left: 20%;
    width: 40%;
  }
  .article {
    font-size: 11px;
  }
  .form-section {
    right: 15vw;
    top: 62vh;
  }
}
@media only screen and (max-width: 1200px) {
  .top-section {
    background-size: cover;
    height: 40vh;
  }
  .main-title__text {
    font-size: 30px;
  }
  .description__title {
    margin-bottom: 30px;
  }
  .bottom-section__description {
    margin-left: 20%;
    width: 40%;
  }
  .article {
    font-size: 10px;
  }
  .form-section {
    right: 12vw;
    top: 50vh;
  }
}
@media only screen and (max-width: 992px) {
  .top-section {
    background-size: cover;
    height: 30vh;
  }
  .main-title__text {
    font-size: 20px;
  }
  .description__title {
    margin-bottom: 20px;
  }
  .bottom-section__description {
    margin-left: 10%;
    width: 45%;
  }
  .article__title {
    font-size: 10px;
  }
  .form-section {
    right: 12vw;
    top: 38vh;
  }
}
@media only screen and (max-width: 768px) {
  .top-section {
    background-size: cover;
    height: 20vh;
  }
  .main-title__text {
    font-size: 14px;
  }
  .description__title {
    margin-bottom: 15px;
  }
  .bottom-section__description {
    margin-left: 2%;
    width: 50%;
  }
  .article {
    font-size: 11px;
  }
  .form-section {
    right: 3vw;
    top: 27vh;
  }
}
@media only screen and (max-width: 576px) {
  .main_container {
    height: 100vh !important;
  }
  .top-section {
    background-size: cover;
    height: 15vh;
  }
  .main-title__text {
    font-size: 11px;
  }
  .description__title {
    margin-bottom: 10px;
  }
  .bottom-section__description {
    margin-left: 5%;
    width: 90%;
  }
  .article {
    font-size: 11px;
  }
  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 100vh;
    width: 88% !important;
    height: 25vh !important;
    padding-top: 5px;
  }
  .section__input {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .form__label {
    margin-right: 10px;
  }
  .form__input {
    width: 40% !important;
  }
  .form__submit {
    width: 30vw !important;
    margin-top: 7px !important;
  }
}
@media only screen and (max-width: 376px) {
  .container {
    height: 95vh !important;
  }
  .top-section {
    background-size: cover;
    height: 15vh;
  }
  .main-title__text {
    font-size: 10px;
  }
  .description__title {
    margin-bottom: 10px;
  }
  .bottom-section__description {
    margin-left: 5%;
    width: 90%;
  }
  .bottom__description__analytics {
    font-size: 11px;
  }
  .article {
    font-size: 11px;
  }
  .form-section {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 40;
    width: 88% !important;
    height: 25vh !important;
    padding-top: 5px;
  }
  .section__input {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .form__label {
    display: none !important;
  }
  .form__input {
    width: 40% !important;
  }
  .form__submit {
    width: 30vw !important;
    margin-top: 7px !important;
  }
}

.container {
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
}

.top-section {
  display: flex;
  align-items: flex-end;
  background-image: url("/public/assets/background.png");
  background-repeat: no-repeat;
}

.description__title {
  margin-left: 20%;
  line-height: 1.5;
  text-align: left;
}

.main-title__text {
  color: rgb(255, 255, 255) !important;
  line-height: 1.5;
  margin: 0;
  font-weight: 700;
}

.bottom-section {
  height: 52vh;
  display: flex;
  flex-flow: column;
}

.bottom-section__description {
  line-height: 1.5;
  text-align: left;
  margin-top: 2vh;
}

.bottom__description__analytics {
  font-size: 11px;
}

.description__article {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
}

.article {
  /* line-height: 1.5; */
  margin-left: 15px;
}

.article__vector {
  width: 13px;
  margin-top: 3px;
}

.article__text {
  margin-top: 4px;
  font-size: 10px;
}

.form-section {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form__label {
  float: left;
  font-size: 11px;
  color: #464646;
  margin-left: 9px;
  margin-top: 15px;
}

.form__input {
  width: 100%;
  height: 30px;
}

.form__submit {
  width: 93%;
  height: 30px;
  margin: 25px 0 10px 0;
  color: #fff;
  background-color: #0076c0;
  border-color: transparent;
}

.form__submit:hover {
  color: #0076c0;
  background-color: #fff;
  border: 2px solid #0076c0;
}

.form__forgot {
  color: #056dae;
  font-size: 12px;
}

.form__register {
  color: #333333;
  background-color: #f6f6f6;
  border-color: transparent;
  width: 100%;
  height: 35px;
  margin-top: 10px;
}

.fieldError {
  color: red;
  text-align: left;
  font-size: 10px;
}
</style>
