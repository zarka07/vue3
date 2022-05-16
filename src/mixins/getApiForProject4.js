import axios from 'axios';

export default{
    data(){
        return{
          response:{},
          showResponse:false
        }
      },
    methods:{
        async getApi(){
            const Response = await axios
                    .get(process.env.VUE_APP_API_P4ENDPOINT_URL)
                    .catch(error => {
                        if(error.response.status){
                            const statusCode = error.response.status
                            console.log(statusCode)      
                        }
                    })
            this.response = Response.data; 
            this.showResponse = true 
            console.log(this.response)     
            },
    }
    
}