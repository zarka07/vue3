<template>
    <div class="container">
        <progress-bar v-if="showProgress" 
            :barPercent="barPercent" 
            :barColor="barColor" 
            :barHeight="barHeight"
            :barProgress="barProgress"
        ></progress-bar>

        <div v-if="showImg">
            <div class="img" >
                <img alt="koleso" class="rot koleso" src="../assets/koleso.png">
                <img alt="logo" class="goroskop" src="../assets/goroskop.png">
            </div>
            
            <div class="title">
                Узнайте, как 2022 год изменит жизнь каждого из нас!
            </div>
            <div class="subtitle">
                К сожалению, 2021 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
            </div>
        </div>
        
        <question-component 
            :questions="questions[i]"
            @nextQuestion="nextQuestion">
        </question-component>
        
    </div>
</template>

<script>
import Question from '../components/Question.vue';
import ProgressBar from '../components/Bar.vue';

export default {
    name: 'main-component',
    components: { 'question-component': Question, 'progress-bar': ProgressBar},
    setup() {
        
    },
    data(){
        return{
            showProgress: false,
            showImg: true,
            barColor: '#B53E42',
            barPercent: 0,
            barHeight: 8,
            barProgress:'',
            i:0,
            questions:[
                        {
                            description:{
                                style:'flex-direction: row;justify-content: space-around;text-align:left',
                                title: 'Укажите свой пол:',
                                value: 'gender',
                                type: 'radio'
                            },
                            questions:[
                                {id:'id0', answer:'Женщина', checked: false},
                                {id:'id1', answer:'Мужчина', checked: false}
                            ]
                            
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;justify-content: flex-start;text-align:left',
                                title: 'В какое время суток вы чувствуете себя наиболее комфортно?',
                                value:'time',
                                type: 'radio', 
                            },
                            questions:[
                                {id:'id0', answer:'Утро', checked: false},
                                {id:'id1', answer:'Ночь', checked: false},
                                {id:'id2', answer:'Вечер', checked: false},
                                {id:'id3', answer:'День', checked: false}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left;',
                                title: 'Подскажите, мучает ли вас бессонница в последнее время?',
                                value:'sleep',
                                type: 'radio'
                            },
                            questions:[
                                {id:'id0', answer:'Да', checked: false},
                                {id:'id1', answer:'Нет', checked: false},
                                {id:'id2', answer:'Иногда', checked: false}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left;',
                                title: 'Чувствуете ли вы в последнее время, что вам никак не удается осуществить ваши планы?',
                                value:'planning',
                                type: 'radio'
                            },
                            questions:[
                                {id:'id0', answer:'Да', checked: false},
                                {id:'id1', answer:'Нет', checked: false},
                                {id:'id2', answer:'Иногда', checked: false}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left;',
                                title: 'Какой вы видите свою жизнь через 5 лет?',
                                value:'life',
                                type: 'radio'
                            },
                            questions:[
                                {id:'id0', answer:'Брак, семья, дети, дом', checked: false},
                                {id:'id1', answer:'Путешествия по миру', checked: false},
                                {id:'id2', answer:'Успешная карьера', checked: false},
                                {id:'id3', answer:'Всё вместе', checked: false}
                            ]
                            
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:center;',
                                title: 'Введите дату своего рождения:',
                                value:'dateOfBirth',
                                type: 'select',
                            },
                            questions:[
                                {id:'id0', answer:'date', },
                            ]
                            
                        },
                        {
                            description:{
                                style:'',
                                title: '',
                                value:'',
                            },
                            questions:[
                                {id:'', answer:'', type: ''},
                            ]
                            
                        }
                    ],
        }
    },
    
    methods:{
        nextQuestion(){
                    this.showProgress=true
                    this.showImg=false
                    this.i+=1
                    this.questions[this.i]
                    this.barPercent+=20
        },
        
    },
    watch:{
        i(){
            if(this.i===6){
                this.barPercent=100
                this.showProgress=false
                this.$router.push({ name: 'data-processing'})
            }
        }
    }

}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 375px;
        
        /* padding-bottom: auto; */
    }

    .koleso{
        position: relative;
        height: 200px;
        top: 115px;
        left:-70px;
    }

    img.rot {
        animation: 15s linear 0s normal none infinite running rot;
        -webkit-animation: 15s linear 0s normal none infinite running rot;
        
    }
    @keyframes rot {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rot {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .goroskop{
        width: 355px;
        height: 210px;
    }

    img{
        margin-top: 1.5vh;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top:-95px;
    } 

    .title{
        text-align: start;
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 22px;
        color: #315DF9;
        margin:2vh 1vw 2vh 1vw;
        
    }

    .subtitle{
        text-align: start;
        margin:2vh 1vw 2vh 1vw;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: #343B4D;
    } 
</style>