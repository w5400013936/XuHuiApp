<template>
    <div class="fullScreen" style="overflow:hidden;">
        <Search v-model="searchKey"
            placeholder="搜索供应商名称"
            top="5.6rem"
            :style="{position:'fixed',zIndex:'1'}"
            @on-submit="searchSupplier(true)"
            @on-cancel="resetList">
        </Search>
        <div class="fixedThead">
            <div class="t1">供方名称</div>
            <div class="t2">服务专业</div>
            <div class="t3">状态</div>
        </div>
        <div v-if="!loading" class="fullScreen" style="overflow:scroll;padding-bottom:8.5rem;">
            <mt-loadmore class="fullScreen"
                :top-method="loadTop"
                :autoFill="false"
                ref="loadmore">
            <x-table class="bgf" :cell-bordered="false" v-if="supplierData.length > 0"
            v-infinite-scroll="getSupplierData"
            infinite-scroll-disabled="loadmore"
            infinite-scroll-immediate-check="false">
                <tbody class="p-tbody">
                    <tr v-for="(item,index) in supplierData" :key="index" @click="goSupplierDetail(item.name,item.supplierId)">
                        <td class="t1">{{item.name}}</td>
                        <td class="t2">{{item.profs}}</td>
                        <td class="t3">{{item.officialStatus}}</td>
                    </tr>
                </tbody>
            </x-table>
             <div v-else class="p-no-data-panel">
                <divider v-if="firstLoad">暂无数据</divider>
            </div>
            <divider class="" v-if="allLoaded && !firstLoad">已经到底啦</divider>
            <div class="spinner " v-show="loadmore&&!allLoaded">
                <spinner size="1.5rem"></spinner>
                正在加载
            </div>
            </mt-loadmore>
        </div>
        
    </div>
</template>
<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios';
import globalData from '../../../server/globalData';
import { Search,XTable,Divider,LoadMore,Spinner } from 'vux'
export default {
    data(){
        return{
            searchKey:'',
            supplierData: [], // 页面数据
            type: 1, // 数据类型
            loading: false,
            firstLoad: true, // 判断当前页是否为初次加载
            allLoaded: false, // 判断数据是否全部加载完成
            currentPage: 0, // 数据页码
            pageSize: 10, // 每页数据量
            loadmore: false, //判断页面底部是否正在加载更多
        }
    },
    methods:{
        getSupplierData(refresh,inSearch){   // 获取数据，参数：refresh为是否刷新页面数据
            if(!refresh){
                this.loadmore = true;
            }else{
                this.currentPage = 0;
            }
            if(this.firstLoad){
                this.loading = true;
                this.$vux.loading.show({
                    text: '加载中'
                });
            }
            this.currentPage += 1;
            axios.get(
                apiConfig.companyServer + apiConfig.SupplierList 
                + '?type=' + this.type
                + '&current=' + this.currentPage
                + '&pageSize=' + this.pageSize
                + '&keyWord=' + this.searchKey
            ).then(res=>{
                // console.log(res.data)
                if(res.data.appSupplierList.length == 0){
                    if(inSearch){
                        this.$vux.toast.show({
                            text: '无相关供应商',
                            type: 'cancel',
                        });
                    }
                    else{
                        this.allLoaded = true;
                    }
                } else{
                    if(refresh){
                        this.supplierData = res.data.appSupplierList;
                        this.allLoaded = false;
                    } else{
                        this.supplierData = this.supplierData.concat(res.data.appSupplierList);
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
                this.loadmore = false;
                this.loading = false;
                this.$vux.loading.hide();
                this.$refs.loadmore.onTopLoaded();
            });
        },
        searchSupplier(inSearch){ // 供应商搜索
            this.getSupplierData(true,inSearch);
        },
        resetList(){    // 清空搜索，数据重置
            this.searchKey = '';
            this.getSupplierData(true);  
        },
        loadTop(){  // 下拉更新
            this.getSupplierData(true);
        },
        goSupplierDetail(name,supplierId){ // 跳转供应商详情页
            this.$router.push({name:'SupplierDetail',query:{name:name,supplierId:supplierId}});
        }
    },
    created(){
        this.getSupplierData();
    },
    components:{
        Search,
        XTable,
        Divider,
        LoadMore,
        Spinner,
    }
}
</script>
<style scoped>
.vux-table th{
    font-weight: bold;
    color: #474747;
}
.bgf{
    background-color: #fff;
}
.vux-table td{
    line-height: 1.2rem;
    padding: 0.7rem 0.5rem;
    color: #4b4b4b;
}
.p-tbody{
    font-size: 0.9rem;
}
.fixedThead{
    width: 100%;
    margin-top: 2.9rem;
    background-color: #fff;
    border-bottom: 1px solid #c1c1c1;
    display: flex;
    padding: 0.7rem 0;
    color: #474747;
    text-align: center;
}
.fixedThead div{
    font-weight: bold !important;
}
.t1{
    width: 46%;
}
.t2{
    width: 27%;
}
.t3{
    width: 27%;
}
</style>
