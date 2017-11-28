<template>
    <div class="fullScreen">
        <div v-if="!loading" class="fullScreen">
            <mt-loadmore class="fullScreen" v-if="flowData.length > 0"
                :top-method="loadTop"
                :bottom-method="loadBottom"
                :autoFill="false"
                :bottom-all-loaded="allLoaded"
                @bottom-status-change="handleBottomChange"
                ref="loadmore">
                <ul class="content">
                    <li  v-for="(item,index) in flowData" :key="index">
                        <mt-cell
                        class="flow-cell" :title="item.flowName" :label="item.projName" is-link
                        @click.native="goFlowContent(item.tableName,item.referFieldName,item.referFieldValue)">
                            {{item.StartDate}}
                        </mt-cell>
                    </li>
                </ul>
                <divider v-if="allLoaded">已经到底啦</divider>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <load-more v-show="bottomStatus === 'loading' && !allLoaded" tip="正在加载"></load-more>
                </div>
            </mt-loadmore>
            <div v-else class="p-no-data-panel">
                <divider>暂无数据</divider>
            </div>
        </div>
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Divider,LoadMore, } from 'vux'
export default {
    data(){
        return{
            flowData:[], // 页面数据
            type:4, // 数据类型
            loading:false, 
            firstLoad:false, // 判断当前页是否为初次加载
            bottomStatus:'', // 上拉加载状态
            allLoaded:false, // 判断数据是否全部加载完成
            currentPage:0, // 数据页码
            pageSize:10, // 每页数据量
        }
    },
    methods:{
        getFlowData(refresh){
            
            if(!this.firstLoad){
                this.firstLoad = true;
                this.loading = true;
                this.$vux.loading.show({
                    text: '加载中'
                });
            }
            this.currentPage += 1;
            axios.get(apiConfig.companyServer + apiConfig.flowData.pageUrl 
            + '?type=4&userId=' + globalData.user.guid 
            + '&current=' + this.currentPage 
            + '&pageSize=' + this.pageSize)
                .then(res=>{
                    if(res.data.length == 0){
                        this.allLoaded = true;
                    }
                    else{
                        if(refresh){
                            this.flowData = res.data;
                        }
                        else{
                            this.flowData = this.flowData.concat(res.data);
                        }
                        
                        this.$nextTick(()=>{
                            this.$refs.loadmore.onTopLoaded();
                            this.$refs.loadmore.onBottomLoaded();
                        })
                    }
                    this.loading = false;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err)
                    this.loading = false;
                    this.$vux.loading.hide();
                    this.$refs.loadmore.onTopLoaded();
                    this.$refs.loadmore.onBottomLoaded();
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
        },
        loadTop(){
            this.currentPage = 0;
            this.getFlowData(true);
        },
        loadBottom(){
            this.getFlowData();
        },
        handleBottomChange(status){
            this.bottomStatus = status;
        }
    },
    created(){
        this.getFlowData();
    },
    mounted(){

    },
    components:{
        Divider,
        LoadMore,
    }
}
</script>

<style>

</style>
