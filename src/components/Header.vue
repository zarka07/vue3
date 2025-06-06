<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid d-flex bd-highlight p-0" style="flex-wrap: wrap">
        <div
          class="row col-xs-12 col-sm-1 col-md-1 flex-grow-1 bd-highlight "
          style="text-align: center"
        >
          <button type="button" class="btn">
            <router-link to="/"><img :src="src" id="brand" alt="brand" /></router-link>
          </button>
        </div>

        <div
          class="row col-xs-12 col-sm-11 col-md-11 col-xl-11 flex-grow-1 bd-highlight m-1"
          style="text-align: center"
        >
          <div
            class="btn-group flex-wrap"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-secondary">
              <router-link to="/project1">Project 1</router-link>
            </button>
            <button type="button" class="btn btn-warning">
              <router-link to="/project2">Project 2</router-link>
            </button>
            <button type="button" class="btn btn-success">
              <router-link to="/project3">Project 3</router-link>
            </button>
            <button type="button" class="btn btn-primary">
              <router-link to="/project4">Project 4</router-link>
            </button>
            <button type="button" class="btn btn-info">
              <router-link to="/project5">Project 5 </router-link>
            </button>
            <button type="button" class="btn btn-danger">
              <router-link to="/project6">Project 6 </router-link>
            </button>
            <button type="button" class="btn btn-warning">
              <router-link to="/project7">Project 7 </router-link>
            </button>
            <button type="button" class="btn btn-info">
              <a href="https://refactoring--serhii-tarasov-cats-api.netlify.app/">Project 8</a>
            </button>
            <button type="button" class="btn btn-primary">
              <router-link to="/project9">Project 9 </router-link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from "../../public/assets/vue-10-10.png";
export default {
  name: "header-component",
  data() {
    return {
      src: logo,
    };
  },
};
</script>
<style scoped>
nav a.router-link-exact-active {
  text-decoration: none !important;
}

button > a {
  text-decoration: none;
  color: #fff;
}

button > a:after {
  position: absolute;
  content: "";
  width: 0;
  height: 3px;
  background-color: #42b983;
  bottom: 0px;
  left: 0;
  transition: all ease-in 0.25s;
}

button > a:hover:after {
  width: 100%;
  color: #fff !important;
}

.header {
  background-color: lightgreen !important;
}
</style>
