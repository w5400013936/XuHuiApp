<template>
  <div>
      <HeaderBar title="选择加签人员" :showBackBtn="true" ></HeaderBar>
      <BodyContent :showBottomPadding="true">
          <div slot="content">
              <SelectUserItemComponent
                  v-for="(item,index) in groupList" :itemVisible="!!item.itemVisible"
                  :key="index" :titleName="item.name" :userList="item.userList"
                  @listenToChildEvent="showAryFromChild"
              ></SelectUserItemComponent>
          </div>
      </BodyContent>
      <div class="fixedBottom">
          <x-button type="warn" @click.native="makeSureFlowSign" :disabled="!!!selectedList.length">确定人选({{selectedList.length}})</x-button>
      </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/header/Header'
  import BodyContent from "@/components/content/BodyContent";
  import axios from 'axios';
  import SelectUserItemComponent from './SelectUserItemComponent.vue';
  import { XButton } from 'vux';

  import apiConfig from '../../../server/apiConfig';
  export default {
      data(){
          return {
              groupList: [],
              selectedList: [], //已选人员总列表
          }
      },
      methods:{
          /**
           * 数据格式：{flowPosId: '21',name:'集团-成本部负责人',order:'',orgLevel:"1",userList:[],itemVisible: true,}
           *  flowPosId:　
           *  userList: 已选成员
           */
          fetchGroupItem:function(){
              axios.get(apiConfig.companyServer+apiConfig.selectUserGroup
                  + '?flowInstanceId=' + this.$route.query.flowInstanceId
              ).then(res => {
                  this.groupList = res.data;
                  this.groupList.forEach((v) => {
                      v.itemVisible = true;
                  });
              }).catch(err => {
                  console.log(err);
              });
          },
          showAryFromChild:function(data){
              console.log(data);
              this.selectedList.push(data)
          },
          makeSureFlowSign:function(){
              console.log('获取的人员列表')
              console.log(this.selectedList);
          },
      },
      components:{
          HeaderBar, BodyContent, SelectUserItemComponent, XButton,
      },
      beforeMount(){
          this.fetchGroupItem();
      },
  }
</script>
