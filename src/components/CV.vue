<template>
    <div>
        <div class="container">    
          <div class="row">
            <div class="col-md-4 left">
              <div class="info">
                <div class="">
                  <img src="avatar50-50.png" alt="avatar" class="avatar">
                </div>
    
                <div class="">
                  <p class="contactMe" >CONTACT ME AT:</p>
                  <p v-for="contact in contacts" :key="contact" 
                    class="contacts">
                    <i :class="contact.icon"></i> 
                    <span>{{contact.description}}</span>
                  </p>
                </div>
                <div class="">
                  <p class="contactMe">KEY SKILLS:</p>
                </div>
              </div>

              <div class="skills">
                   <div>JS + <span class="vue">Vue.js</span>
                   </div>
                   <div class="vue">(Vuex/Router/Vuetify/Quasar)</div>
                   <div class="js">i18n/axios/wrld.js/</div>
              </div>

              <div>
                  <p class="contactMe" style="text-align:center">MINOR SKILLS:</p>
                  <ul class="skills" 
                    style="list-style: none;
                    padding-left: 0px">
                    <li>C++</li>
                    <li>MSSQL Databases</li>
                  </ul>
              </div>

              <div>
                  <p class="contactMe" style="text-align:center">SOFT SKILLS:</p>
                  <ul class="skills" 
                    style="list-style: none;
                      margin-top: -10px;
                      padding-left: 0px" 
                    v-for="skill in skills" 
                    :key="skill" 
                    >
                    <li>{{skill}}</li>
                  </ul>
              </div>

              <div>
                  <p class="contactMe" style="text-align:center">LANGUAGE SKILLS:</p>
                  <ul class="skills" 
                    style="list-style:none; 
                    padding-left: 0px"
                    >
                    <li>English: Intermediate
                        (between B1 and B2
                        according to CEFR);
                    </li>
                    <li>
                      French: below average
                    </li>
                  </ul>
              </div>
            </div>


            <div class="col-md-8 right" style="">
              <div>
                <h1 class="name">
                  SERHII TARASOV
                </h1>
                <h3 class="dev">
                  JUNIOR JS DEVELOPER
                </h3>
                <hr size="6" style="color: black; opacity: 1">
              </div>
              
              <div>
                <h4 class="goal">MY GOAL</h4>
                <p>
                  Junior JS Developer position with different and interesting tasks!
                </p>
                <h4 class="goal">PRACTICAL EXPERIENCE:</h4>
                <h6>
                  <b>6 month of commercial experience;</b>
                </h6>
                <p>
                    maintenance and upgrading existing app;
                </p>
                <p>
                  creating a new application from a template;
                </p>
                <h6><b>Creating web-site</b></h6>
                <p>for car-repair self-service using HTML+CSS, hosting in web;</p>
                <h6><b>Creating small web-store</b></h6>
                <p>using Vue 2, axios, router </p>
                <h6><b>Creating hospital database</b></h6>
                <p>using MSSQL Databases, procedures, triggers</p>
                <h4 class="goal">OTHER EXPERIENCE:</h4>
                <h6><b>Author of specialized texts</b></h6>
                <p>https://monolith.in.ua</p>
                <h6><b>Site maintenance</b></h6>
                <p>https://ugt.com.ua
                </p>
                <p>
                  https://tenoptom.com.ua
                </p>
                <h4 class="goal">EDUCATIONAL HISTORY:</h4>
                <h6><b>Computer academy STEP (Kharkiv)</b></h6>
                <p>
                  Software development | Nov. 2019 - Nov. 2020;
                </p>
                <h6><b>KHNADU (Kharkiv)</b></h6>
                <p>
                  Cars and cars industry | Sep 2012 - Jun 2017.
                </p>
              </div>

            </div>
            
          </div>
        </div>
          
  </div>
</template>

<script>

export default ({
    name: 'cv-component',
    data:()=> ({
        contacts:[
        {icon:'bi bi-arrow-down-right-circle', description:'Kharkiv, Ukraine'},
        {icon:'bi bi-phone', description:'+38 (050) 700-5472'},
        {icon:'bi bi-mailbox', description:'zarka08@gmail.com'},
        {icon:'bi bi-telegram', description:'@zarka08'},
        {icon:'bi bi-linkedin', description:'сергей-тарасов-63ba90203/'}
      ],
      skills: [
        'emotional stability', 
        'creativity',
        'scrupulosity',
        'self-motivation'
      ],
    }),
})
</script>

<style scoped>

@media only screen and (max-width: 1200px) {
  .avatar {
    width: 300px;
    height:480px;
  }
}

@media only screen and (max-width: 992px) {
  .avatar {
    width: 160px;
    height:256px;
  }
}

@media only screen and (max-width: 768px) {
  .avatar {
    width: 220px;
    height:352px;
  }
}

@media only screen and (max-width: 576px) {
  .avatar {
    width: 160px;
    height:256px;
  }
}

.avatar{
  margin-left: 1.2em;
  margin-bottom: 0.5em;
}

.left{
  background-color: rgb(51, 83, 132);
  padding: 0;
}

.right{
  padding-left: 2em;
}

.info{
  /* padding-left: 2.2em; */
  text-align: center;
}

i{
  padding-right: 10px;
}

.description{
  color:#FFF;
}

.contactMe {
  color:#FFF;
  font-weight: 700;
  margin-top: 2em;
}

.skills{
  text-align: center;
  color:rgb(111, 176, 236);
  font-weight: 700;
}
.contacts{
  /* text-align: left; */
  color:#FFF;
}

.dev{
  color:rgb(111, 176, 236);
  font-weight: 500;
  font-size: 2.5em;
  font-family:Arial, Helvetica, sans-serif
}

.name{
  color:rgb(38, 172, 105);
  font-weight: 700;
  font-size: 4em;
  font-family:Arial, Helvetica, sans-serif
}

.js{
  color: rgb(227, 240, 52);
}

.vue{
  color:rgb(31, 182, 106)
}

.goal{
  color:rgb(91, 167, 209);
  font-weight: 200;
  font-size: 1.6em;
  font-family:Arial, Helvetica, sans-serif
}

h6{
  margin-top: 10px;
}



.footer{
  /* position:fixed; */
  left:0px;
  bottom:0px;
  height:115px;
  width:100%;
  }

</style>