<template>
  <div>
    <div v-if="error.isError" class="alert alert-danger align-items-center" role="alert">
      <div style="text-align: center">
        {{ error.statusCode }}
      </div>
    </div>
    <Header />

    <div class="" style="min-height: 77vh">
      <div class="Header row" style="margin: 0">
        <div class="title col-xs-12 col-sm-6 col-md-6">
          <h2>{{ $t("AppVue.Vue") }}</h2>
        </div>

        <div class="dropdown col-xs-12 col-sm-6 col-md-6">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ $t("AppVue.Language") }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="_locale in locales" :key="_locale" @click="changeLang(_locale)">
              <a class="dropdown-item" href="#">
                {{ $t("AppVue.Language") }}: {{ _locale }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <PostList />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PostList from "@/components/Project2/PostList.vue";
import { ErrorStore } from "@/stores/ErrorStore";
import { useI18n } from "vue-i18n";
let { locale } = useI18n();
const locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",");
const error = ErrorStore();
function changeLang(_locale) {
  if (locale.value !== _locale) {
    locale.value = _locale;
  }
}
</script>

<style scoped>
.Header {
  /* background-image:url('../assets/header-background.jpg'); */
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  height: 13vh;
  width: 100vw;
  align-content: center;
}

.title {
  text-align: center;
  color: #ffc107;
}

.dropdown {
  text-align: center;
}

.btn {
  background-color: #ffc107;
  text-align: center;
}

.dropdown-menu {
  min-width: 5rem;
  text-align: center;
  background-color: rgb(186, 234, 218);
}

.btn .dropdown-toggle {
  z-index: 0;
}
</style>
