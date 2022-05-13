<template>
    <div>
        <Header/>
        <div class="wrapper">
            <P4Header/>
            <P4Main/>
            <P4Footer/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import P4Header from '../components/Project4/Header.vue';
import P4Main from '../components/Project4/Main.vue';
import P4Footer from '../components/Project4/Footer.vue';
export default {
    name: 'project4-component',
    components: { Header, Footer, P4Header, P4Main, P4Footer }
}
</script>

<style scoped>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0px;
  height:100%;
}
.wrapper{
  position:relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 90px;
}
</style>