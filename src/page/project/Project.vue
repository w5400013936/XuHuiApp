<template>
    <div class='fullScreen'>
        <HeaderBar title="项目"></HeaderBar>
        <BodyContent :showBottomPadding="false">
            <div slot="content">
                <div v-if="!loading">
                    <div v-if="projList.length > 0">
                        <Search v-model="searchKey" top="3rem"></Search>
                        <div class="proj-box" v-for="(item,index) in projList" :key="index">
                            <div class="box-title">{{item.name}}</div>
                            <mt-cell v-for="(proj,i) in item.engList" :key="i"
                                :title="proj.name" is-link
                                :to="{ name: 'ProjectList', params: { name:proj.name,engId: proj.engId }}">
                            </mt-cell>
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
      projList: [],
      loading: true,
      searchKey:'',
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
          this.projList = res.data;
          this.$vux.loading.hide();
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.$vux.loading.hide();
          this.loading = false;
        });
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
  /* margin-bottom: 0.5rem; */
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
