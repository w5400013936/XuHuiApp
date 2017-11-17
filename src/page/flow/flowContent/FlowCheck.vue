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
                        <flexbox-item>
                            <x-button type="warn" @click.native="signIn">会签确认</x-button>
                        </flexbox-item>
                        <flexbox-item>
                            <x-button type="warn">加签</x-button>
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
            actMenu:{
                menu1: '回退',
                menu2: '当前会签',
                menu3: '终止',
                menu4: '转办',
                menu5: '知会',
            }
        }
    },
    methods:{
        showMore(){
            this.popupShow = true;
        },
        operation(key,item){
            console.log(key);
            console.log(item);
        },
        signIn(){
            this.$vux.confirm.show({
                title:'请确认审批操作',
                content:'您选择的审批操作为“会签确认”',
            })
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
