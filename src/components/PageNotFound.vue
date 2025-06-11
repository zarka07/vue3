<template>
  <div class="not-found-container">
    <div class="stars"></div>
    <div class="message">
      <h1>404</h1>
      <p>Page not found</p>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(#000010, #000000);
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.message {
  z-index: 2;
  animation: fadeIn 2s ease-in-out;
}

.message h1 {
  font-size: 8rem;
  margin: 0;
  animation: blink 1.5s infinite;
}

.message p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.message a {
  text-decoration: none;
  color: #00bfff;
  font-weight: bold;
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  pointer-events: none;
}

.stars::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  box-shadow:
    50vw 10vh white,
    30vw 50vh white,
    60vw 30vh white,
    20vw 80vh white,
    80vw 70vh white;
  animation: twinkle 2s infinite ease-in-out;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: translateY(0); }
  50% { opacity: 0.3; transform: translateY(5px); }
}
</style>