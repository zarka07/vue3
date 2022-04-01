<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark"
            style="">
        <div class="container-fluid d-flex bd-highlight "
            style="flex-wrap: wrap">
            <div class="col-xs-12 col-sm-1 col-md-1 p-2 flex-grow-1 bd-highlight"
                style=" text-align: center;">
                <button type="button" class="btn">
                    
                    <router-link to="/"><img src="vue-10-10.png" id="brand" alt="brand" /></router-link>
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

            <!-- <div class="col-xs-2 p-2 bd-highlight ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="col-xs-2 p-2 bd-highlight collapse navbar-collapse" 
                id="navbarSupportedContent"
                v-if="email">
                <ul style="" class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown" >
                        
                        <a style="color: black" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <img src="settings.png" 
                         id="vue" 
                         alt="brand" 
                         style="width:20px;height:20px;margin-right:5px"/>
                         Hello, {{email}}
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" 
                            style="text-align:center;color: blue" 
                            @click="logout" 
                            href="#">Logout</a></li>
                    </ul>
                    </li>
                </ul>
            </div> -->
        </div>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'header-component'
}
</script>
<style>
    a{
        text-decoration: none;
        color: #FFF;
    }
</style>