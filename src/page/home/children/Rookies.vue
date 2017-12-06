<template>
    <BodyContent :showBottomPadding="false">
        <div class="container" slot="content">
            <div class="rookies-box" v-for="(item,index) in brideList" :key="index">
                <img class="rookies-img" :src="item.path" :onerror="setThumbpath(item,index)">
                <div class="rookies-info">
                    <span class="rookies-name">{{item.name}}</span>
                    <p class="rookies-data">入职日期：{{item.entryDate}}</p>
                    <p class="rookies-position">{{item.remark}}</p>
                </div>
            </div>
        </div>
    </BodyContent>
</template>

<script>
import BodyContent from "@/components/content/BodyContent"
import apiConfig from '../../../server/apiConfig';
import axios from 'axios';
import defaultAvatar from '../../../assets/images/avatar/errorAvatar';
export default {
    data(){
        return{
            brideList:[],
        }
    },
    methods:{
        /**
         * 获取新人数据
         */
        getBrideData(){
            this.$vux.loading.show({
                text: '加载中'
            });
            axios.get(apiConfig.companyServer+apiConfig.brideList)
                .then(res=>{
                    this.brideList = res.data.appEmpList;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err);
                    this.$vux.loading.hide();
                });
        },
      /**
       * 设置默认图片
       * @param item
       * @param index
       * @returns {*}
       */
        setThumbpath:function(item,index){
            return item.path?item.path:defaultAvatar['avatar'+(index%10!==0?index%10:8)];
        }
    },
    beforeMount(){
        this.getBrideData();
    },
    components:{
        BodyContent,
    }
}
</script>

<style>
    .rookies-box{
        width: 100%;
        background-color: #fff;
        display: flex;
        padding: 1rem 0 1rem 0.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 5px 5px gray;
    }
    .rookies-img{
        width: 5rem;
        height: 5rem;
    }
    .rookies-info{
        text-align: left;
        padding-left: 0.8rem;
    }
    .rookies-name{
        vertical-align: middle;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    .rookies-data{
        font-size: 0.6rem;
        color: gray;
        padding-top: 0.5rem;
    }
    .rookies-position{
        font-size: 0.8rem;
        color: gray;
        padding-top: 0.5rem;
    }
</style>
