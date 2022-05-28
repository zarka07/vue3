<template>
    <div class="bg-secondary">
        <router-view></router-view>
    </div>
</template>

<script>
import messages from '../utils/messages'
import { CRMstore } from '@/stores/CRMstore';
export default {
    setup(){
        const crmStore = CRMstore();
        return{
          crmStore
        }
    },
    computed: {
        error(){
            return this.crmStore.error
        }
    },
    watch: {
        error(fbErr){
            this.$error(messages[fbErr.code]|| 'Что-то пошло не так')
        }
    }
}
</script>