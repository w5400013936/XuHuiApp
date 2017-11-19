<template>
    <div>
        <HeaderBar title="审批中心" :showBackBtn="true"></HeaderBar>
        <div v-if="!loading">
            <BodyContent>
                <div slot="content">
                    <div class="comment">
                        <group title="填写审批意见：">
                            <x-textarea  :max="200" :show-counter="false" :height="200"></x-textarea>
                        </group>
                    </div>
                    <div class="fixedBottom">
                        <flexbox>
                            <flexbox-item v-for="(item,index) in mainAct" :key="index">
                                <x-button type="warn" @click.native="operation(item.type)">{{item.name}}</x-button>
                            </flexbox-item>
                            <flexbox-item>
                                <x-button @click.native="showMore">更多</x-button>
                            </flexbox-item>
                        </flexbox>
                    </div>
                    <actionsheet v-model="popupShow" :menus="actMenu" @on-click-menu="operation"></actionsheet>

                </div>
            </BodyContent>
        </div>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Group,XTextarea,XButton,Flexbox,FlexboxItem,Popup,Actionsheet  } from 'vux'
export default {
    data(){
        return {
            popupShow:false,
            actList:null,
            mainAct:null,
            moreAct:null,
            actMenu:{},
            tableName:null,
            referFieldName:null,
            referFieldValue:null,
            loading:false,
        }
    },
    methods:{
        showMore(){
            this.popupShow = true;
        },
        operation(type,item){
            type = type + '';
            // console.log(typeof type);
            switch(type){
                case '2': // 通过
                this.$vux.confirm.show({
                    title:'请确认审批操作',
                    content:'您选择的审批操作为“通过”',
                    onConfirm(){

                    },
                })
                break;
                case '3': // 驳回
                this.$vux.confirm.show({
                    title:'请确认审批操作',
                    content:'您选择的审批操作为“驳回”',
                    onConfirm(){

                    },
                })
                break;
                case '5': // 转办
                this.$router.push({name:'SelectUser',query:{actList:this.actList}});
                break;
                case '7': // 终止
                this.$vux.confirm.show({
                    title:'请确认审批操作',
                    content:'您选择的审批操作为“终止”',
                    onConfirm(){

                    },
                })
                break;
                case '10': // 当前会签
                break;
                case '11': // 加签
                break;
                case '12': // 回退
                this.$vux.confirm.show({
                    title:'请确认审批操作',
                    content:'您选择的审批操作为“回退”，流程将返回给上一级操作',
                    onConfirm(){

                    },
                })
                break;
                case '13': // 知会
                this.$router.push({name:'NotifyUser'});
                break;
            }
        },
        getActList(){
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
                    this.actList = res.data.actList;
                    this.mainAct = this.actList.slice(0,2);
                    this.moreAct = this.actList.slice(2);
                    this.moreAct.forEach(function(item,index) {
                        this.actMenu[item.type] = item.name;
                    }, this);

                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err);
                    this.loading = false;
                    this.$vux.loading.hide();
                })
        }
    },
    beforeMount(){
        this.tableName = this.$route.query.tableName;
        this.referFieldName = this.$route.query.referFieldName;
        this.referFieldValue = this.$route.query.referFieldValue;
        this.getActList();

    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        XTextarea,
        XButton,
        Flexbox,
        FlexboxItem,
        Popup,
        Actionsheet
    }
}
</script>
<style scoped>
    .comment{
        padding: 0 1rem;
    }
</style>
