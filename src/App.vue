<template>
  <div >
    <div v-if="showLoader">
      <Loader/>
    </div>
    <div>
      <router-view></router-view>
    </div>
    
  </div>
  

</template>

<script>

import { UserStore } from '@/stores/UserStore';
import { LoaderStore } from '@/stores/LoaderStore';
import Loader from '@/components/Project2/Loader.vue';
//import AuthorizationItem from '@/views/Authorization.vue';
//import UserItem from '@/views/User.vue'
export default {
  name: 'App',
  components: {
    Loader
    //AuthorizationItem, UserItem,
  },
  setup(){
    
    const store = UserStore()
    const loader = LoaderStore()
    return{
      store,
      loader
    }
  },
  methods:{
    toUser(){
      this.$router.push('/user')
    }
  },
  computed:{
    showLoader() {
        return this.loader.loading;
      },
  }
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-align: center !important;
  color: #050505 !important;
}
</style>
