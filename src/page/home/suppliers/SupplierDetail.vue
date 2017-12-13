<template>
    <div class="fullScreen">
        <HeaderBar :title="supplierName" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content" v-if="!loading" class="fullScreen" style="overflow:scroll;">
                <group v-if="bases.baseList.length > 0">
                    <div class="p-title">{{bases.name}}</div>
                    <cell value-align="left"
                     v-for="(item,index) in bases.baseList" 
                     :key="index">
                        <div slot="title" class="p-label">{{item.key}}</div>
                        <span class="p-value dib">{{item.value}}</span>
                    </cell>
                </group>
                <group v-if="cooperation.cooperationList.length > 0">
                    <div class="p-title">{{cooperation.name}}</div>
                    <cell value-align="left"
                     v-for="(item,index) in cooperation.cooperationList" 
                     :key="index">
                        <div slot="title" class="p-label">{{item.key}}</div>
                        <span class="p-value dib">{{item.value}}</span>
                    </cell>
                </group>
                <group v-if="communication.communicationList.length > 0">
                    <div class="p-title">{{communication.name}}</div>
                    <cell value-align="left"
                     v-for="(item,index) in communication.communicationList" 
                     :key="index">
                        <div slot="title" class="p-label">{{item.key}}</div>
                        <span v-if="(typeof item.value) == 'string'" class="p-value dib">{{item.value}}</span>
                        <span v-else class="dib">
                            <div v-for="(i,k) in item.value" :key="k">
                                <div slot="title" class="p-subLabel dib">{{i.key}}</div>
                                <span class="p-subValue dib">{{i.value}}</span>
                            </div>
                        </span>
                    </cell>
                </group>
                <group v-if="appFile.appFileList.length > 0">
                    <div class="p-title">{{appFile.name}}</div>
                    <cell-box>
                        <div class="w100p">
                            <ul class="flexbox p-imgList">
                                <li v-for="(item,index) in appFile.appFileList" :key="index">
                                    <img @click="show(index)" class="p-previewer-img" :src="item.thumbPicPath" :alt="item.name" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                                </li>
                            </ul>
                            <div v-transfer-dom>
                                <previewer :list="getPreview(appFile.appFileList)" ref="previewer" :options="options"></previewer>
                            </div>
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
import { Group,Cell,CellBox,Previewer,TransferDom } from 'vux';
export default {
    directives: {
        TransferDom
    },
    data(){
        return{
            loading:false,
            bases:{},
            cooperation:{},
            communication:{},
            appFile:{},
            supplierName:null,
            supplierId:'',
            defaultAvatar: 'this.src="' + require('../../../assets/images/projLogo/default.png') + '"',
            options: {
                getThumbBoundsFn (index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.p-previewer-img')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        }
    },
    methods:{
        getPreview:function(list){
            const previewList = JSON.parse(JSON.stringify(list).replace(/thumbPicPath/g,'src').replace(/_m./g,'_hmsl.'));
            return previewList;
        },
        show:function(index) {
            this.$refs.previewer.show(index)
        },
        getSupplierDetailData(){
            this.loading = true;
            this.$vux.loading.show({
                text: '加载中'
            });
            axios.get(
                apiConfig.companyServer + apiConfig.SupplierDetail
                + '?supplierId=' + this.supplierId
            ).then(res=>{
                console.log(res);
                this.bases = res.data.information.bases;
                this.cooperation = res.data.information.cooperation;
                this.communication = res.data.information.communication;
                this.appFile = res.data.information.appFile;
                this.loading = false;
                this.$vux.loading.hide();
            }).catch(err=>{
                console.log(err);
                this.loading = false;
                this.$vux.loading.hide();
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
        Previewer,
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
.p-subLabel{
    color: #999999 !important;
    width: 2rem;
    font-size: 1rem;
    vertical-align: top;
}
.p-subValue{
    padding-left: 1rem;
    color: #000;
    font-size: 1rem;
    width: 13rem;
    word-wrap: break-word;
}
.dib{
    display: inline-block;
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
