<template>
    <div>
        <headerbar :title="projInfoList.name"></headerbar>
        <div class="container projInfoBox">
            <div v-if="projInfoList.projList.length > 0">
                <mt-cell v-for="(item,index) in projInfoList.projList" 
                    :key="index" :title="item.name">
                    <img slot="icon" :src="item.thumbPic"
                        :onerror="defaultAvatar"
                        width="35" height="35">
                </mt-cell>
            </div>
            <div v-else>暂无数据</div>
        </div>
    </div>
</template>
<script>
import headerbar from '@/components/header/header'
import apiConfig from '../../server/apiConfig'
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            projInfoList:[],
            engId:null,
            defaultAvatar: 'this.src="' + require('../../assets/images/avatar/BatMan.png') + '"',
        }
    },
    methods:{
        getProjInfoData(){
            this.engId = this.$route.params.engId;
            axios.get(apiConfig.companyServer+apiConfig.projectInfoPageUrl+'?engId='+this.engId)
                .then(res=>{
                    // console.log(res);
                    this.projInfoList = res.data;
                    Indicator.close();
                }).catch(err=>{
                    console.log(err)
                    Indicator.close();
                })
        }
    },
    beforeMount(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        this.getProjInfoData();
    },
    components:{
        headerbar,
    }
}
</script>
<style>
    .projInfoBox .mint-cell-wrapper{
        text-align: left;
        /* padding: 0.8rem 0.5rem; */
    }
</style>


