<template>
    <div class="container">
        <mt-swipe class="carousel" :auto="4000">
            <mt-swipe-item
                v-for="(item,index) in homeBannerAry"
                :key="index"
            >
                <img :src="item.path" alt="#">
            </mt-swipe-item>
        </mt-swipe>
        <div class="index-title">
            新人风采
        </div>
        <ul class="flexbox p-employeeShowList">
            <li
              v-for="(item,index) in filterEmp"
              :key="index"
            >
                <img :src="item.path" alt="#" :onerror="defaultAvatar" width="100%" style="height:7rem;">
                <span>{{item.name}}</span>
            </li>
        </ul>
        <div class="index-title">
            系统设置
        </div>
        <div>
            <img src="../../../assets/images/home-index/u25.png" alt="#">
        </div>
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios';
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            homeBannerAry: [], // 首页轮播图
            appNewsList: [], // 首页新闻列表
            appEmpList: [], // 首页新人展示
            loading: false, // 是否处于加载中
            defaultAvatar: 'this.src="' + require('../../../assets/images/avatar/BatMan.png') + '"',
        }
    },
    computed: {
        filterEmp: function () {
            return this.appEmpList.filter((item,index) => {
                return index <= 2;
            });
        }
    },
    methods:{
        fetchData(){
            this.loading = true;
            axios.get(apiConfig.companyServer+apiConfig.homeIndexData).then((response) => {
                console.log(response);
                this.homeBannerAry = response.data.appPicList;
                this.appEmpList = response.data.appEmpList;
                Indicator.close(); // 关闭遮罩
            });
        }
    },
    beforeMount(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        this.fetchData();
    },
}
</script>

<style>
    .carousel{
        height: 10rem;
    }
    .index-title{
        text-align: left;
        border-left: 0.2rem solid #D43C33;
        padding-left: 1rem;
        margin: 1rem 0;
    }
    .p-employeeShowList{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .5rem;
    }
    .p-employeeShowList li{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex-direction: column;
    }
</style>

