<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- left section -->
        <div class="col-md-4 left">
          <div class="info">
            <!-- photo -->
            <div>
              <img src="avatar50-50.png" alt="avatar" class="avatar" />
            </div>
            <!-- contact me section -->
            <div>
              <p class="contactMe">CONTACT ME AT:</p>
              <p v-for="contact in contacts" :key="contact" class="contacts">
                <i :class="contact.icon"></i>
                <a :href="contact.href" target="_blank">{{ contact.description }}</a>
              </p>
            </div>
            <!-- key skills -->
            <div>
              <p class="contactMe">KEY SKILLS:</p>
            </div>
          </div>
          <div class="skills">
            <div>JS + <span class="vue">Vue.js</span></div>
            <div class="vue">(Vuex/Pinia/Router/Vuetify/Quasar)</div>
            <div class="js">i18n/axios/wrld.js/Bootstrap5/Firebase</div>
          </div>
          <!-- minor skills -->
          <div>
            <p class="contactMe">MINOR SKILLS:</p>
            <ul class="skills" style="padding-left: 0px">
              <li>C++</li>
              <li>MSSQL Databases</li>
            </ul>
          </div>
          <!-- soft skills -->
          <div>
            <p class="contactMe">SOFT SKILLS:</p>
            <ul
              class="skills"
              style="margin-top: -10px; padding-left: 0px"
              v-for="skill in skills"
              :key="skill"
            >
              <li>{{ skill }}</li>
            </ul>
          </div>
          <!-- language skills -->
          <div>
            <p class="contactMe">LANGUAGE SKILLS:</p>
            <ul class="skills" style="padding-left: 0px">
              <li><u>English:</u> Intermediate (between B1 and B2 according to CEFR);</li>
              <li><u>French:</u> below average</li>
            </ul>
          </div>
        </div>
        <!-- right section -->
        <div class="col-md-8 right">
          <div>
            <h1 class="name">SERHII TARASO<img class="v-img" src="vue-logo.png" /></h1>
            <h3 class="dev">FRONT-END (Vue) DEVELOPER</h3>
            <hr size="6" style="color: black; opacity: 1" />
          </div>

          <div>
            <h4 class="goal">MY GOAL</h4>
            <p>
              Obtaining a position of Front-end Developer with different and interesting
              tasks!
            </p>
            <h4 class="goal">PRACTICAL EXPERIENCE:</h4>
            <h6>
              <b>6 months of commercial experience (08.2021 - 02.2022):</b>
            </h6>
            <p>
              Maintenance and upgrading existing app using Vue2, Vuex, router, RestAPI,
              Vant, Wrld.js, i18n;
            </p>
            <p>Creating a new application from a template;</p>
            <h6>
              <b>2+ years of non-commercial experience (11.2019 - today):</b>
            </h6>
            <p>
              Creating a web-site for car-repair self-service using HTML+CSS, hosting in
              web;
            </p>

            <p>
              Creating pet projects using Vue 2,3, Vuex, router, axios, Vuetify, Quasar,
              pinia, bootstrap5, localStorage;
            </p>
            <p>Creating database using MSSQL Databases, procedures, triggers.</p>
            <h4 class="goal">OTHER EXPERIENCE:</h4>
            <h6><b>Author of specialized texts</b></h6>
            <p>https://monolith.in.ua</p>
            <h6><b>Site maintenance</b></h6>
            <p>https://ugt.com.ua</p>
            <p>https://tenoptom.com.ua</p>
            <h4 class="goal">EDUCATIONAL HISTORY:</h4>
            <h6><b>Computer academy STEP (Kharkiv)</b></h6>
            <p>Software development | Nov. 2019 - Nov. 2020;</p>
            <p>Technologies: C++/ JS/ HTML-CSS/ MSSQL Databases</p>
            <h6><b>KHNADU (Kharkiv)</b></h6>
            <p>Cars and cars industry | Sep 2012 - Jun 2017.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cv-component",
  data: () => ({
    contacts: [
      {
        icon: "bi bi-arrow-down-right-circle",
        description: "Kharkiv, Ukraine",
        href: "https://www.google.com/maps/dir/?api=1&destination=49.9947277,36.1457391",
      },
      {
        icon: "bi bi-phone",
        description: "+38 (050) 700-5472",
        href: "tel:+380507005472",
      },
      {
        icon: "bi bi-mailbox",
        description: "zarka08@gmail.com",
        href: "mailto:zarka08@gmail.com",
      },
      {
        icon: "bi bi-telegram",
        description: "@zarka08",
        href: "tg://resolve?domain=zarka07",
      },
      {
        icon: "bi bi-linkedin",
        description: "serhii-tarasov",
        href: "https://www.linkedin.com/in/serhii-tarasov/",
      },
    ],
    skills: ["emotional stability", "attentiveness", "scrupulosity", "self-motivation"],
  }),
};
</script>

<style scoped>
@media only screen and (max-width: 1400px) {
  .avatar {
    width: 300px;
    height: 480px;
  }
  .name {
    font-weight: 700;
    font-size: 4.2rem;
  }
  .v-img {
    height: 48px;
    width: auto;
  }
  .dev {
    font-weight: 500;
    font-size: 3rem;
  }
}

@media only screen and (max-width: 1200px) {
  .avatar {
    width: 290px;
    height: 480px;
  }
  .name {
    font-weight: 700;
    font-size: 4rem;
    width:100vw;
  }
  .v-img {
    height: 46px;
    width: auto;
  }
  .dev {
    font-weight: 500;
    font-size: 3rem;
  }
}

@media only screen and (max-width: 992px) {
  .avatar {
    width: 160px;
    height: 256px;
  }
  .name {
    font-weight: 700;
    font-size: 3.2rem;
  }
  .v-img {
    height: 38px;
    width: auto;
  }
  .dev {
    font-weight: 500;
    font-size: 1.8rem;
  }
}

@media only screen and (max-width: 768px) {
  .avatar {
    width: 220px;
    height: 352px;
  }
  .name {
    font-weight: 700;
    font-size: 3.2rem;
  }
  .v-img {
    height: 38px;
    width: auto;
  }
  .dev {
    font-weight: 500;
    font-size: 2rem;
  }
}

@media only screen and (max-width: 576px) {
  .avatar {
    width: 160px;
    height: 256px;
  }
  .name {
    font-weight: 700;
    font-size: 2.5rem;
  }
  .v-img {
    height: 30px;
    width: auto;
  }
  .dev {
    font-weight: 500;
    font-size: 1.5rem;
  }
}

.avatar {
  margin-left: 1.2em;
  margin-bottom: 0.5em;
}

.left {
  background-color: rgb(51, 83, 132);
  padding: 0;
}

.right {
  padding-left: 2em;
}

.info {
  text-align: center;
}

i {
  padding-right: 10px;
}

.description {
  color: #fff;
}

.contactMe {
  color: #fff;
  font-weight: 700;
  margin-top: 2em;
  text-align: center;
}

.skills {
  text-align: center;
  color: rgb(111, 176, 236);
  font-weight: 700;
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

.contacts {
  color: #fff;
}

.contacts :hover {
  color: darkgray;
}

.dev {
  color: rgb(111, 176, 236);
  font-family: Arial, Helvetica, sans-serif;
}

.name {
  color: #42b983;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
}

.js {
  color: rgb(227, 240, 52);
}

.vue {
  color: #42b983;
}

.goal {
  color: rgb(91, 167, 209);
  font-weight: 200;
  font-size: 1.6em;
  font-family: Arial, Helvetica, sans-serif;
}

h6 {
  margin-top: 10px;
}

.footer {
  left: 0px;
  bottom: 0px;
  height: 115px;
  width: 100%;
}
</style>
