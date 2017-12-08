<template>
    <div class="fullScreen">
        <HeaderBar :title="title" :showBackBtn="true" ></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div class="container projInfoBox" slot="content">
                <div v-if="!loading">
                    <div v-if="projInfoList.projList && projInfoList.projList.length > 0">
                        <mt-cell v-for="(item,index) in projInfoList.projList"
                            :key="index" :title="item.name" is-link @click.native="goToDetailPage(item)">
                            <img slot="icon" :src="item.thumbPic"
                                :onerror="defaultAvatar"
                                width="35" height="35">
                        </mt-cell>
                    </div>
                    <div v-else class="p-no-data-panel fullScreen">
                        <divider>暂无数据</divider>
                    </div>
                </div>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import apiConfig from '../../server/apiConfig';
import axios from 'axios';
import { Divider } from 'vux'

export default {
    data(){
        return{
            projInfoList: [],
            title: null,
            engId: null,
            loading: false,
            defaultAvatar: 'this.src="' + require('../../assets/images/projLogo/default.png') + '"'
        }
    },
    methods:{
        getProjInfoData(){
            this.$vux.loading.show({
                text: '加载中'
            });
            this.loading = true;
            this.engId = this.$route.params.engId;
            axios.get(apiConfig.companyServer+apiConfig.projectInfoPageUrl+'?engId='+this.engId)
                .then(res=>{
                    console.log(res);
                    this.projInfoList = res.data;
                    this.$vux.loading.hide();
                    this.loading = false;
                }).catch(err=>{
                    console.log(err)
                    this.$vux.loading.hide();
                    this.loading = false;
                });
        },
        goToDetailPage(item){
            this.$router.push({name:'ProjectIndex',
                query: item
            });
        }
    },
    beforeMount(){
        this.title = this.$route.params.name;
        this.getProjInfoData();
    },
    components:{
        HeaderBar, BodyContent, Divider,
    }
}
</script>
<style>
    .projInfoBox .mint-cell-wrapper{
        text-align: left;
        /* padding: 0.8rem 0.5rem; */
    }
</style>


