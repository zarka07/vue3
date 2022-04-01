<template>

<div 
    
  >
    <div>
      <div>
        <div>{{$t("PostVue.Post")}} {{ $route.params.id}}</div>
        
        <div>
          <b>{{$t("PostVue.Title")}}</b>:   {{post.title}}
        </div>
        <div>
          <b>{{$t("PostVue.Body")}}</b>:   {{post.body}}
        </div>
        <div>
          <b>{{$t("PostVue.Comments")}}</b>:
        </div>
        <div v-for="comment in comments" :key="comment.id">
          <b>{{$t("PostVue.Name")}}</b>:   {{comment.name}}
          <b>{{$t("PostVue.Email")}}</b>:  {{comment.email}}
          <b>{{$t("PostVue.Body")}}</b>:   {{comment.body}}
        </div>
      </div>
    </div>
    
    <button class="btn" @click="showModal">{{$t('Agreement.ShowAgreement')}}
    </button>
    <button class="btn" @click="back">{{$t("PostVue.Back")}}
    </button> 
    <modal class="modal" v-if="this.$store.state.modal.show">
      <div class="modalContent" ><Agreement /></div>
    </modal>
  
  </div>

</template>
<script>
import getApi from '../mixins/getApi';
import getPosts from '../mixins/getPosts';
import Agreement from '../components/Agreement.vue';

export default {
  name: 'Post-component',
  components:{Agreement},
  mixins:[getApi, getPosts],
  data(){
      return {
      isOpen:false,
      post:{},
      comments:{},
      path:'posts/'+this.$route.params.id,
      commentsPath: 'posts/'+this.$route.params.id+'/comments'
      }
    },
  created(){
    this.showComments(this.commentsPath)
  },
  methods:{
      async showComments(commentsPath){
        this.comments = await this.get(commentsPath)
      },
      back(){
        this.$router.push({name:'PostList'})
      },
      showModal(){
        this.$store.dispatch("modal/showModal")
      }
    },
  mounted(){
  }
}
</script>
<style scoped>
  .modal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    z-index: 99;
    padding:30px 0;
    background: rgb(192, 187, 187);
    
  }
  .modalContent{
    margin:auto;
    width: 600px;
    max-width: 100%
  }
  .v-btn{
    margin:5px;
  }
</style>