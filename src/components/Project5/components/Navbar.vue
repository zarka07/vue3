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
          <h5 class="offcanvas-title" id="staticBackdropLabel">All pages</h5>
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
          {{ username ?? "anonimus" }}
        </a>

        <ul class="dropdown-menu dropdown-menu-end me-1" aria-labelledby="dropdownMenuLink">
          <li v-if="username">
            <a class="dropdown-item p-1 mb-1" @click="toProfile"
              ><i class="bi bi-file-person me-2"></i>Profile</a
            >
            <a class="dropdown-item p-1" @click="logout"
              ><i class="bi bi-box-arrow-left me-2"></i>Logout</a
            >
          </li>
          <li v-else>
            <a class="dropdown-item" @click="toLogin"
              ><i class="bi bi-box-arrow-right me-4"></i>Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { CRMstore } from "@/stores/CRMstore";

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
      { title: "Bill", url: "/project5", exact: true },
      { title: "History", url: "/history" },
      { title: "Planning", url: "/planning" },
      { title: "New entry", url: "/record" },
      { title: "Categories", url: "/categories" },
    ],
  }),

  methods: {
    async logout() {
      await this.crmStore
        .logout()
        .then(
          this.$toast.warning(`You successfully logged out`),
          this.$router.push({ name: "Login" })
        );
    },
    toLogin() {
      this.$router.push({ name: "Login" });
    },
    toProfile() {
      this.$router.push({ name: "Profile" });
    },
  },

  computed: {
    date() {
      let toDay = new Date().toLocaleDateString();
      let timeNow = new Date().toLocaleTimeString().slice(0, -3);
      return `${timeNow} - ${toDay}`;
    },
    username() {
      return this.crmStore._userInfo.username;
    },
  },
  mounted(){
    console.log('mounted: ',this.crmStore._userInfo.username)
  },
  watch:{
    username: function(){
      return this.crmStore._userInfo.username
    }
  }
};
</script>

<style scoped>
.navb {
  background-color: rgb(64, 190, 232);
  color: #fff !important;
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
  text-decoration: none;
}

.sidebar-links a:hover {
  border-bottom: 3px solid rgba(var(--bs-primary-rgb));
}

.dropdown-toggle::after {
  vertical-align: 0.1em;
  margin-left: 0.5em;
}

.dropdown-menu {
  min-width: 5rem;
  padding:10px;
}
</style>
