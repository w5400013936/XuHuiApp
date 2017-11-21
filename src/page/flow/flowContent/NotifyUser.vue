<template>
    <div class="fullScreen">
        <HeaderBar title="选择知会人员" :customLeft="true">
            <span slot="customLeft" @click="goBack">
                <i class="left-arrow"></i>
                <span class="back">返回</span>
            </span>
        </HeaderBar>
        <BodyContent>
            <div slot="content">
                <div class="comment">
                    <group title="填写知会意见：">
                        <x-textarea  :max="200" :show-counter="false" :height="200"></x-textarea>
                    </group>
                </div>
                <keep-alive>
                    <div class="mt1" v-if="users.length > 0">
                        <ul>
                            <li class="fl" v-for="(item,index) in users" :key="index">{{item.userName}}</li>
                        </ul>
                    </div>
                </keep-alive>
                
                <div class="mt2">
                    <x-button @click.native="selectUser" style="border-radius:99px;">
                        <i class="fa fa-plus"></i>
                        选择知会人员
                    </x-button>
                </div>
                <div class="fixedBottom">
                    <flexbox>
                        <flexbox-item>
                            <x-button type="warn" 
                             @click.native="submitNotify"
                             :disabled="users.length > 0?false:true">
                                确认知会
                            </x-button>
                        </flexbox-item>
                    </flexbox>
                </div>
            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import { Group,XTextarea,XButton,Flexbox,FlexboxItem  } from 'vux'
export default {
    data(){
        return{
            actType:13,
            users:[], // 知会人员
        }
    },
    methods:{
        selectUser(){
            this.$router.push({name:'SelectUser',query:{actType:this.actType,users:this.users}});
        },
        submitNotify(){
            
        },
        goBack(){
            this.$router.push({name:'Flow'});
        }
    },
    beforeMount(){
        console.log(this.$route.query.users)
        if(this.$route.query.users){
            this.users = this.$route.query.users;
        }
    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        XTextarea,
        XButton,
        Flexbox,
        FlexboxItem
    }
}
</script>
<style scoped>
    
    .mt1{
        margin-top: 1rem;
        padding: 0 1rem;
    }
    .mt2{
        margin-top: 2rem;
        padding: 0 3rem;
    }
    .fl{
        float: left;
        margin: 0 0.5rem 0.5rem 0;
        background-color: #D33E39;
        color: #fff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.8rem;
    }
</style>