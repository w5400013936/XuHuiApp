<template>
    <mt-tabbar v-model="selected" :fixed="true">
        <mt-tab-item id="首页" href="#/Home">
            <i class="fa fa-home" slot="icon"></i>
            首页
        </mt-tab-item>
        <mt-tab-item id="审批中心" href="#/Flow">
            <i class="fa fa-file-text-o" slot="icon"></i>
            审批中心
        </mt-tab-item>
        <mt-tab-item id="项目" href="#/Project">
            <i class="fa fa-th" slot="icon"></i>
            项目
        </mt-tab-item>
        <mt-tab-item id="设置" href="#/Setting">
            <i class="fa fa-gear" slot="icon"></i>
            设置
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default{
      data(){
          return{
              selected:'首页'
          }
      },
      components: {
          Tabbar,
          TabbarItem,
      }
  }
</script>

<style>
    .mint-tab-item{
        color:gray;
    }
    .mint-tab-item-icon{
        font-size: 1.5rem;
    }
    .mint-tab-item.is-selected i{
        color: #26A2FF;
    }
</style>

