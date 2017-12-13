<template>
    <div class='fullScreen'>
        <HeaderBar title="项目"></HeaderBar>
        <BodyContent :showBottomPadding="true">
            <div slot="content">
                <div v-if="!loading">
                    <Search v-model="searchKey"
                      top="2.9rem"
                      :style="{position:'fixed',zIndex:'1'}"
                      @on-change="searchProj">
                    </Search>
                    <div v-if="projList.length > 0">
                        <div :style="{'padding-top':'2.78rem'}">
                            <div class="proj-box" v-for="(item,index) in projList" :key="index">
                                <div class="box-title">{{item.name}}</div>
                                <mt-cell v-for="(proj,i) in item.engList" :key="i"
                                    :title="proj.name" is-link
                                    :to="{ name: 'ProjectList', params: { name:proj.name,engId: proj.engId }}">
                                </mt-cell>
                            </div>
                        </div>
                    </div>
                    <div v-else class="p-no-data-panel">
                        <divider>暂无数据</divider>
                    </div>
                </div>
            </div>
        </BodyContent>
    </div>
</template>

<script>

import HeaderBar from "@/components/header/Header";
import BodyContent from "@/components/content/BodyContent";
import apiConfig from "../../server/apiConfig";
import globalData from '../../server/globalData';
import axios from "axios";

import { Search,Divider } from 'vux'
export default {
  data() {
    return {
      tabSelected:2,
      projList: [], // 当前项目列表数据
      allProjList:null, // 完整项目列表数据,数据格式为JSON字符串
      loading: true,
      searchKey:'',
      // searchBarFocus:false,
    };
  },
  methods: {
    getProjData() {
      this.$vux.loading.show({
        text: "加载中"
      });
      axios
        .get(apiConfig.companyServer + apiConfig.projectData.pageUrl)
        .then(res => {
          // console.log(res);
          this.allProjList = JSON.stringify(res.data);
          this.projList = JSON.parse(this.allProjList);
          this.$vux.loading.hide();
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.$vux.loading.hide();
          this.loading = false;
        });
    },
    searchProj(){
      var self = this;
      if(self.searchKey.trim() == ''){
        self.projList = JSON.parse(self.allProjList);
      }
      else{
        self.projList = JSON.parse(self.allProjList).filter(i=>{
          i.engList = i.engList.filter(j=>{
            if(j.name.indexOf(self.searchKey.trim()) > -1){
              return j;
            }
          })
          if(i.engList.length > 0){
            return i;
          }
        })
      }
    }
  },
  beforeMount() {
    this.getProjData();
    globalData.tabSelected = this.tabSelected;
  },
  components: {
      HeaderBar,
      BodyContent,
      Search,
      Divider,
  }
};
</script>

<style>
.search-box .mint-search {
  height: 100%;
}
.search-box .mint-searchbar {
  z-index: 0;
}
.proj-box .box-title {
  text-align: left;
  padding: 0.5rem;
}
.proj-box .mint-cell-wrapper {
  text-align: left;
  padding-left: 1rem;
  background-image: none;
}
</style>
