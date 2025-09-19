<template>
<title class="AF">AlphaFilterParser.vue</title>
  <div class="parser-wrapper" style="display: flex; gap: 20px; margin: 20px 0">
    <div style="flex: 1">
      <input
        v-model="article"
        placeholder="Введіть артикул (наприклад, af1779)"
        @keyup.enter="fetchData"
        style="width: 100%; padding: 10px"
      />
      <button @click="fetchData" style="margin-top: 10px; padding: 10px 20px">
        Пошук
      </button>
    </div>
    <div style="flex: 2; background: #f7f7f7; padding: 15px; border: 1px solid #ddd">
      <div v-if="loading">Завантаження...</div>
      <div v-else-if="error" style="color: red">{{ error }}</div>
      <div v-else>{{ result }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphaFilterParser",
  data() {
    return {
      article: "",
      result: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    async fetchData() {
      if (!this.article) return;

      this.loading = true;
      this.error = "";
      this.result = "";

      try {
        const response = await fetch(`http://localhost:3000/parse/${this.article}`);
        const data = await response.json();
        console.log('data: ', data);
        if (data.result) {
          this.result = data.result;
        } else {
          this.error = "Не вдалося отримати дані.";
        }
      } catch (err) {
        this.error = "Помилка з'єднання з сервером.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
