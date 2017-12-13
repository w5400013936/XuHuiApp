/**
* Created by Administrator on 2017/12/11.
*/
<template>
    <div class="p-super-table">
        <div class="p-table-header">
            <div class="p-table-left" :dataKey="thead[0].dataKey">{{thead[0].name}}</div>
            <div class="p-table-main" style="touch-action: pan-y pinch-zoom;">
                <div class="p-thead-slide">
                    <div v-for="(item,index) in thead" v-if="index>0" class="p-table-column" >{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="p-header-stand"></div> <!-- 表头固定时 表格的占位元素 -->
        <div class="p-table-tbody">
            <div class="p-table-left"></div>
            <div class="p-table-main"></div>
        </div>
    </div>
</template>

<script>
    export default{
        //状态值
        props:{
            headList:{
                type: Array,
            },
            bodyList:{
                type: Array,
            }
        },
        data(){
            return {
                thead: this.headList,
                tbody: this.bodyList,
            }
        },
        beforeMount() {
            console.log(this.thead);
            console.log(this.tbody);
        }
    }
</script>
<style>
.p-super-table{
  position: relative;
  min-height: calc(100vh - 130px);
  border: solid #d7d7d7;
  border-width: 1px 0;
  overflow: hidden;
}
.p-super-table .p-table-sticky{
  position: fixed;
  top: 0;
  left: 0;
}
.p-super-table .p-table-header{
  position: relative;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  height: 50px;
}
.p-super-table .p-table-header .p-table-left{
  display: table-cell;
  width: 6rem;
  border-right: solid #d7d7d7 1px;
  vertical-align: middle;
}
.p-super-table .p-table-header .p-table-main{
  position: relative;
  display: table-cell;
  overflow: hidden;
  vertical-align: baseline;
}
.p-super-table .p-table-header .p-thead-slide{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  font-size: 0;
  white-space: nowrap;
}
.p-super-table .p-table-header .p-table-column{
  position: relative;
  width: 6.4375rem;
  display: inline-block;
  height: 100%;
  vertical-align: top;
  border-right: solid #d7d7d7 1px;
}
</style>
