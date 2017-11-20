<template>
  <div>
      <HeaderBar title="选择加签人员" :showBackBtn="true" ></HeaderBar>
      <BodyContent>
          <div slot="content">
              <SelectUserItemComponent
                  v-for="(item,index) in groupList" :itemVisible="!!item.itemVisible"
                  :key="index" :titleName="item.name" :userList="item.userList"
              />
          </div>
      </BodyContent>
  </div>
</template>

<script>
  import HeaderBar from '@/components/header/Header'
  import BodyContent from "@/components/content/BodyContent";
  import axios from 'axios';
  import SelectUserItemComponent from './SelectUserItemComponent.vue';

  import apiConfig from '../../../server/apiConfig';
  export default {
      data(){
          return {
              groupList: [],
          }
      },
      methods:{
          fetchGroupItem(){
              axios.get(apiConfig.companyServer+apiConfig.selectUserGroup
                  +"?flowInstanceId="+this.$route.query.flowInstanceId
              ).then( res => {
                  this.groupList = res.data;
                  this.groupList.forEach((v,k) => {
                      v.itemVisible = true;
                  });
              }).catch(err => {
                  console.log(err);
              })
          }
      },
      components:{
          HeaderBar,
          BodyContent, SelectUserItemComponent,
      },
      beforeMount(){
          this.fetchGroupItem();
      },
  }
</script>
