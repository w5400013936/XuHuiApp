<template>
    <BodyContent :showBottomPadding="true">
        <div class="container" slot="content">
            <!-- 首页banner -->
            <swiper loop auto :aspect-ratio="350/800">
                <swiper-item v-for="(item,index) in homeBannerAry" :key="index">
                    <img :src="item.path" alt="#" width="100%">
                </swiper-item>
            </swiper>
            <Cell class="index-title" is-link title="新人风采" :link="{name:'Rookies',params:{name:'新人风采'}}"></Cell>
            <ul class="flexbox p-employeeShowList">
                <li
                  v-for="(item,index) in filterEmp"
                  :key="index"
                >
                    <img :src="item.path" alt="#" :onerror="setThumbpath(item,index)" width="100" style="height:100px;width: 100px;">
                    <span>{{item.name}}</span>
                </li>
            </ul>
            <Cell class="index-title" is-link title="新闻快讯" :link="{name:'News',params:{name:'新闻快讯'}}"></Cell>
            <panel :list="newsList" :type="type" @on-img-error="onImgError"></panel>
            <Cell class="index-title" title="公司体系"></Cell>
            <grid :cols="3" class="p-company-sys-content">
                <grid-item v-for="(item,index) in companySys" :key="index" 
                 :label="item.name" class="p-company-sys-item"
                 :link="item.link?item.link:''">
                    <i slot="icon" class="fa p-company-sys-icon" :class="[item.icon,item.isActive?'p-icon-active':'']"></i>
                    <span class="p-company-sys-eName">{{item.eName}}</span>
                </grid-item>
            </grid>
        </div>
    </BodyContent>
</template>

<script>
import { Swiper,SwiperItem,Flexbox, FlexboxItem,Panel,Cell, Grid, GridItem, GroupTitle  } from 'vux'
import BodyContent from "@/components/content/BodyContent";
import apiConfig from '../../../server/apiConfig';
import defaultAvatar from '../../../assets/images/avatar/errorAvatar';
import axios from 'axios';
export default {
    data(){
        return {
            homeBannerAry: [], // 首页轮播图
            appNewsList: [], // 首页新闻列表
            appEmpList: [], // 首页新人展示
            loading: false, // 是否处于加载中
            defaultNewsImg: 'this.src="' + require('../../../assets/images/avatar/BatMan.png') + '"',
            type: '1',
            newsList: [],
            companySys:[
                { name: '项目管理', eName: 'PROJECT', icon: 'fa-list-ul', isActive: false },
                { name: '制度流程体系', eName: 'SYSTEM', icon: 'fa-file-text-o', isActive: false },
                { name: '专业标准体系', eName: 'PROFESSION', icon: 'fa-star-o', isActive: false },
                { name: '产品线体系', eName: 'PRODUCT', icon: 'fa-cogs', isActive: false },
                { name: '产品成本体系', eName: 'COST', icon: 'fa-database', isActive: false },
                { name: '人才管理体系', eName: 'TALENT', icon: 'fa-users', isActive: false },
                { name: '供应商管理', eName: 'SUPPLIER', icon: 'fa-link', isActive: true, link:{name:'Suppliers'} },
                { name: '设计论剑', eName: 'DESIGN', icon: 'fa-folder-o', isActive: false },
                { name: '地区风采', eName: 'STYLE', icon: 'fa-pencil-square-o', isActive: false }
            ]
        }
    },
    components:{
        Swiper, SwiperItem,
        Flexbox, FlexboxItem,
        Panel, Cell, Grid, GridItem, GroupTitle,
        BodyContent,
    },
    computed: {
        filterEmp: function () {
            return this.appEmpList.filter((item,index) => {
                return index <= 2;
            });
        }
    },
    methods:{
        onImgError:function(){},
        fetchData: function(){
            this.$vux.loading.show({
                text: '加载中'
            });
            this.loading = true;
            axios.get(apiConfig.companyServer+apiConfig.homeIndexData).then( res => {
                this.homeBannerAry = res.data.appPicList;
                this.appEmpList = res.data.appEmpList;

                res.data.appNewsList.forEach((item,index) => {
                    this.newsList.push({
                        src: 'http://somedomain.somdomain/x.jpg',
                        fallbackSrc: require('../../../assets/images/projLogo/default.png'), // 默认图片
                        title: item.name,
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    })
                });
                this.$vux.loading.hide(); // 关闭遮罩
            }).catch(error => {
                this.$vux.loading.hide(); // 关闭遮罩
                console.log(error);
            });
        },
        setThumbpath:function(item,index){
            return item.path?item.path:defaultAvatar['avatar'+(index%10!==0?index%10:8)];
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
    .p-employeeShowList{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0.5rem 0.5rem 0.5rem;
        background-color: #fff;
    }
    .p-employeeShowList li{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex-direction: column;
    }
    .index-newsItem{
        display: flex;
        justify-content: flex-start;
        padding: 1rem;
    }
    .index-newsItem>img{
        width: 5rem;
        height: 5rem;
    }
    .container .weui-cell {
        padding: 0px 15px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .container .weui-cell:before{
        border-top: none;
    }
</style>

