<template>
    <div class="fullScreen">
        <x-table class="p-table">
            <thead>
                <tr>
                    <th class="level1">规划指标</th>
                    <th>单位</th>
                    <th>投资拿地版</th>
                    <th>投资拿地版</th>
                    <th>投资拿地版</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="level2">总建筑面积</td>
                    <td>m²</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td class="level3">地上建筑面积</td>
                    <td>m²</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="level3">地上建筑面积</td>
                    <td>m²</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="level3">地上建筑面积</td>
                    <td>m²</td>
                    <td></td>
                    <td></td>
                    <td></td>
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

