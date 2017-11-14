/**
* Created by Administrator on 2017/11/13.
*/
<template>
    <div class="fullScreen">
        <headerbar title="登录" :showBackBtn="false"></headerbar>
        <bodyContent class="container" :showBottomPadding="false">
            <div slot='content'>
                <!-- logo -->
                <div class="logo">
                  <img src="../assets/images/projLogo/xh.jpg" width="50%"/>
                </div>
                <!-- userName & Password -->
                <div></div>
                <!-- submit -->
                <x-button type="warn" action-type="button">submit</x-button>
            </div>
        </bodyContent>
    </div>
</template>

<script>
    import bodyContent from '@/components/content/bodyContent';
    import headerbar from '@/components/header/header';
    import { XButton,ViewBox } from 'vux';
    export default{
        components: {
            XButton, headerbar, bodyContent,ViewBox
        },
        //状态值
        data(){
            return {}
        }
    }
</script>
<style>
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
    }
    #vux_view_box_body{
        background-color: #FFFFFF;
    }
</style>
