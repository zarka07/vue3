<template>
    <div>
        <Header/>
        <div class="main" style="min-height:77vh">
            <div class="Header row" style="margin:0">
                <div class="title col-xs-12 col-sm-6 col-md-6">
                    <h2>{{$t("AppVue.Vue")}}</h2>
                </div>
                
                <div class="dropdown col-xs-12 col-sm-6 col-md-6">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {{$t("AppVue.Language")}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="locale in locales" :key="locale" @click="changeLang(locale)">
                            <a class="dropdown-item" href="#">
                                {{$t("AppVue.Language")}}: {{locale}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <PostList/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PostList from '@/components/Project2/PostList.vue';

export default {
    name: 'project2-component',
    components: { Header, Footer, PostList },
    methods:{
        changeLang(locale){
            if(this.$i18n.locale!== locale){
                this.$i18n.locale = locale;
            }
        }
    },
    data(){
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
}
</script>

<style scoped>
    .Header{
        /* background-image:url('../assets/header-background.jpg'); */
        background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
        height: 13vh;
        width: 100vw;
        align-content: center;
    }

    .title{
        text-align: center;
        /* padding-top:5px; */
        color:#ffc107;
    }

    .dropdown{
        text-align: center;
    }

    .btn{
        background-color: #4CAF50;
        
        text-align: center;
    }

    .dropdown-menu{
        min-width: 5rem;
        text-align: center;
        background-color: rgb(186, 234, 218);
    }
</style>