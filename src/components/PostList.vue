<template>
  <div class="postList">
    <div>
      <div>
        <div>
          <div class="post">{{$t("PostlistVue.Postlist")}}</div>
          <!-- .slice(0,limitPerPage) -->
          <div  v-for="post in paginatedPosts" :key="post.id">
            <router-link v-if="typeof paginatedPosts!==undefined" :to="{ name : 'Id', params: {id: post.id}}">
              {{post.title}}
            </router-link>
            
            </div>
        </div>
      </div>
    </div>
    <div class="text-center" style="margin-top:10px">
      <!-- <v-pagination 
        color="green"
        v-model="pageNumber"
        circle
        :length="pagesCount-1"
        @next="next"
        @previous="previous"
      ></v-pagination> -->
      
    </div>
    
  </div>
</template>
<script>
import getApi from '../mixins/getApi'
import getPosts from '../mixins/getPosts'
export default {
  name: 'PostList',
  mixins:[getApi, getPosts],
  data(){
    return  {
     path:'posts',
     post:[],
     pageNumber:+this.$route.query.pageNumber || 1,
     postsPerPage:10
     }
  },
  methods:{
    next(){
      this.pageNumber+1;
      },
    
    previous(){
      this.pageNumber-1;
      },
  },
  computed:{
    pagesCount(){
      let lenght = this.post.length,
      size = this.postsPerPage;
      return Math.ceil(lenght/size);
    },
    paginatedPosts(){
      const start = this.pageNumber * this.postsPerPage;
      const end = start + this.postsPerPage;
      
      return this.post.slice(start, end)
    }
  },
}
</script>
<style scoped>
  span{
    margin:15px;
  }

  .modal{
    display: block;
    height: 500px;
    width: 80%;
  }

  a{
    color:black;
  }
</style>