export default{
    methods:{
        async showPosts(path){
          this.posts = await this.get(path)
        },
      },
    created(){
        this.showPosts(this.path);
      },
}