<template>
  <div>
    <my-header></my-header>

    <!-- reset cart button -->
    <div class="d-grid gap-2 col-6 mx-auto">
      <button @click="resetCart" class="btn btn-primary" type="button">
        Сбросить корзину
      </button>
    </div>

    <form class="m-2">
      <!-- first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input
              v-model.trim="order.firstName"
              type="text"
              id="form6Example1"
              class="form-control"
              placeholder="Имя"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              v-model.trim="order.lastName"
              type="text"
              id="form6Example2"
              class="form-control"
              placeholder="Фамилия"
            />
          </div>
        </div>
      </div>

      <!-- delivery -->
      <div class="form-outline mb-4">
        <input
          v-model.trim="order.address"
          type="text"
          id="form6Example3"
          class="form-control"
          placeholder="Адрес склада перевозчика:"
        />
      </div>

      <!-- city -->
      <div class="form-outline mb-4">
        <input
          v-model.trim="order.city"
          type="text"
          id="form6Example4"
          class="form-control"
          placeholder="Город"
        />
      </div>

      <!-- mail code -->
      <div class="form-outline mb-4">
        <input
          v-model.number="order.zip"
          type="number"
          id="form6Example4"
          class="form-control"
          placeholder="Почтовый код"
        />
      </div>

      <!-- Checkbox glass-->
      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value="true"
          v-bind:true-value="order.sendGift"
          v-bind:false-value="order.dontSendGift"
          v-model="order.gift"
          id="form6Example8"
        />
        <label class="form-check-label" for="form6Example8">
          Упаковать как хрупкое?
        </label>
      </div>

      <!-- Checkbox delivery name -->
      <div class="form-check d-flex justify-content-center">
        <div style="margin-right: 2.5rem">
          <input
            class="form-check-input"
            type="radio"
            v-bind:value="order.home"
            v-model="order.method"
            id="home"
            name="home"
          />
          <label class="form-check-label" for="home"> Доставка Новой почтой </label>
        </div>

        <!-- checkbox delivery method -->
        <div>
          <input
            class="form-check-input"
            type="radio"
            v-bind:value="order.business"
            v-model="order.method"
            id="business"
            name="business"
          />
          <label class="form-check-label" for="business">
            Доставка другим перевозчиком
          </label>
        </div>
      </div>

      <!-- Submit button -->
      <div class="d-flex justify-content-center mb-4 mt-4">
        <button type="submit" class="btn btn-primary btn-block" v-on:click="submitForm">
          Отправить заказ
        </button>
      </div>

      <!--col-md-12 verify-->
      <div class="col-md-12 verify">
        <pre>
          First Name: {{ order.firstName }}
          Last Name: {{ order.lastName }}
          Address: {{ order.address }}
          City: {{ order.city }}
          Zip: {{ order.zip }}
          State: {{ order.state }}
          Method: {{ order.method }}
          Gift: {{ order.gift }}
        </pre>
      </div>
    </form>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import { UserStore } from "@/stores/UserStore";
export default {
  name: "form-component",
  setup() {
    const userStore = UserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        method: "Новой почтой",
        business: "другим перевозчиком",
        home: "Новой почтой",
        gift: "",
        sendGift: "Упаковать как хрупкое",
        dontSendGift: "Не упаковывать как хрупкое",
      },
    };
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      alert("Submitted");
    },
    resetCart() {
      this.userStore.resetCart();
    },
  },
};
</script>
<style scoped></style>
