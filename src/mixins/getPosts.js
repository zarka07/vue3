export default{
    methods:{
        async showPosts(path){
          this.post = await this.get(path)
        },
      },
    created(){
        this.showPosts(this.path);
      },
}