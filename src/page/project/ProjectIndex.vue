<template>
    <div class="fullScreen">
        <HeaderBar :title="title" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="true">
            <div slot="content" class="fullScreen">
                <tab v-model="tabIndex">
                    <tab-item @on-item-click="changeProjectItem">基本信息</tab-item>
                    <tab-item @on-item-click="changeProjectItem">计划管理</tab-item>
                    <tab-item @on-item-click="changeProjectItem">面积管理</tab-item>
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
import apiConfig from '../../server/apiConfig';
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import ProjInfo from '@/page/project/children/ProjectInfo';
import ProjManagement from '@/page/project/children/ProjectManagement';
import ProjArea from '@/page/project/children/ProjectArea';
import axios from 'axios';
import { Tab, TabItem, } from 'vux';

export default {
    data(){
        return {
            initData: null,
            title:'',
            tabIndex: parseInt(globalData.getStorage('projTabIndex').data)|| 0,
        }
    },
    methods:{
        changeProjectItem:function(index){
            globalData.setStorage('projTabIndex',index);
        }
    },
    beforeMount(){
        const initData = this.$route.query;
        this.initData = initData;
        this.title = initData.name;
        globalData.setStorage('curProjBaseInfo',initData,true);
    },
    components:{
        HeaderBar, BodyContent, ProjInfo,
        ProjManagement, ProjArea,
        Tab, TabItem,
    }
}
</script>

<style scoped>

</style>
