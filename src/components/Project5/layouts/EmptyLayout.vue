<template>
    <div class="bg-secondary">
        <router-view></router-view>
    </div>
</template>

<script>

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
    
}
</script>