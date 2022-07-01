<template>
  <div class="about">
    <h1 @click="$router.go(-1)">About</h1>
  </div>
</template>
<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  height: 100vh;
}
</style>
