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
                    <div class="mt1" v-if="userName.length > 0">
                        <ul>
                            <li class="fl" v-for="(item,index) in userName" :key="index">{{item}}</li>
                        </ul>
                    </div>
                </keep-alive>
                
                <div class="mt2">
                    <x-button @click.native="selectUser" style="border-radius:99px;">选择知会人员</x-button>
                </div>
                <div class="fixedBottom">
                    <flexbox>
                        <flexbox-item>
                            <x-button type="warn" @click.native="submitNotify">确认知会</x-button>
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
            userName:[], // 知会人员
        }
    },
    methods:{
        selectUser(){
            this.$router.push({name:'SelectUser',query:{actType:this.actType,userName:this.userName}});
        },
        submitNotify(){
            
        },
        goBack(){
            this.$router.push({name:'Flow'});
        }
    },
    beforeMount(){
        if(this.$route.query.userName){
            this.userName = this.$route.query.userName;
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