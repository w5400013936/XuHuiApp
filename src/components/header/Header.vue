<template>
    <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="{showBack: showBackBtn}"
    >
      {{title}}
    </x-header>
</template>
<script>
  import { XHeader } from 'vux';
  export default {
    props:{
        showBackBtn:{
            //type: Boolean,
            default: false,
        },
        title:{
            //type: String,
            default: '标题',
        }
    },
    data(){
        return{

        }
    },
    components:{
        XHeader
    }
}
</script>
<style>
    .header{
        height: 3.8rem;
        font-size: 1.2rem;
    }
    .mint-header-title{
        color: #fff;
    }
</style>
