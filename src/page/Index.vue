/**
* Created by Administrator on 2017/11/13.
*/
<template>
    <div class="fullScreen">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from '../components/footer/TabBar.vue';
    export default{
        //状态值
        data(){
            return {
                
            }
        },
        components:{
            TabBar,
        }
    }
</script>
