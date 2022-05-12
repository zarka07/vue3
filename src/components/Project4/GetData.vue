<template>
  <div class="getData">
    <p style="text-align: left;font-weight:700;margin-left:1vh">Спасибо за ваши ответы</p>
    <p class="greeting">
      Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!
    </p>
    <div class="year">
      <div style="font-size:20px;margin-bottom:.5vh"><b>2021 год Вас ошарашит!</b></div>
      
      Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем скоро, возможно это 17-18 ноября!
      <br>
      <br>
      Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и Позвонить со своего мобильного телефона. Позвоните и Прослушайте очень серьезную информацию!
    </div>

    <div class="getApiButton">        
      <button class="button-menu" @click.prevent="getApi">
        <span class="menu-icon">
          <img src="../assets/Vector.png" class="img"/>
        </span>
        <span class="button-label">Звонить и слушать</span>
      </button>
    </div>

    <div v-if="showResponse" class="response">
    <table>
      <caption>Персонаж:</caption>
      <thead>
        <tr>
          <th>Имя</th>
          <th>{{response.name}}</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th>Высота</th>
          <td>{{response.height}}</td>
        </tr>
        <tr>
          <th>Вес</th>
          <td>{{response.mass}}</td>
        </tr>
        <tr>
          <th>Цвет волос</th>
          <td>{{response.hair_color}}</td>
          
        </tr>
        <tr>
          <th>Цвет кожи</th>
          <td>{{response.skin_color}}</td>
        </tr>
        <tr>
          <th>Цвет глаз</th>
          <td>{{response.eye_color}}</td>
        </tr>
        <tr>
          <th>Год рождения</th>
          <td>{{response.birth_year}}</td>
        </tr>
        <tr>
          <th>Пол</th>
          <td>{{response.gender}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'get-data',
  data(){
    return{
      response:{},
      showResponse:false
    }
  },
  methods:{
    
    async getApi(){
        const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL)
                .catch(error => {
                    if(error.response.status){
                        const statusCode = error.response.status
                        console.log(statusCode)      
                    }
                })
        this.response = Response.data; 
        this.showResponse = true 
        console.log(this.response)     
        },
  }
}
</script>

<style scoped>
  .getData{
    margin:10px;
    max-width: 375px;
  }
  .greeting{
    text-align: start;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #315DF9;
        margin:7px;
  }

  .year{
    text-align: left;
    font-weight:500;
    margin-left:1vh;
    margin-right:1vh;
    font-size: 18px;
  }

  .button-label{
    line-height:40px;
   color:white;
   margin:0 5px;
  }

  .button-menu {
   display:inline-flex;
   justify-content: center;
   width:97%;
   border:0;
   background-color:#315DFA;
   height:8vh;
   padding-top:1vh;
  }

 .button-label {
   text-transform:uppercase;
   color:white;
   font-size:17px;
   margin-left:6vw;
 }

 .menu-icon{
   margin-top:1vh;
 }

 .getApiButton{
   margin-top:4vh;
   text-align: center;
 }

 table {
    width: 300px; 
    border: 1px solid #315DFA; 
    margin: auto; 
 }

 td {
  text-align: center; 
 }

.response{
  margin-top:2vh;
  margin-bottom:2vh;
}

caption{
  margin-bottom:1vh;
}
</style>
