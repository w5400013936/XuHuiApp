<template>
    <div class="fullScreen">
        <HeaderBar title="审批中心" :showBackBtn="true"></HeaderBar>
        <FlowTemplate v-if="!loading">
            <div slot="flowInfo" v-if="flowContent.showFields.length > 0">
                <group class="weui-group p-flowInfoContent">
                    <cell v-for="(item,index) in flowContent.showFields" :key="index"
                        :title="item.showName" :inline-desc="item.showValue"></cell>
                </group>
            </div>
            <div slot="flowAttachment" v-if="flowContent.fileList.length > 0">
                <div class="title">相关附件</div>
                <group>
                    <cell v-for="(item,index) in flowContent.fileList" :key="index"
                        :title="item.name + item.ext">
                        <x-button type="warn" :mini="true" @click.native="goFlowAttachment(item.name,item.ext)">查看</x-button>
                    </cell>
                </group>
            </div>
            <div slot="flowForm" v-if="flowContent.formList.length > 0">
                <div class="title">相关表单</div>
                <group>
                    <cell v-for="(item,index) in flowContent.formList" :key="index"
                        :title="item.name"></cell>
                </group>
            </div>
            <div slot="flowOperation">
                <div class="fixedBottom" v-if="type == 1">
                    <x-button type="warn" @click.native="goFlowOpinion">查看审批意见</x-button>
                </div>
                <div class="fixedBottom" v-else-if="type == 2">
                    <flexbox>
                        <flexbox-item>
                            <x-button type="warn" @click.native="goFlowCheck">我要审批</x-button>
                        </flexbox-item>
                        <flexbox-item>
                            <x-button type="warn" @click.native="goFlowOpinion">查看审批意见</x-button>
                        </flexbox-item>
                    </flexbox>
                </div>
                <div class="fixedBottom" v-if="type == 3">
                    <x-button type="warn" @click.native="goFlowOpinion">查看审批意见</x-button>
                </div>
            </div>
        </FlowTemplate>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import FlowTemplate from '@/components/FlowTemplate/FlowTemplate'
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Group,Cell,XButton,Flexbox, FlexboxItem, } from 'vux'
export default {
    data(){
        return{
            flowContent: [],
            tableName: null,
            referFieldName: null,
            referFieldValue: null,
            actList:null,
            flowId: null,   // 流程Id
            flowInstanceId: null,   // 流程实例Id
            stepId:null,    // 当前步骤Id
            type: null, // 判断流程状态 1.已审 2.未审 3.已发
            loading: false,
        }
    },
    methods:{
        getFlowContent(){
            this.$vux.loading.show({
                text: '加载中'
            });
            this.loading = true;
            axios.get(apiConfig.companyServer + apiConfig.flowContent.pageUrl
                        + '?tableName='+this.tableName
                        +'&referFieldName=' + this.referFieldName
                        +'&referFieldValue='+this.referFieldValue
                        +'&userId=' + globalData.user.guid)
                .then(res=>{
                    console.log(res);
                    this.flowContent = res.data;
                    this.actList = res.data.actList;
                    this.flowId = res.data.flowId;
                    this.flowInstanceId = res.data.flowInstanceId;
                    this.stepId = res.data.stepId;

                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err);
                    this.loading = false;
                    this.$vux.loading.hide();
                })
        },
        goFlowOpinion(){
            this.$router.push({name:'FlowOpinion',query:{flowInstanceId:this.flowInstanceId}});
        },
        goFlowAttachment(filename,fileext){
            this.$router.push({name:'FlowAttachment',query:{filename:filename,fileext:fileext}});
        },
        goFlowCheck(){
            globalData.flow.actList = this.actList;
            globalData.flow.flowId = this.flowId;
            globalData.flow.flowInstanceId = this.flowInstanceId;
            globalData.flow.stepId = this.stepId;
            this.$router.push({name:'FlowCheck',query:{
                // flowId:this.flowId,
                // flowInstanceId: this.flowInstanceId,
                // stepId: this.stepId,
                // tableName:this.tableName,
                // referFieldName:this.referFieldName,
                // referFieldValue:this.referFieldValue,
            }});
        }
    },
    beforeMount(){
        this.tableName = this.$route.query.tableName;
        this.referFieldName = this.$route.query.referFieldName;
        this.referFieldValue = this.$route.query.referFieldValue;
        this.type = this.$route.query.type;
        this.getFlowContent();
    },
    components:{
        HeaderBar,
        FlowTemplate,
        Group,
        Cell,
        XButton,
        Flexbox,
        FlexboxItem,
    }
}
</script>
<style scoped>
    .title{
        margin-top: 0.5rem;
    }
    .weui-group>.vux-no-group-title.weui-cells{
        margin-top: 0;
    }
    .weui-cells{
        margin-top: 0;
    }
</style>
<style>
  .p-flowInfoContent .vux-no-group-title{
    margin-top: 0 !important;
  }
</style>

