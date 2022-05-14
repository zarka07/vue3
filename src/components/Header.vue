<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark"
            style="">
        <div class="container-fluid d-flex bd-highlight "
            style="flex-wrap: wrap">
            <div class="col-xs-12 col-sm-1 col-md-1 p-2 flex-grow-1 bd-highlight"
                style=" text-align: center;">
                <button type="button" class="btn">
                    <router-link to="/"><img :src="src" id="brand" alt="brand" /></router-link>
                </button>
            </div>
            
            <div class="col-xs-12 col-sm-11 col-md-11 p-2 flex-grow-1 bd-highlight "
                style="text-align: center">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger"><router-link to="/project1">Project 1</router-link></button>
                    <button type="button" class="btn btn-warning"><router-link to="/project2">Project 2</router-link></button>
                    <button type="button" class="btn btn-success"><router-link to="/project3">Project 3</router-link></button>
                    <button type="button" class="btn btn-primary"><router-link to="/project4">Project 4</router-link></button>
                </div>  
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
import logo from '../../public/assets/vue-10-10.png';
export default {
    name: 'header-component',
    data(){
        return{
            src:logo
        }
    }
}
</script>
<style>
    a{
        text-decoration: none;
        color: #FFF;
    }

    .header{
        background-color: lightgreen;
    }
</style>