<template>
  <div class="loader">
    {{ t("Loader") }}
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.loader {
  padding-top: 30vh;
  color: #fff;
  text-align: center;
  font-size: 6rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 91%);
  transition: opacity 0.2s ease;
  z-index: 100;
}
</style>
