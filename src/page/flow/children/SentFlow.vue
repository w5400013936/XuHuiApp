<template>
    <div class="fullScreen">
        <div v-if="!loading" class="fullScreen">
            <div v-if="flowData.length > 0">
                <mt-cell v-for="(item,index) in flowData" :key="index"
                class="flow-cell" :title="item.flowName" :label="item.projName" is-link
                @click.native="goFlowContent(item.tableName,item.referFieldName,item.referFieldValue)">
                    {{item.StartDate}}
                </mt-cell>
            </div>
            <div v-else class="p-no-data-panel">
                <divider>暂无数据</divider>
            </div>
        </div>

        <!-- <group>
            <cell title="整盘概念及示范区策划会" value="4444"  inline-desc="上海测试地块管理员测试项目" is-link>
                <p>1111</p>
                <span>2222</span>
            </cell>
        </group> -->
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Group,Cell,Divider } from 'vux'
export default {
    data(){
        return{
            flowData:[],
            type:3,
            loading:false,
        }
    },
    methods:{
        getFlowData(){
            this.$vux.loading.show({
                text: '加载中'
            });
            this.loading = true;
            axios.get(apiConfig.companyServer + apiConfig.flowData.pageUrl + '?type=3&userId=' + globalData.user.guid)
                .then(res=>{
                    // console.log(res)
                    this.flowData = res.data;
                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err)
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
        Cell,
        Group,
        Divider,
    }
}
</script>

<style>

</style>
