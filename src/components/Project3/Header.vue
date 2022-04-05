<template>
    <header>
        <div class="navbar navbar-default">
            <div class="navbar-header">
                <h2><router-link :to="{name: 'Project3'}">{{sitename}}</router-link></h2>
            </div>
            <div class="nav navbar-nav navbar-right cart">
                <button class="btn btn-default btn-lg">
                    <router-link active-class="active" :to="{name: 'Form'}">
                        <p class="bi bi-cart">{{ cartItemCount}}</p>
                    </router-link>
                </button>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'my-header',
    props:['cartItemCount'],
    data () {
        return {
            sitename: "Распродажа склада!",
        }
    },
    methods: {
        showCheckout(){
            this.$router.push({name:'Form'})
        }
    },
}
</script>
<style scoped>
header{
    background-color: lightgreen;
}
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color:rgb(22, 209, 22);
 
}
</style>
