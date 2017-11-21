<template>
    <div>
        <HeaderBar title="人员选择" :showBackBtn="true" ></HeaderBar>
        <BodyContent>
            <div slot="content">
                <search
                    v-model="keyWord" 
                    placeholder="输入搜索人员姓名" 
                    top="2.9rem" 
                    :auto-scroll-to-top="true">
                    <x-button slot="right" type="warn" :mini="true" @click.native="getUser">搜索</x-button>
                </search>
                <div v-if="userList.length > 0" style="padding-top: 1.5rem;background-color: #fff;">
                    <group>
                        <cell v-for="(item,index) in userList" 
                            :key="index" :title="item.userName"
                            @click.native="submitUser(item)">
                        </cell>
                    </group>
                </div>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Search,XButton,Group,Cell } from 'vux'
export default {
    data(){
        return{
            keyWord:null,
            actType:null,
            userList:[],
            users:[],
        }
    },
    methods:{
        getUser(){
            this.$vux.loading.show({
                text: '加载中'
            });
            axios.get(apiConfig.companyServer + apiConfig.searchSysUser + '?keyWord=' + this.keyWord)
                .then(res=>{
                    console.log(res);
                    this.userList = res.data;
                    this.$vux.loading.hide();
                }).catch(err=>{
                    console.log(err);
                    this.$vux.loading.hide();
                })
        },
        submitUser(user){
            switch(this.actType){
                case 5:     // 转办
                    this.$router.push({name:'FlowComment',query:{
                        actType:this.actType,
                        userName:user.userName,
                        userId: user.userId,
                    }});
                    break;
                case 13:    // 知会
                    if(this.users > 0){
                        var count = 0;
                        this.users.forEach(item=>{
                            if(item.userId != user.userId){
                                count++;
                                if(count == this.users.length){
                                    this.users.push(user);
                                }
                            }
                        })
                    }else{
                        this.users.push(user);
                    }
                    this.$router.push({name:'NotifyUser',query:{users:this.users}});
                    break;
            }
                    
        }
    },
    beforeMount(){
        this.actType = this.$route.query.actType;
        if(this.actType == 13){
            if(this.$route.query.userName && this.$route.query.userName.length > 0){
                this.users = this.$route.query.users;
            }
        }
        
    },
    components:{
        HeaderBar,
        BodyContent,
        Search,
        XButton,
        Cell,
        Group
    }
}
</script>
<style>
    .vux-search-fixed{
        position: static;

    }
</style>

