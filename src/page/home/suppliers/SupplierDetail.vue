<template>
    <div class="fullScreen">
        <HeaderBar :title="supplierName" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content" class="fullScreen" style="overflow:scroll;">
                <group>
                    <div class="p-title">基本信息</div>
                    <cell value-align="left">
                        <div slot="title" class="p-label">供应商名称</div>
                        <span class="p-value">上海日清建筑设计有限公司</span>
                    </cell>
                </group>
                <group>
                    <div class="p-title">效果图</div>
                    <cell-box>
                        <div class="w100p">
                            <ul class="flexbox p-imgList">
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
                    </cell-box>
                </group>
            </div>
        </BodyContent>
    </div>
</template>

<script>
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import apiConfig from '../../../server/apiConfig';
import axios from 'axios';
import globalData from '../../../server/globalData';
import { Group,Cell,CellBox } from 'vux';
export default {
    data(){
        return{
            supplierName:null,
            supplierId:'',
            defaultAvatar: 'this.src="' + require('../../../assets/images/projLogo/default.png') + '"',
        }
    },
    methods:{
        getSupplierDetailData(refresh){
            axios.get(
                apiConfig.companyServer + apiConfig.SupplierDetail
                + '?supplierId=' + this.supplierId
            ).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
    },
    beforeMount(){
        this.supplierName = this.$route.query.name;
        this.supplierId = this.$route.query.supplierId;
        this.getSupplierDetailData();
    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        Cell,
        CellBox,
    }
}
</script>

<style scoped>
.w100p{
    width: 100%;
}
.p-title{
    color: #474747;
}
.p-imgList{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 0.5rem 0;
    background-color: #fff;
}
.p-imgList li{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
}
</style>
