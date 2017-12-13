<template>
    <div class="fullScreen">
        <!-- <Search v-model="searchKey" top="5.6rem"></Search> -->
        <div class="p-tips">
            <span>注：</span>
            <span><i class="fa fa-circle" style="color:#B4B4B4;"></i>未开始</span>
            <span><i class="fa fa-circle" style="color:#F7C124;"></i>进行中</span>
            <span><i class="fa fa-circle" style="color:#6ABBE4;"></i>已完成</span>
            <span><i class="fa fa-circle" style="color:#FE5D31;"></i>已延迟</span>
            <span><i class="fa fa-check-circle" style="color:#FE5D31;"></i>超期完成</span>
        </div>
        <div>
            <!--<div class="p-leafname">投资阶段</div>-->
            <group v-for="(item,index) in taskList" :key="index">
                <cell :title="item.name"></cell>
                <cell-box>
                    <div>
                        <div class="p-name">节点等级</div>
                        <div>{{item.level}}</div>
                    </div>
                    <div>
                        <div class="p-name">计划开始</div>
                        <div>{{item.curStartDate}}</div>
                    </div>
                    <div>
                        <div class="p-name">计划结束</div>
                        <div>{{item.curEndDate}}</div>
                    </div>
                    <div>
                        <div class="p-name">实际结束</div>
                        <div>{{item.factEndDate}}</div>
                    </div>
                </cell-box>
                <cell-box>
                    <div>
                        <div class="p-name">工期</div>
                        <div>{{item.period}}</div>
                    </div>
                    <div>
                        <div class="p-name">负责人</div>
                        <div>{{item.taskManagers}}</div>
                    </div>
                    <div>
                        <div class="p-name">专业</div>
                        <div>{{item.prof}}</div>
                    </div>
                    <div>
                        <div class="p-name">状态</div>
                        <div><i class="fa" :class="getState(item)" style="font-size:1rem;"></i></div>
                    </div>
                </cell-box>
            </group>
        </div>
    </div>
</template>
<script>
import apiConfig from "../../../server/apiConfig";
import globalData from '../../../server/globalData';
import axios from "axios";
import { Search,Group,Cell,CellBox,Icon } from 'vux'
export default {
    data(){
        return{
            searchKey:'',
            taskList: [],
        }
    },
    methods:{
        fetchData:function(){
            const projId = JSON.parse(globalData.getStorage('curProjBaseInfo').data).projId;
            axios.get(apiConfig.companyServer + apiConfig.projectPlanList
                +'?projId='+projId
            ).then(res => {
                if(res.status == 200){
                    this.taskList = res.data.taskList;
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        getState:function(item){
            let stateClass = '';
            switch(item.status){
              case '超期完成':
                stateClass = 'fa-check-circle p-state-cqwc';
                break;
              case '未开始':
                stateClass = 'fa-circle p-state-wks';
                break;
              case '进行中':
                stateClass = 'fa-circle p-state-jxz';
                break;
              case '已完成':
                stateClass = 'fa-circle p-state-ywc';
                break;
              case '已延迟':
                stateClass = 'fa-circle p-state-yyc';
                break;
              default:
                stateClass = 'fa-circle';
            }
            return stateClass;
        }
    },
    components:{
        Search,
        Group,
        Cell,
        CellBox,
        Icon,
    },
    beforeMount(){
        this.fetchData();
    }
}
</script>
<style scoped>
.p-tips{
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
}
.p-tips span{
    margin-left: 0.2rem;
}
.p-leafname{
    width: 100%;
    font-weight: bold;
    padding: 0.5rem;
}
.vux-cell-box{
    font-size: 0.8rem;
    text-align: center;
    justify-content: space-between;
}
.vux-cell-box>div{
    width: 25%;
}
.p-name{
 color: #999999;
}
</style>
