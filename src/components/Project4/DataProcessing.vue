<template>
  <div class="dataProcessing">
      <p style="font-weight:700;">Обработка ваших данных:</p>
      <progress-bar 
        :barPercent="barPercent" 
        :barColor="barColor" 
        :barHeight="barHeight" 
        :barProgress="barProgress"
      >{{barProgress}}</progress-bar>
      <div class="description">
        <div v-if="barPercent>15" class="elem">Анализ введенных данных .....<span>Выполнено!</span></div>
        <div v-if="barPercent>25" class="elem">Коррекция астрологического знака .....<span>Выполнено!</span></div>
        <div v-if="barPercent>35" class="elem">Расчет вариаций ответов .....<span>Выполнено!</span></div>
        <div v-if="barPercent>45" class="elem">Генерация предсказания .....<span>Выполнено!</span></div>
        <div v-if="barPercent>50" class="elem">Сохранение результата .....<span>Выполнено!</span></div>
        <div v-if="barPercent>65" class="elem">Поиск свободного оператора .....<span>Выполнено!</span></div>
        <div v-if="barPercent>75" class="elem">Начало озвучки и записи аудио - сообщения .....<span>Выполнено!</span></div>
        <div v-if="barPercent>76" class="elem" style="color:#B53E42;"><b>ИДЁТ ЗАПИСЬ</b></div> 
        
        <div v-if="barPercent==100" class="elem">ГОТОВО!</div>

        <div class="submit" v-if="barPercent==100" style="text-align:center">
                    <button type="submit"
                        class="submitButton"
                        @click.prevent="this.$router.push({ name: 'get-data'})"
                     >ДАЛЕЕ
                    </button>
        </div>
      </div>
  </div>
</template>

<script>
import ProgressBar from '../components/Bar.vue';

export default {
    name: 'data-processing',
    components:{
        'progress-bar': ProgressBar
    },
    data(){
        return{
            barColor: '#419330',
            barHeight: 45,
            barPercent: 0,
            barProgress:''
        }
    },
    methods:{
        loadBar(){
            let i = 0;
        if (i == 0) {
            i = 1;
            let id = setInterval(()=>{
                if (this.barPercent >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                this.barPercent++
            }
            }, 50);
            
        }
        }
    },
    mounted(){
        this.loadBar()
    },
    watch:{
        barPercent(){
            this.barProgress = this.barPercent+'%'
        }
    }
}
</script>

<style>
    .dataProcessing{
        margin: 20px 10px 10px 10px;
        width: 90%;
    }

    span{
        color: green;
    }

    .description{
        text-align: left;
    }

    .elem{
        margin-top:2vh;
    }

    .submit{
        margin: 2vh auto 1vh auto;
    }
    .submitButton{
        font-size: 14px;
        font-weight: 700;
        color: #FFF;
        background-color:#315DFA;
        border:0;
        height: 45px;
        width:50vw;
    }
</style>