<template>
    <div style="background-color:white">
        <div class="agreement" @scroll="onBodyScroll" ref="modal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ducimus! Culpa incidunt reprehenderit ad iure dicta sit, repellat aperiam a in eos autem repellendus? Labore minus eaque iure reiciendis hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab qui dignissimos recusandae, asperiores soluta libero nulla quis rem sunt saepe? Facilis dignissimos sint porro ex veniam? Fuga, suscipit officia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum repellendus molestias dignissimos ut accusantium accusamus ipsum, repellat, aspernatur commodi ducimus dolor autem aperiam iure culpa, facilis odit quia ex?
            Nesciunt, quo quaerat adipisci ipsam dolore at dolorem necessitatibus perferendis illo facere alias vel aperiam officia sit sunt! Asperiores, fuga enim. Voluptatibus, sit nostrum. Magnam explicabo vitae ad impedit adipisci!
            Maxime harum architecto iusto quia expedita? Expedita qui quibusdam voluptatum corporis? Deserunt adipisci porro, quidem architecto at provident itaque! In ipsum optio accusantium dolorem molestiae facilis. Assumenda tempora numquam temporibus.
            Dolorem fugiat ipsam impedit cum ea! Accusantium eius, doloremque, sapiente velit delectus laboriosam dignissimos animi iste debitis possimus provident ut voluptatem quas quaerat maiores. Sunt sapiente soluta nulla corrupti veniam!
            Aliquid fugiat eum incidunt magni consequatur, neque officiis quibusdam odio maiores a praesentium beatae reiciendis architecto eveniet sed ut, vel animi doloremque cum dignissimos maxime deleniti pariatur. Nobis, illum deleniti!
            Minus expedita et, voluptatem doloremque pariatur repudiandae fugiat quibusdam maxime ipsa cumque tempore commodi repellendus recusandae odio eum animi? Odit in libero incidunt itaque. Recusandae iure magni reprehenderit et odio.
        </div>
        <div class="btn">
        <button class="btn danger"
            @click="closeAgreement"
            color="pink"
            >{{$t('Agreement.NotAgree')}}
        </button>
        <button class="btn sucsess" 
            :disabled="!isReaded"
            color="green"
            @click="showPost"
            >{{$t('Agreement.Agree')}}
        </button>
        </div>
        

    </div>
</template>
<script>

export default ({
    name: 'agreement-component',
    data(){
        return{
            isReaded:false
        }
        
    },
    methods:{
        closeAgreement(){
            this.$store.dispatch("modal/hideModal");
            this.$router.push({name:'PostList'})
        },
        showPost(){
            let answer = this.$t('Agreement.Molodec')
            alert(answer+'!')
            this.$store.dispatch("modal/hideModal");
        },
        onBodyScroll(){
            const modal = this.$refs.modal;
            if(modal.clientHeight+modal.scrollTop >= modal.scrollHeight){
                this.isReaded = true
            }
        }
    }
})
</script>

<style scoped>
    .agreement{
        height: 300px;
        overflow-y: scroll;
        margin-top:10px;
        text-align: center;
    }
    .btn{
        margin-top:15px;
        margin-left:35%;
    }
    .v-btn{
        margin:5px;
    }
</style>