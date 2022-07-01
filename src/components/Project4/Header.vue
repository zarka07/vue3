<template>
  <div class="header">
    <div class="subHeader">НОВЫЙ ГОРОСКОП НА 2023 ГОД!</div>
    <p class="subheader">Узнайте, что вас ждет</p>
  </div>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style scoped>
@media only screen and (max-width: 412px) {
  .header {
    justify-content: flex-end;
    align-items: flex-start;
  }
  .subHeader {
    margin-left: 12px;
  }
}

@media only screen and (min-width: 413px) {
  .header {
    justify-content: center;
    align-items: center;
  }
}

.header {
  background-color: rgb(49, 93, 250) !important;
  color: #afdce5;
  font-weight: 700;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.subHeader {
  padding-top: 1vh;
  font-weight: 700;
  font-size: 19px;
  color: #afdce6;
}

.subheader {
  margin: 5px 0 5px 12px;
  font-style: normal;
  font-size: 13px;
}
</style>
