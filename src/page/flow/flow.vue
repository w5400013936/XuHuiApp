<template>
    <div>
        <headerbar title="审批中心"></headerbar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="待审流程">待审流程</mt-tab-item>
            <mt-tab-item id="已审流程">已审流程</mt-tab-item>
            <mt-tab-item id="已发流程">已发流程</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="待审流程">
                <uncheckedFlow></uncheckedFlow>
            </mt-tab-container-item>
            <mt-tab-container-item id="已审流程">
                <checkedFlow></checkedFlow>
            </mt-tab-container-item>
            <mt-tab-container-item id="已发流程">
                <sentFlow></sentFlow>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import globalData from '../../server/globalData'
import headerbar from '@/components/header/header'
import checkedFlow from '@/page/flow/children/checkedFlow'
import uncheckedFlow from '@/page/flow/children/uncheckedFlow'
import sentFlow from '@/page/flow/children/sentFlow'
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
        headerbar,
        checkedFlow,
        uncheckedFlow,
        sentFlow
    }
}
</script>

<style>
    
</style>
