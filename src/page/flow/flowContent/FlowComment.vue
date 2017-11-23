<template>
    <div>
        <popup height="100%" v-model="commentVisible">
            <x-header :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
                {{title}}
                <a slot="right" href="javascript:;" @click="toggleDialog"><i class="fa fa-close"></i></a>
            </x-header>
            <BodyContent :showBottomPadding="false">
                <div slot="content">
                    <div class="comment">
                        <group :title="subTitle">
                            <x-textarea v-model="comment" :max="200" :show-counter="false" :height="200"></x-textarea>
                        </group>
                    </div>
                    <div class="fixedBottom">
                        <flexbox>
                            <flexbox-item>
                                <x-button type="warn" @click.native="submitTurn">确认</x-button>
                            </flexbox-item>
                        </flexbox>
                    </div>
                </div>
            </BodyContent>
        </popup>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Popup,XHeader,Group,XTextarea,XButton,Flexbox,FlexboxItem  } from 'vux'
export default {
    data(){
        return{
            commentVisible:true,
            title:null,
            subTitle:null,
            userName:null,
            flowId: null,   // 流程Id
            flowInstanceId: null,   // 流程实例Id
            comment:'',
            grantUserId: null,  // 当前用户
        }
    },
    props:{ 
        givenUser:{}, //// 转办对象
        actType:{   // 操作类型
            type:Number,    
        },     
    },
    methods:{
        toggleDialog(){     // 显示当前组件是否可见
            this.commentVisible = !this.commentVisible;
            this.$emit('listenToToggleComment',this.commentVisible);
        },
        submitTurn(){
            let param = new URLSearchParams();
            param.append("flowId", this.flowId);
            param.append("givenUserId", this.givenUser.userId);
            param.append("grantUserId", this.grantUserId);
            param.append("remark", this.comment);
            axios.post(apiConfig.companyServer + apiConfig.TurnOnToUser + this.flowInstanceId,param)
                .then(res=>{
                    console.log(res);
                    this.$vux.toast.show({
                        text: '操作成功'
                    })
                    this.$router.push({name:'Flow'});
                }).catch(err=>{
                    console.log(err)
                })
        }
    },
    beforeMount(){
        console.log(this.givenUser)
        if(this.actType == 5){
            this.title = '填写转办意见';
            this.subTitle = '转办给'+this.givenUser.userName+'：';
            this.userName = this.$route.query.userName;
            this.flowId = globalData.flow.flowId;
            this.flowInstanceId = globalData.flow.flowInstanceId;
            this.grantUserId = globalData.user.userId;
            
        }
    },
    components:{
        HeaderBar,
        Popup,
        XHeader,
        BodyContent,
        Group,
        XTextarea,
        XButton,
        Flexbox,
        FlexboxItem,
    }
}
</script>
