<template>
    <div class="fullScreen">
        <HeaderBar title="修改密码" :showBackBtn="true"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content" class="fullScreen p-content">
                <group>
                    <x-input type="text" placeholder="请输入旧密码" v-model="oldPwd" :required="true"></x-input>
                    <x-input type="text" placeholder="请输入新密码" v-model="newPwd" :required="true"></x-input>
                </group>
                <div class="mt1">
                    <x-button type="warn" @click.native="changeUserPwd" :disabled="oldPwd=='' || newPwd==''">提交</x-button>
                </div>
            </div>
        </BodyContent>
    </div>
    
</template>
<script>
import HeaderBar from '@/components/header/Header';
import BodyContent from "@/components/content/BodyContent";
import apiConfig from '../../server/apiConfig';
import axios from 'axios';
import globalData from '../../server/globalData';
import { Group,XInput,XButton } from 'vux'
export default {
    data(){
        return{
            oldPwd:'',
            newPwd:'',
        }
    },
    methods:{
        changeUserPwd(){
            let param = new URLSearchParams();
            param.append("oldPwd", this.oldPwd);
            param.append("newPwd", this.newPwd);
            param.append("userId", globalData.userId);
            axios.post(apiConfig.companyServer + apiConfig.changeUserPwdData,param)
                .then(res => {
                    console.log(res);
                    this.$vux.toast.show({
                        text: "操作成功"
                    });
                    this.$router.push({ name: "Login" });
                }).catch(err => {
                    console.log(err);
                });
        }
    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        XInput,
        XButton,
    }
}
</script>
<style scoped>
    .mt1{
        margin-top: 1rem;
        padding: 0.5rem;
    }
    .p-content{
        background-color:#fff;
        padding-top:1rem;
    }
</style>

