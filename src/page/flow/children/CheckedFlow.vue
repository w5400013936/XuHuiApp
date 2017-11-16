<template>
    <div class="container">
        <mt-cell v-for="(item,index) in flowData" :key="index"
         class="flow-cell" :title="item.flowName" :label="item.projName" is-link>
            {{item.StartDate}}
        </mt-cell>
    </div>
</template>
  
<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
import globalData from '../../../server/globalData'
export default {
    data(){  
        return{
            flowData:[]
        }
    },
    methods:{
        getFlowData(){
            axios.get(apiConfig.companyServer + apiConfig.flowData.pageUrl + '?type=1&userId=' + globalData.user.guid)
                .then(res=>{
                    console.log(res)
                    this.flowData = res.data;
                }).catch(err=>{
                    console.log(err)
                })
        }
    },
    beforeMount(){
        this.getFlowData();
    }
}
</script>

<style>
    .flow-cell .mint-cell-wrapper{
        height: 5rem;
    }
    .flow-cell .mint-cell-title{
        text-align: left;
    }
</style>