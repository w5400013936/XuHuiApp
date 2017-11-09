<template>
    <div>
        <headerbar title="首页"></headerbar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="首页">首页</mt-tab-item>
            <mt-tab-item id="新闻">新闻</mt-tab-item>
            <mt-tab-item id="新人">新人</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="首页">
                <Index></Index>
            </mt-tab-container-item>
            <mt-tab-container-item id="新闻">
                <News></News>
            </mt-tab-container-item>
            <mt-tab-container-item id="新人">
                <Rookies></Rookies>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import headerbar from '@/components/header/header'
import Index from '@/page/home/children/index'
import News from '@/page/home/children/News'
import Rookies from '@/page/home/children/Rookies'
export default {
    data(){
        return {
            selected:'首页'
        }
    },
    components:{
        headerbar,
        Index,
        News,
        Rookies
    }
}
</script>

<style>

</style>
