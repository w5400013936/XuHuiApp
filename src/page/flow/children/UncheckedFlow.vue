<template>
    <div class="container">
        <mt-cell class="flow-cell" title="整盘概念及示范区策划会" label="上海测试地块管理员测试项目" is-link>
            04/21
        </mt-cell>
        <mt-cell class="flow-cell" title="整盘概念及示范区策划会" label="上海测试地块管理员测试项目" is-link>
            04/21
        </mt-cell><mt-cell class="flow-cell" title="整盘概念及示范区策划会" label="上海测试地块管理员测试项目" is-link>
            04/21
        </mt-cell><mt-cell class="flow-cell" title="整盘概念及示范区策划会" label="上海测试地块管理员测试项目" is-link>
            04/21
        </mt-cell><mt-cell class="flow-cell" title="整盘概念及示范区策划会" label="上海测试地块管理员测试项目" is-link>
            04/21
        </mt-cell>
    </div>
</template>

<script>
import apiConfig from '../../../server/apiConfig';
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    methods:{
        getFlowData(){
            // 获取数据
        }
    },
    beforeMount(){
        // this.getFlowData();
    }
}
</script>

<style>
    .flow-cell .mint-cell-wrapper{
        height: 5rem;
    }
    .flow-cell .mint-cell-title{
        text-align: left;
    }
</style>
