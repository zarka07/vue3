<template>
  <div>
    <form class="form">
      <div class="formTitle" :title="questions.description.title">
        {{ questions.description.title }}
      </div>
      <div class="formDescription">
        <div class="container" :style="questions.description.style">
          <div v-for="(question, index) in questions.questions" :key="index">
            <!-- question type radio -->
            <div v-if="questions.description.type === 'radio'">
              <input
                :id="question.id"
                class="custom-checkbox"
                name="name"
                :checked="question.checked"
                :value="questions.description.value"
                :type="questions.description.type"
                @click="showButton(), (question.checked = true)"
              />
              <label :for="question.id"> {{ question.answer }}</label>
            </div>
            <!-- question type select -->
            <div v-else class="custom-picker">
              <select id="day" v-model="selectedDate.day">
                <option disabled value="null">День</option>
                <option
                  v-for="(value, index) in 31"
                  :key="index"
                  :value="value"
                  class="option"
                >
                  {{ index + 1 }}
                </option>
              </select>

              <select
                id="month"
                v-model="selectedDate.month"
                @change="selectSign(selectedDate.month)"
              >
                <option disabled value="">Месяц</option>
                <option v-for="(value, index) in 12" :key="index">
                  {{ index + 1 }}
                </option>
              </select>

              <select id="year" v-model="selectedDate.year" @change="checkAll()">
                <option disabled value="">Год</option>
                <option v-for="(year, index) in years" :key="index">
                  {{ year }}
                </option>
              </select>

              <p class="showError" v-if="!showSubmit">Пожалуйста, выберите ответ</p>

              <div v-if="selectedDate.month" @click="checkAll()">
                <img class="zodiac" :src="'zodiac/' + src" />
                <div class="zodiac-description">{{ description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- submit button -->
      <div class="p4submit" v-if="showSubmit">
        <button type="submit" class="p4submitButton" @click.prevent="submit">
          ДАЛЕЕ
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "question-component",
  props: {
    questions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      showSubmit: false,
      title: "",
      style: "",
      checked: false,
      years: [
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
      ],
      selectedDate: {},
      src: "",
      description: "",
    };
  },
  methods: {
    showButton() {
      this.showSubmit = true;
    },
    submit() {
      this.showSubmit = false;
      this.$emit("nextQuestion");
    },
    selectSign(sign) {
      switch (sign) {
        case "1":
          this.src = "vodolej.png";
          this.description = "Водолей";
          break;
        case "2":
          this.src = "ribi.png";
          this.description = "Рыбы";
          break;
        case "3":
          this.src = "oven.png";
          this.description = "Овен";
          break;
        case "4":
          this.src = "telec.png";
          this.description = "Телец";
          break;
        case "5":
          this.src = "blizneci.png";
          this.description = "Близнецы";
          break;
        case "6":
          this.src = "rak.png";
          this.description = "Рак";
          break;
        case "7":
          this.src = "lev.png";
          this.description = "Лев";
          break;
        case "8":
          this.src = "deva.png";
          this.description = "Дева";
          break;
        case "9":
          this.src = "vesi.png";
          this.description = "Весы";
          break;
        case "10":
          this.src = "skorpion.png";
          this.description = "Скорпион";
          break;
        case "11":
          this.src = "strelez.png";
          this.description = "Стрелец";
          break;
        case "12":
          this.src = "kozerog.png";
          this.description = "Козерог";
          break;
        default:
          console.log("nothing");
      }
      return [this.src, this.description];
    },
    checkAll() {
      if (this.selectedDate.year && this.selectedDate.month && this.selectedDate.day) {
        this.showSubmit = true;
      }
    },
  },
};
</script>

<style scoped>
.showError {
  width: 100%;
  height: 36px;
  padding-top: 1vh;
  text-align: center;
  color: #d0060e;
  background-color: #ffd8cf;
  font-weight: 300;
}

.container {
  display: flex;
  width: 95%;
}

select {
  padding-left: 1em;
}

.formTitle {
  background-color: rgb(52, 59, 77);
  color: white;
  font-weight: 500;
  padding: 15px;
  font-size: 17px;
  text-align: center;
}

.formDescription {
  font-size: 14px;
  padding: 20px;
  background-color: rgba(225, 226, 230, 0.954);
  font-weight: 400;
}

.p4submit {
  text-align: center;
  margin-top: 8px;
}

.p4submitButton {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #315dfa;
  border: 0;
  height: 45px;
  width: 100%;
}

.custom-picker {
  width: 100%;
  display: grid;
}

#day,
#month,
#year {
  width: 50%;
  height: 45px;
  margin-left: 25%;
  margin-bottom: 1vh;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-weight: 500;
  font-size: 18px;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background-color: #fff;
}

.custom-checkbox:checked + label::before {
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23000'/%3e%3c/svg%3e");
}

.custom-checkbox:disabled + label::before {
  background-color: #fff;
}

.custom-checkbox:checked + label {
  color: rgb(49, 93, 250);
  font-weight: 700;
  font-style: normal;
}

.zodiac {
  width: 81px;
  height: 82px;
}

.zodiac-description {
  margin-top: 0;
  font-size: 12px;
  font-weight: 400;
}
</style>
