<template>
  <div class="about">
    <h1 @click="router.go(-1)">{{ t("About") }}</h1>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
let { t } = useI18n();
const router = useRouter();
</script>
<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  height: 100vh;
}
</style>
