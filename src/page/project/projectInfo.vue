<template>
    <div>
        <headerbar :title="projInfoList.name"></headerbar>
        <div class="container projInfoBox">
            <div v-if="!loading">
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
    </div>
</template>
<script>
import headerbar from '@/components/header/header'
import apiConfig from '../../server/apiConfig'
import axios from 'axios'
import { XHeader } from 'vux'
export default {
    data(){
        return{
            projInfoList:[],
            engId:null,
            loading:true,
            defaultAvatar: 'this.src="' + require('../../assets/images/avatar/BatMan.png') + '"',
        }
    },
    methods:{
        getProjInfoData(){
            this.$vux.loading.show({
                text: '加载中'
            })
            this.engId = this.$route.params.engId;
            axios.get(apiConfig.companyServer+apiConfig.projectInfoPageUrl+'?engId='+this.engId)
                .then(res=>{
                    // console.log(res);
                    this.projInfoList = res.data;
                    this.$vux.loading.hide();
                    this.loading = false;
                }).catch(err=>{
                    console.log(err)
                    this.$vux.loading.hide();
                    this.loading = false;
                })
        }
    },
    beforeMount(){
        this.getProjInfoData();
    },
    components:{
        headerbar,
        XHeader
    }
}
</script>
<style>
    .projInfoBox .mint-cell-wrapper{
        text-align: left;
        /* padding: 0.8rem 0.5rem; */
    }
</style>


