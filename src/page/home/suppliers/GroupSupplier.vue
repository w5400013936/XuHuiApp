<template>
    <div class="fullScreen" style="overflow:hidden;">
        <Search v-model="searchKey"
            placeholder="搜索供应商名称"
            top="5.6rem"
            :style="{position:'fixed',zIndex:'1'}"
            @on-submit="searchSupplier">
        </Search>
        <div class="fixedThead">
            <div class="t1">供方名称</div>
            <div class="t2">服务专业</div>
            <div class="t3">状态</div>
        </div>
        <div class="fullScreen" style="overflow:scroll;padding-bottom:8.5rem;">
            <mt-loadmore class="fullScreen"
                :top-method="loadTop"
                :autoFill="false"
                ref="loadmore">
            <x-table class="bgf" :cell-bordered="false">
                <!-- <thead>
                    <tr>
                        <th>供方名称</th>
                        <th>服务专业</th>
                        <th>状态</th>
                    </tr>
                </thead> -->
                <tbody class="p-tbody">
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海日清建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">汇张思建筑设计咨询（上海）有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                    <tr>
                        <td class="t1">上海天华建筑设计有限公司</td>
                        <td class="t2">建筑</td>
                        <td class="t3">正式</td>
                    </tr>
                </tbody>
            </x-table>
            </mt-loadmore>
        </div>
        
    </div>
</template>
<script>
import { Search,XTable } from 'vux'
export default {
    data(){
        return{
            searchKey:'',
        }
    },
    methods:{
        searchSupplier(){

        },
        loadTop(){

        }
    },
    components:{
        Search,
        XTable,
    }
}
</script>
<style scoped>
.vux-table th{
    font-weight: bold;
    color: #474747;
}
.bgf{
    background-color: #fff;
}
.vux-table td{
    line-height: 1.2rem;
    padding: 0.7rem 0.5rem;
    color: #4b4b4b;
}
.p-tbody{
    font-size: 0.9rem;
}
.fixedThead{
    width: 100%;
    margin-top: 2.9rem;
    background-color: #fff;
    border-bottom: 1px solid #c1c1c1;
    display: flex;
    padding: 0.7rem 0;
    color: #474747;
    text-align: center;
}
.fixedThead div{
    font-weight: bold !important;
}
.t1{
    width: 46%;
}
.t2{
    width: 27%;
}
.t3{
    width: 27%;
}
</style>
