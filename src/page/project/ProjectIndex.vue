<template>
    <div class="fullScreen">
        <HeaderBar :title="title" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="true">
            <div slot="content" class="fullScreen">
                <tab v-model="tabIndex">
                    <tab-item selected>基本信息</tab-item>
                    <tab-item>计划管理</tab-item>
                    <tab-item>面积管理</tab-item>
                </tab>
                <keep-alive>
                    <ProjInfo v-if="tabIndex == 0"></ProjInfo>
                </keep-alive>
                <keep-alive>
                    <ProjManagement v-if="tabIndex == 1"></ProjManagement>
                </keep-alive>
                <keep-alive>
                    <ProjArea v-if="tabIndex == 2"></ProjArea>
                </keep-alive>
            </div>
        </BodyContent>
    </div>
</template>

<script>
import globalData from '../../server/globalData';
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import ProjInfo from '@/page/project/children/ProjectInfo';
import ProjManagement from '@/page/project/children/ProjectManagement';
import ProjArea from '@/page/project/children/ProjectArea';
import { Tab, TabItem, } from 'vux'

export default {
    data(){
        return {
            title:'',
            tabIndex:0,
        }
    },
    beforeMount(){
        this.title = this.$route.params.title;
        if(this.$route.query.guid){
            let loginUser = globalData.user;
            loginUser.guid = this.$route.query.guid;
            loginUser.userId = this.$route.query.userId;
            loginUser.name = this.$route.query.name;
        } else{
            // console.log("没有获取到用户guid");
            // console.log(this.$route.query)
        }
    },
    components:{
        HeaderBar,
        BodyContent,
        ProjInfo,
        ProjManagement,
        ProjArea,
        Tab,
        TabItem,
    }
}
</script>

<style scoped>

</style>
