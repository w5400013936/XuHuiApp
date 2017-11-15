<template>
    <div>
        <headerbar :title="$route.params.name" :showBackBtn="true"></headerbar>
        <router-view></router-view>
    </div>
</template>

<script>
import headerbar from '@/components/header/header'
import News from '@/page/home/children/News'
import Rookies from '@/page/home/children/Rookies'
export default {
    data(){
        return {
            
        }
    },
    beforeMount(){
        // console.log(this.$route)
    },
    components:{
        headerbar,
        News,
        Rookies,
    }
}
</script>

<style>

</style>