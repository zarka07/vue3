<template>
  <div>
    <Header />

    <div class="container">
      <div class="dataProcessing">
        <p>Обработка ваших данных:</p>
        <!-- progress bar -->
        <progress-bar
          :barPercent="barPercent"
          :barColor="barColor"
          :barHeight="barHeight"
          :barProgress="barProgress"
          >{{ barProgress }}</progress-bar
        >
        <!-- description -->
        <div class="description">
          <div v-if="barPercent > 15" class="elem">
            Анализ введенных данных ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 25" class="elem">
            Коррекция астрологического знака ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 35" class="elem">
            Расчет вариаций ответов ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 45" class="elem">
            Генерация предсказания ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 50" class="elem">
            Сохранение результата ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 65" class="elem">
            Поиск свободного оператора ..... <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 75" class="elem">
            Начало озвучки и записи аудио - сообщения .....
            <span>Выполнено!</span>
          </div>
          <div v-if="barPercent > 76" class="elem" style="color: #b53e42">
            <b>ИДЁТ ЗАПИСЬ</b>
          </div>
          <div v-if="barPercent == 100" class="elem">ГОТОВО!</div>
        </div>
        <!-- submit button -->
        <div class="submit" v-if="barPercent == 100" style="text-align: center">
          <button
            type="submit"
            class="submitButton"
            @click.prevent="this.$router.push({ name: 'p4main-get-data' })"
          >
            ДАЛЕЕ
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProgressBar from "./Bar.vue";
import Header from "../Header.vue";
import Footer from "../Footer.vue";

export default {
  name: "data-processing",
  components: {
    "progress-bar": ProgressBar,
    Header,
    Footer,
  },
  data() {
    return {
      barColor: "#419330",
      barHeight: 45,
      barPercent: 0,
      barProgress: "",
      text: "Анализ введенных данных",
    };
  },
  methods: {
    loadBar() {
      let i = 0;
      if (i == 0) {
        i = 1;
        let id = setInterval(() => {
          if (this.barPercent >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            this.barPercent++;
          }
        }, 50);
      }
    },
  },
  mounted() {
    this.loadBar();
  },
  watch: {
    barPercent() {
      this.barProgress = this.barPercent + "%";
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 586px) {
  .container {
    height: 80vh;
  }
}
@media only screen and (min-width: 587px) {
  .container {
    height: 90vh;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 375px;
}
.dataProcessing {
}

p {
  font-weight: 700;
  padding-top: 2vh;
}

span {
  color: green;
}

.description {
  text-align: left;
  font-size: 13px;
}

.elem {
  margin-top: 2vh;
}

.submit {
  margin: 2vh auto 1vh auto;
  width: 100%;
}
.submitButton {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #315dfa;
  border: 0;
  height: 45px;
  width: 100%;
}
</style>
