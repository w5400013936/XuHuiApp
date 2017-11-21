<template>
    <div class="fullScreen">
        <HeaderBar :title="title" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content">
                <div class="comment">
                    <group :title="'转办给'+userName+'：'">
                        <x-textarea v-model="comment" :max="200" :show-counter="false" :height="200"></x-textarea>
                    </group>
                </div>
                <div class="fixedBottom">
                    <flexbox>
                        <flexbox-item>
                            <x-button type="warn" @click.native="submitTurn">确认转办</x-button>
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
import apiConfig from '../../../server/apiConfig'
import axios from 'axios'
import globalData from '../../../server/globalData'
import { Group,XTextarea,XButton,Flexbox,FlexboxItem  } from 'vux'
export default {
    data(){
        return{
            actType:null,
            title:null,
            userName:null,
            flowId: null,   // 流程Id
            flowInstanceId: null,   // 流程实例Id
            comment:'',
            givenUserId: null,  // 当前用户
            grantUserId: null,  // 转办对象
        }
    },
    methods:{
        submitTurn(){
            let param = new URLSearchParams();
            param.append("flowId", this.flowId);
            param.append("givenUserId", this.givenUserId);
            param.append("grantUserId", this.grantUserId);
            param.append("remark", this.comment);
            axios.post(apiConfig.companyServer + '/Home/TurnOnToUser/' + this.flowInstanceId,param)
                .then(res=>{
                    console.log(res);
                    this.$vux.toast.show({
                        text: '操作成功'
                    })
                    // this.$router.push({name:'Flow'});
                }).catch(err=>{
                    console.log(err)
                })
        }
    },
    beforeMount(){
        this.actType = this.$route.query.actType;
        if(this.actType == 5){
            this.title = '填写转办意见';
            this.userName = this.$route.query.userName;
            this.flowId = globalData.flow.flowId;
            this.flowInstanceId = globalData.flow.flowInstanceId;
            this.givenUserId = this.$route.query.userId;
            this.grantUserId = globalData.user.userId;
            
        }
    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        XTextarea,
        XButton,
        Flexbox,
        FlexboxItem,
    }
}
</script>
