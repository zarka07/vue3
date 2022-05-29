<template>
  <nav class="navbar navbar-light navb">
    <div class="container-fluid">
      <button
        class="btn navb"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <i class="bi bi-three-dots-vertical"></i>
      </button>

      <div
        class="offcanvas offcanvas-start"
        data-bs-backdrop="true"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">Все страницы</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul class="sidebar-links">
              <router-link
                v-for="link in links"
                :key="link.url"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
              >
                <li>
                  <a href="#">{{ link.title }}</a>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>

      <div class="date">
        <span class="">{{ date }}</span>
      </div>

      <div class="dropdown">
        <a
          class="btn navb dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{username??'anonimus'}}
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li v-if="username"><a class="dropdown-item" @click="logout">Выйти</a></li>
          <li v-else><a class="dropdown-item"  @click="login">Войти</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";
//import M from 'materialize-css';
export default {
  name: "navbar-component",
  setup() {
    const crmStore = CRMstore();
    return {
      crmStore,
    };
  },
  data: () => ({
    interval: null,
    links: [
      { title: "Счет", url: "/project5", exact: true },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категория", url: "/categories" },
    ],
  }),
  methods: {
    async logout() {
      await this.crmStore.logout();
      // this.$router.push("/login?message=logout");
      this.$router.push("/login");
    },
    login(){
      this.$router.push({name:'Login'})
    }
  },
  computed: {
    date() {
      let toDay = new Date().toLocaleDateString();
      let timeNow = new Date().toLocaleTimeString().slice(0, -3);
      return `${timeNow}   ${toDay}`;
    },
    username() {
      return this.crmStore.USER_NAME;
    },
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   this.date = new Date();
    // }, 60000);
    //this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:true})
  },
  beforeUnmount() {
    // clearInterval(this.interval)
  },
};
</script>

<style scoped>
.navb{
  background-color: rgb(64, 190, 232);
  color: #FFF !important;
}

.offcanvas-start {
  width: 200px !important;
}

.sidebar-links {
  list-style-type: none;
  padding: 0;
}

.sidebar-links a {
  color: black;
  margin: 15px;
  border: none;
}

.sidebar-links a:hover {
  border-bottom: 3px solid rgba(var(--bs-primary-rgb));
}

.dropdown-toggle::after{
  vertical-align: 0.1em;
  margin-left: 0.5em;
}

.dropdown-menu{
  right:5px;
}
</style>