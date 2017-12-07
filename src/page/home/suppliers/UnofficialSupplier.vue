<template>
    <div class="fullScreen">
        <x-table class="bgf" :cell-bordered="false">
            <thead>
                <tr>
                    <th>供方名称</th>
                    <th>服务专业</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody class="p-tbody">
                <tr>
                    <td class="p-supplierName">上海日清建筑设计有限公司</td>
                    <td>建筑</td>
                    <td>正式</td>
                </tr>
                <tr>
                    <td class="p-supplierName">汇张思建筑设计咨询（上海）有限公司</td>
                    <td>建筑</td>
                    <td>正式</td>
                </tr>
                <tr>
                    <td class="p-supplierName">上海天华建筑设计有限公司</td>
                    <td>建筑</td>
                    <td>正式</td>
                </tr>
            </tbody>
        </x-table>
    </div>
</template>
<script>
import { XTable } from 'vux'
export default {
    data(){
        return{

        }
    },
    components:{
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
.p-supplierName{
    width: 11rem;
}
</style>
