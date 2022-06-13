<template>
  <div class="header">
    <div class="header__top-background"></div>
    <div class="header__bottom-background">
      <img class="header__logo" src="assets/logoCITI.png" alt="Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style scoped>
@media only screen and (min-width: 1201px) {
  .header {
    height: 90px;
  }
  .header__logo {
    height: 50px;
    padding-left: 20%;
  }
}
@media only screen and (max-width: 1200px) {
  .header {
    height: 80px;
  }
  .header__logo {
    height: 40px;
    padding-left: 20%;
  }
}
@media only screen and (max-width: 992px) {
  .header {
    height: 70px;
  }
  .header__logo {
    height: 35px;
    padding-left: 20%;
  }
}
@media only screen and (max-width: 768px) {
  .header {
    height: 60px;
  }
  .header__logo {
    height: 30px;
    padding-left: 20%;
  }
}
@media only screen and (max-width: 576px) {
  .header {
    height: 50px;
  }
  .header__logo {
    height: 25px;
    padding-left: 20%;
  }
}
@media only screen and (max-width: 376px) {
  .header {
    height: 40px;
  }
  .header__logo {
    height: 20px;
    padding-left: 20%;
  }
}

.header {
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header__top-background {
  background-color: #333333;
  height: 30%;
}

.header__bottom-background {
  background: linear-gradient(#00afed 0%, #00569a 100%);
  height: 70%;
  display: flex;
  align-items: center;
}
</style>