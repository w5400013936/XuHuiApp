<template>
    <div class="fullScreen">
        <div>
            <SuperTable v-if="headData" :headList="headData" :bodyList="bodyData"></SuperTable>
        </div>
    </div>
</template>
<script>
import apiConfig from "../../../server/apiConfig";
import globalData from '../../../server/globalData';
import axios from "axios";
import { XTable } from 'vux';
import SuperTable from '../../../components/common/SuperTable.vue';
export default {
    data(){
        return{
            headData: null,
            bodyData: null,
            tableData:{
                thead:[
                    '指标','单位','投资拿地版','定位考核版','方案版','规划预测版','房产预测版','房产实测版'
                ],
                headerOrderList: [],
                tbody:[
                    {
                        lev:1,
                        ths:['总用地面积','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:2,
                        ths:['建设用地','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:2,
                        ths:['道路代征用地','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:2,
                        ths:['绿化代征用地','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:1,
                        ths:['建筑限高','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:1,
                        ths:['计容建筑面积','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:1,
                        ths:['容积率','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:1,
                        ths:['绿化率','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    },
                    {
                        lev:1,
                        ths:['建筑密度','m²','103,885.60','0.00','0.00','0.00','0.00','0.00']
                    }
                ],
                colsInfo:[
                    20,
                ]
            }
        }
    },
    methods:{
        fetchData(){
            const projId = JSON.parse(globalData.getStorage('curProjBaseInfo').data).projId;
            axios.get(apiConfig.companyServer + apiConfig.projectAreaManage
                + "?projId=" + projId
            ).then(res => {
                console.log(res);
                this.headData = res.data.headList;
                this.bodyData = res.data.indexList;
            }).catch(err=>{
                console.log(err);
            });
        }
    },
    beforeMount(){
        this.fetchData();
    },
    components:{
        XTable,SuperTable
    }
}
</script>
<style>
    .p-table{
        background-color: #fff;
        font-size: 0.5rem;
    }
    .p-table .level1{
        text-align: left;
        background-color: #f1f1f1;
    }
    .p-table .level2{
        text-align: left;
        padding-left: 0.8rem;
        background-color: #f1f1f1;
    }
    .p-table .level3{
        text-align: left;
        padding-left: 1.6rem;
        background-color: #f1f1f1;
    }
</style>

