<template>
  <div>
    <Header/>
    <div class="main" style="">
      <div >
        <div class="postNumber">
          <h3>{{$t("PostVue.Comments")}} {{$t("PostVue.Post")}} {{ $route.params.id}}
          </h3>
        </div>
          
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <p><b>{{$t("PostVue.Name")}}:</b>   {{comment.name}}</p>
          <p><b>{{$t("PostVue.Email")}}:</b> {{comment.email}}</p>
          <p><b>{{$t("PostVue.Body")}}:</b>   {{comment.body}}</p>
        </div>
      
        <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-2">
          <button 
            class="btn btn-success" 
            type="button" 
            @click="showModal">
            {{$t('Agreement.ShowAgreement')}}
          </button>
          <button 
            class="btn btn-primary" 
            type="button"  
            @click="back">
            {{$t("PostVue.Back")}}
          </button>
        </div>

        <modal class="modal" v-if="this.modalStore.show">
          <div class="modalContent" ><Agreement /></div>
        </modal>
      </div>
    </div>
    
        
    <Footer/>
  </div>

</template>
<script>
import getApi from '../../mixins/getApi';
import getPosts from '../../mixins/getPosts';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Agreement from '@/components/Project2/Agreement.vue';
import { ModalStore } from '@/stores/ModalStore';

export default {
  name: 'Post-component',
  components:{ Header, Footer, Agreement },
  mixins:[getApi, getPosts],
  setup() {
        const modalStore = ModalStore();
        return{
          modalStore
        }
    },
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
        this.$router.go(-1)
      },
      showModal(){
        this.modalStore.showModal(true)
      }
    },
  mounted(){
  }
}
</script>
<style scoped>


  .btn{
    margin-left: 25px;
    margin-right: 25px;
  }

  .btn:nth-child(even){
    margin-left:100px;
    margin-right:100px;
  }

  .postNumber{
    text-align: center;
  }

  .comment{
    border: 4px double black;
    margin: 6px 4px;
    padding-left: 4px;
    padding-bottom: 2px;
  }

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