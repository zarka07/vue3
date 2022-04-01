<template>
    <div>
        <Header/>
        <div class="container">
            <div class="row">
                <div class="userinfo col-md-12">
                    <p>You are successfully logged with user info:</p>
                    <p v-if="username">username: {{username}}</p>
                    <p>email: {{email}}</p>
                    <p>password: {{password}}</p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button 
                            class="btn btn-primary" 
                            style="margin-top: 1em"
                            type="button"
                            @click="logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        <Footer/>
    </div>
</template>

<script>

import { UserStore } from '@/stores/UserStore';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'user-item',
    components: { Header, Footer},
    setup() {
        const mainStore = UserStore();
       
        return{
          mainStore,
          
        }
    },
    data() {
        return{
           email: this.mainStore.email,
           password: this.mainStore.password,
           username: this.mainStore.username
        }
    },
    methods:{
      logout(){
        this.mainStore.resetUser()
        this.$router.push('/')
        }
    },
}
</script>

<style scoped>
    .userinfo{
        height:63vh;
        text-align: center;
    }
</style>