<template>
    <div class="fullScreen">
        <swiper loop auto :aspect-ratio="350/800">
            <swiper-item v-for="(item,index) in projBannerAry" :key="index" class="p-img-center">
                <img :src="item.src" alt="#" width="100%">
            </swiper-item>
        </swiper>
        <group>
            <cell value-align="left" v-for="(item,index) in abstractAry" key="index" class="p-proj-item">
                <div slot="title" class="p-label">{{item.key}}</div>
                <span class="p-value">{{item.value|| "暂无数据"}}</span>
            </cell>
            <cell-box>
                <div class="w100p">
                    <div class="p-cellTitle">效果图</div>
                    <div class="w100p">
                        <ul class="flexbox p-buildingShowList">
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                        </ul>
                    </div>
                </div>
            </cell-box>
        </group>
    </div>
</template>
<script>
import apiConfig from "../../../server/apiConfig";
import globalData from '../../../server/globalData';
import axios from "axios";
import { Group,Cell,CellBox,Swiper,SwiperItem } from 'vux'
export default {
    data(){
        return{
            defaultAvatar: 'this.src="' + require('../../../assets/images/projLogo/default.png') + '"',
            projBannerAry: [], // 项目详情页轮播图
            abstractAry: [], // 项目简介
        }
    },
    methods:{
        fetchData(){
            this.$vux.loading.show({
                text: '加载中'
            });
            // 获取项目概要
            const projId = JSON.parse(globalData.getStorage('curProjBaseInfo').data).projId;
            axios.get(apiConfig.companyServer+apiConfig.projectSummaryUrl
                +"?projId=" + projId
                +"&userId=" + globalData.user.guid
            ).then(res => {
                this.projBannerAry = res.data.imgList;
              this.$vux.loading.hide();
            }).catch(err=>{
                console.log(err);
                this.$vux.loading.hide();
            });
            // 获取项目简介
            axios.get(apiConfig.companyServer + apiConfig.projectIntroduce
                +"?projId=" + projId
                +"&userId=" + globalData.user.guid
            ).then(res => {
                this.abstractAry = res.data.data;
                this.$vux.loading.hide();
            }).catch(err=>{
                console.log(err);
                this.$vux.loading.hide();
            });
        }
    },
    components:{
        Group,  Cell, CellBox,
        Swiper, SwiperItem,
    },
    beforeMount(){
        if(globalData.beforeLoadCheckUser()) {
            this.fetchData();
        }
    }
}
</script>
<style scoped>
.weui-cells .weui-cell{
    padding: 15px;
}
.p-label{
    color: #999999 !important;
    width: 6rem;
    font-size: 1rem;
}
.p-value{
    padding-left: 1rem;
    color:#000;
    font-size: 1rem;
}
.weui-cell__ft{
    margin-left: 1rem !important;
    color: #000 !important;
}
.w100p{
    width: 100%;
}
.p-cellTitle{
    color: #999999;
}
.p-buildingShowList{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 0.5rem 0;
    background-color: #fff;
}
.p-buildingShowList li{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
}
.index-title{
  text-align: left;
  border-left: 0.2rem solid #D43C33;
  padding-left: 1rem;
  margin: 1rem 0;
}
.p-proj-item{
  padding: 8px 10px !important;
}
.p-img-center{
  display: flex;
  align-items: center;
}
</style>
