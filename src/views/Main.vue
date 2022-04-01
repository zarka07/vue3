<template>
    <div class="user-main">
        <Header/>
        <CV/>
        <Footer/>
    </div>
</template>

<script>
import { UserStore } from '@/stores/UserStore';
import Header from '@/components/Header.vue';
import CV from '@/components/CV.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'MainItem',
    components:{
       Header, CV, Footer
    },
    setup() {
        const mainStore = UserStore();
       
        return{
          mainStore,
          
        }
    },
    data() {
        return{
           email: this.mainStore.email
        }
    },
    
}
</script>
<style scoped>
    .mxauto{
        position: absolute;
        left: 55%;
        transform: translateX(-45%);
    }
    #settings{
        margin-top:10px;
    }
    .user-main{
    }
</style>