<template>
    <div class="fullScreen">
        <div v-if="!loading" class="fullScreen">
            <div v-if="flowData.length > 0">
                <mt-cell v-for="(item,index) in flowData" :key="index"
                class="flow-cell" :title="item.flowName"
                :label="item.projName" is-link
                @click.native="goFlowContent(item.tableName,item.referFieldName,item.referFieldValue)">
                    {{item.StartDate}}
                </mt-cell>
            </div>
            <div v-else class="noData-panel">
                <divider>暂无数据</divider>
            </div>
        </div>
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Divider } from 'vux'
export default {
    data(){
        return{
            flowData:[],
            type:2,
            loading: false,
        }
    },
    methods:{
        getFlowData(){
            this.$vux.loading.show({
                text: '加载中'
            });
            this.loading = true;
            axios.get(apiConfig.companyServer + apiConfig.flowData.pageUrl + '?type=2&userId=' + globalData.user.guid)
                .then(res=>{
                    this.flowData = res.data;
                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err);
                    this.loading = false;
                    this.$vux.loading.hide();
                })
        },
        goFlowContent(tableName,referFieldName,referFieldValue){
            this.$router.push({name:'FlowContent',
                query:{
                    tableName:tableName,
                    referFieldName:referFieldName,
                    referFieldValue:referFieldValue,
                    type:this.type
                }
            })
        }
    },
    beforeMount(){
        this.getFlowData();
    },
    components:{
        Divider,
    }
}
</script>

<style>

</style>
