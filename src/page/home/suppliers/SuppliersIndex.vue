<template>
    <div class="fullScreen">
        <HeaderBar title="供应商管理" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content" class="fullScreen" style="overflow:hidden;">
                <tab v-model="tabIndex">
                    <tab-item @on-item-click="changeSupplierItem">集团设计供方</tab-item>
                    <tab-item @on-item-click="changeSupplierItem">地区设计供方</tab-item>
                    <tab-item @on-item-click="changeSupplierItem">非正式供应商</tab-item>
                </tab>
                <keep-alive>
                    <GroupSupplier v-if="tabIndex == 0"></GroupSupplier>
                </keep-alive>
                <keep-alive>
                    <AreaSupplier v-if="tabIndex == 1"></AreaSupplier>
                </keep-alive>
                <keep-alive>
                    <UnofficialSupplier v-if="tabIndex == 2"></UnofficialSupplier>
                </keep-alive>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import globalData from '../../../server/globalData';
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import GroupSupplier from '@/page/home/suppliers/GroupSupplier';
import AreaSupplier from '@/page/home/suppliers/AreaSupplier';
import UnofficialSupplier from '@/page/home/suppliers/UnofficialSupplier';
import { Tab, TabItem, } from 'vux'

export default {
    data(){
        return {
            tabIndex: parseInt(globalData.getStorage('suppTabIndex').data)|| 0,
        }
    },
    methods:{
        /**
         * 记录当前选中的Tab
         * @param index
         */
        changeSupplierItem:function(index){
            globalData.setStorage('suppTabIndex',index);
        }
    },
    beforeMount(){

    },
    components:{
        HeaderBar,
        BodyContent,
        GroupSupplier,
        AreaSupplier,
        UnofficialSupplier,
        Tab,
        TabItem,
    }
}
</script>

<style scoped>

</style>
