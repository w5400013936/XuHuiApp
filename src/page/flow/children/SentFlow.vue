<template>
    <div class="fullScreen">
        <div v-if="!loading" class="fullScreen">
            <mt-loadmore class="fullScreen"
                :top-method="loadTop"
                :autoFill="false"
                ref="loadmore">
                <ul class="content"  v-if="flowData.length > 0"
                v-infinite-scroll="getFlowData"
                infinite-scroll-disabled="loadmore"
                infinite-scroll-immediate-check="false">
                    <li  v-for="(item,index) in flowData" :key="index">
                        <mt-cell
                        class="flow-cell" :title="item.flowName" :label="item.projName" is-link
                        @click.native="goFlowContent(item.tableName,item.referFieldName,item.referFieldValue)">
                            {{item.StartDate}}
                        </mt-cell>
                    </li>
                </ul>
                <div v-else class="p-no-data-panel">
                    <divider v-if="firstLoad">暂无数据</divider>
                </div>
                <divider class="mb55" v-if="allLoaded && !firstLoad">已经到底啦</divider>
                <div class="spinner mb55" v-show="loadmore&&!allLoaded">
                    <spinner size="1.5rem"></spinner>
                    正在加载
                </div>

            </mt-loadmore>

        </div>
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Divider,LoadMore,Spinner } from 'vux'
export default {
    data(){
        return{
            flowData:[], // 页面数据
            type:3, // 数据类型
            loading:false,
            firstLoad:true, // 判断当前页是否为初次加载
            allLoaded:false, // 判断数据是否全部加载完成
            currentPage:0, // 数据页码
            pageSize:10, // 每页数据量
            loadmore:false, //判断页面底部是否正在加载更多
        }
    },
    methods:{
        getFlowData(refresh){
            if(!refresh){
                this.loadmore = true;
            }
            if(this.firstLoad){
                this.loading = true;
                this.$vux.loading.show({
                    text: '加载中'
                });
            }
            this.currentPage += 1;
            if(globalData.beforeLoadCheckUser()) {
                axios.get(apiConfig.companyServer + apiConfig.flowData.pageUrl
                    + '?type='+this.type+'&userId=' + globalData.user.guid
                    + '&current=' + this.currentPage
                    + '&pageSize=' + this.pageSize)
                .then(res=>{
                    if(res.data.length == 0){
                        this.allLoaded = true;
                    } else{
                        if(refresh){
                            this.flowData = res.data;
                            this.allLoaded = false;
                        } else{
                            this.flowData = this.flowData.concat(res.data);
                            this.firstLoad = false;
                        }

                        this.$nextTick(()=>{
                            if(this.$refs.loadmore){
                                this.$refs.loadmore.onTopLoaded();
                            }
                        });
                    }
                    this.loadmore = false;
                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err)
                    this.loadmore = false;
                    this.loading = false;
                    this.$vux.loading.hide();
                    this.$refs.loadmore.onTopLoaded();
                });
            }
        },
        goFlowContent(tableName,referFieldName,referFieldValue){
            const queryData = {
                tableName:tableName,
                referFieldName:referFieldName,
                referFieldValue:referFieldValue,
                type:this.type
            };
            globalData.setStorage("curFlowInfo",queryData,true);
            this.$router.push({name:'FlowContent',
                query:queryData
            });
        },
        loadTop(){
            this.currentPage = 0;
            this.getFlowData(true);
        },
        loadBottom(){
            this.getFlowData();
        },
    },
    created(){
        this.getFlowData();
    },
    mounted(){

    },
    components:{
        Divider,
        LoadMore,
        Spinner,
    }
}
</script>

<style>

</style>
