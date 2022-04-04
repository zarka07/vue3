<template>
  <div class="postList">
    <div>
      <div>
        <div>
          <div class="posts"><h3>{{$t("PostlistVue.Postlist")}}</h3></div>
          <!-- .slice(0,limitPerPage) -->
          <ul class="post" style="list-style: none">
            <li  v-for="post in displayedPosts" :key="post.id">
              <router-link  :to="{ name : 'Id', params: {id: post.id}}">
                {{post.id}}. {{post.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button type="button" 
            class="page-link" 
            style="color:#4CAF50" 
            v-if="page != 1" @click="page--"> {{$t("PostlistVue.Previous")}} 
          </button>
        </li>
        <li class="page-item">
          <button type="button" 
            class="page-link"  
            v-for="pageNumber in pages.slice(page-1, page+5)" 
            :key="pageNumber" 
            @click="page = pageNumber"> {{pageNumber}} 
          </button>
        </li>
        <li class="page-item">
          <button type="button" 
            @click="page++" 
            style="color:#4CAF50"
            v-if="page < pages.length" class="page-link">{{$t("PostlistVue.Next")}} 
          </button>
        </li>
      </ul>
    </nav>
    
  </div>
</template>
<script>
import getApi from '../../mixins/getApi'
import getPosts from '../../mixins/getPosts'
export default {
  name: 'PostList',
  mixins:[getApi, getPosts],
  data(){
    return  {
     path:'posts',
     posts:[],
     page: 1,
     perPage:10,
     pages:[],
     }
  },
  methods:{
    setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    }
  },
  watch: {
    posts () {
      this.setPages();
    }
  },
  // created(){
  //   this.getPosts();
  // },
  filters: {
    trimWords(value){
      return value.split(" ").splice(0,20).join(" ") + '...';
    }
  }
  
}
</script>
<style scoped>
  .post{
    margin-left:2em;
  }

  h3{
    text-align: center;
    color: black;
  }

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

  button.page-link {
  display: inline-block;
  }
  button.page-link {
      font-size: 15px;
      color: #0b34caba;
      font-weight: 500;
      padding: 0.2rem 0.5rem;
      border: 1px dotted;
      border-radius:2px;
  }

  .offset{
    width: 500px !important;
    margin: 20px auto;  
  }

  .pagination{
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

  
</style>