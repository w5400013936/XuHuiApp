<template>
    <div>
        <HeaderBar title="审批中心"></HeaderBar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="待审流程">待审流程</mt-tab-item>
            <mt-tab-item id="已审流程">已审流程</mt-tab-item>
            <mt-tab-item id="已发流程">已发流程</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="待审流程">
                <UncheckedFlow></UncheckedFlow>
            </mt-tab-container-item>
            <mt-tab-container-item id="已审流程">
                <CheckedFlow></CheckedFlow>
            </mt-tab-container-item>
            <mt-tab-container-item id="已发流程">
                <SentFlow></SentFlow>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import globalData from '../../server/globalData';
import HeaderBar from '@/components/header/Header';
import CheckedFlow from '@/page/flow/children/CheckedFlow';
import UncheckedFlow from '@/page/flow/children/UncheckedFlow';
import SentFlow from '@/page/flow/children/SentFlow';
export default {
    data(){
        return {
            selected:'待审流程',
            tabSelected:1
        }
    },
    beforeMount(){
        globalData.tabSelected = this.tabSelected;
    },
    components:{
        HeaderBar, CheckedFlow, UncheckedFlow, SentFlow,
    }
}
</script>

<style>

</style>
