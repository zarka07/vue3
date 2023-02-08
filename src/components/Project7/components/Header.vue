<template>
  <nav class="nav">
    <div class="nav__group53">
      <img src="/assets/images/Group53.svg" alt="group53" />
      <h5 class="nav__lang nav__lang__ua" @click="changeLang('ru')">ua</h5>
      <h5 class="nav__lang nav__lang__usa" @click="changeLang('en')">en</h5>
    </div>

    <div id="nav__title" :style="style">
      <img src="/assets/images/Union.svg" alt="union" />
    </div>

    <button type="button" class="nav__group176" @click="showDropdown = !showDropdown">
      <img src="/assets/images/Group176.svg" alt="two lines" />
      <ul class="dropdown" v-if="showDropdown">
        <li>
          <router-link to="/about" class="dropDownButton"
            ><h5>{{ $t("Where") }}?</h5></router-link
          >
        </li>
        <li>
          <router-link to="/about" class="dropDownButton"
            ><h5>{{ $t("What") }}?</h5></router-link
          >
        </li>
        <li>
          <router-link to="/about" class="dropDownButton"
            ><h5>{{ $t("Who") }}?</h5></router-link
          >
        </li>
      </ul>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
let { locale } = useI18n();
const showDropdown = ref(false);
let style = "clip-path:polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
onMounted(() => {
  //let text = document.getElementById("nav__title");
  setTimeout(set, 1000);
});
function set() {
  style = "clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%); display:inline-block";
}
function changeLang(lang) {
  if (locale.value !== lang) {
    locale.value = lang;
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Grtsk Giga";
  src: local("Grtsk"), url("../fonts/GrtskGiga-Bold.ttf") format("truetype");
}

.nav {
  position: relative;
  display: flex;
  justify-content: center;
}

.nav__group53 {
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav__group176 {
  position: absolute;
  right: 30px;
  top: 25px;
  width: 100px;
  height: auto;
  text-align: right;
  visibility: hidden;
  padding: 0;
  border: none !important;
}

a > h5 {
  font-size: 12px;
}
.dropdown {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.dropDownButton {
  margin-bottom: 5px;
  background: transparent;
  border: none;
  color: #000;
  font-family: "Grtsk Giga Semibold";
  font-size: 12px;
}

.dropDownButton:hover {
  color: #fff;
}

.nav__lang {
  font-family: "Grtsk Giga Semibold";
  color: #fff;
  opacity: 0;
  position: absolute;
  border: none;
  cursor: pointer;
  font-size: 10px;
  -webkit-transition: all 0.8s cubic-bezier(0.12, 0.41, 0.67, 0.95);
  transition: all 0.8s cubic-bezier(0.12, 0.41, 0.67, 0.95);
}

.nav__lang__usa {
  left: 20px;
}

.nav__lang__ua {
  left: 50px;
}

.nav__group53:hover .nav__lang__ua {
  opacity: 1;
  -webkit-transform: translate(30px);
  transform: translate(30px);
  transition: all 1s cubic-bezier(0.12, 0.41, 0.67, 0.95);
}

.nav__group53:hover .nav__lang__usa {
  opacity: 1;
  -webkit-transform: translate(30px);
  transform: translate(30px);
  transition: all 1s cubic-bezier(0.12, 0.41, 0.67, 0.95);
}

#nav__title {
  position: relative;
  display: inline-block;
  font-size: 2em;
  color: transparent;
  font-weight: 700;
  font-family: "Grtsk Giga";
  text-decoration: none;
  overflow: hidden;
  transition: clip-path 700ms ease;
}

#nav__title::before {
  position: absolute;
  content: attr(data-content);
  color: #000;
  text-decoration: none;
  transition: clip-path 700ms ease;
}
button.nav__group176 {
  color: #fff;
  background-color: transparent;
  font-family: "Grtsk Giga";
}

@media (max-width: 480px) {
  .nav__group176 {
    visibility: visible;
    z-index: 999;
  }
}
</style>
