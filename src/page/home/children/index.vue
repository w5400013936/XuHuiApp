<template>
    <div class="container">
        <mt-swipe class="carousel" :auto="4000">
            <mt-swipe-item>
                <img src="../../../assets/images/home-index/u85.png" alt="#">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../assets/images/home-index/u87.png" alt="#">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../assets/images/home-index/u89.png" alt="#">
            </mt-swipe-item>
        </mt-swipe>

        <div class="index-title">
            新人风采
        </div>
        <div class="flexbox">
            <img src="../../../assets/images/home-index/u71.png" alt="#">
            <img src="../../../assets/images/home-index/u73.png" alt="#">
            <img src="../../../assets/images/home-index/u75.png" alt="#">
        </div>
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
export default {
    data(){
        return {
            homeBannerAry:[],
            loading: false,
        }
    },
    methods:{
        fetchData(){
            this.loading = true;
            fetch(apiConfig.companyServer+apiConfig.homeIndexData)
            .then((response) => {
              console.log(response)
            });
        }
    },
    beforeMount(){
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
    .flexbox{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>

