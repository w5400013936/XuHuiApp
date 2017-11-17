<template>
    <div>
        <HeaderBar title="审批中心" :showBackBtn="true"></HeaderBar>
        <BodyContent>
            <div slot="content">
                <div class="comment">
                    <group title="填写审批意见：">
                        <x-textarea  :max="200" :show-counter="false" :height="200"></x-textarea>
                    </group>
                </div>
                <div class="fixedBottom">
                    <flexbox>
                        <flexbox-item v-for="(item,index) in mainAct" :key="index">
                            <x-button type="warn" @click.native="operation(item.type)">{{item.name}}</x-button>
                        </flexbox-item>
                        <flexbox-item>
                            <x-button @click.native="showMore">更多</x-button>
                        </flexbox-item>
                    </flexbox>
                </div>
                <actionsheet v-model="popupShow" :menus="actMenu" @on-click-menu="operation"></actionsheet>

            </div>
        </BodyContent>
    </div>
</template>
<script>
import HeaderBar from '@/components/header/Header'
import BodyContent from "@/components/content/BodyContent"
import { Group,XTextarea,XButton,Flexbox,FlexboxItem,Popup,Actionsheet  } from 'vux'
export default {
    data(){
        return {
            popupShow:false,
            mainAct:null,
            moreAct:null,
            actMenu:{},
        }
    },
    methods:{
        showMore(){
            this.popupShow = true;
        },
        operation(type){
            console.log(type);  
            switch(type){
                case 2: // 通过
                break;
                case 3: // 驳回
                break;
                case 5: // 转办
                break;
                case 7: // 终止
                this.$vux.confirm.show({
                    title:'请确认审批操作',
                    content:'您选择的审批操作为“终止”',
                    onConfirm(){

                    },
                })
                break;
                case 10: // 当前会签
                break;
                case 11: // 加签
                break;
                case 12: // 回退
                break;
                case 13: // 只会
                break;
            }
        },
    },
    beforeMount(){
        this.mainAct = this.$route.query.actList.slice(0,2);
        this.moreAct = this.$route.query.actList.slice(2);
        this.moreAct.forEach(function(item,index) {
            this.actMenu[item.type] = item.name;
        }, this);
    },
    components:{
        HeaderBar,
        BodyContent,
        Group,
        XTextarea,
        XButton,
        Flexbox,
        FlexboxItem,
        Popup,
        Actionsheet
    }
}
</script>
<style>
    .popup {
        padding: 0 0 1.2rem 0;
        width: 60%;
        margin: 0 auto;
    }
</style>
