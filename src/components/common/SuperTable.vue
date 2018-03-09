/**
* Created by Administrator on 2017/12/11.
*/
<template>
    <div class="p-super-table" id="p-j-superTable">
        <div class="p-table-header">
            <div class="p-table-left" :dataKey="thead[0].dataKey"><span>{{thead[0].name}}</span></div>
            <div class="p-table-main" :style="{width: (thead.length-1)*100+'px'}">
                <div class="p-thead-slide">
                    <div v-for="(item,index) in thead" :key="index" v-if="index>0" class="p-table-column" >
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-header-stand" id="p-j-stand"></div> <!-- 表头固定时 表格的占位元素 -->
        <div class="p-table-tbody">
            <div class="p-table-left">
                <div class="item" v-for="(item,index) in tbody" :key="index">
                    <span class="p-inner">
                        <span>{{item.name}}</span>
                    </span>
                </div>
            </div>
            <div class="p-table-main" ><!--:style="{width: (thead.length-1)*100+'px'}"-->
                <div class="p-tbody-slide" v-drag>
                    <div class="p-tbody-data">
                        <div class="p-tbody-item" v-for="(item,index) in tbody" :key="index">
                            <span v-if="it!='name'" class="p-inner" v-for="(it,k) in orderList" :key="k">
                                <span>{{item[it]}}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        directives: {
            'drag':{
                bind: function (el) {
                    let tableLeft = document.getElementsByClassName("p-table-left");
                    let elOffsetLeft;
                    const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    el.addEventListener("touchstart",function(event){
                        this.startX = event.pageX || event.touches[0].pageX; // 鼠标或手指按下的位置
                        elOffsetLeft = parseInt(this.style.WebkitTransform.replace('translate(',"").replace(')',"")) || 0;
                        const stand = document.getElementById('p-j-stand');
                        const theadContent = document.getElementsByClassName("p-thead-slide");
                        const headHeight = theadContent[0].offsetHeight || 0;
                        stand.style.height = headHeight+"px";
                    },false);
                    el.addEventListener("touchmove",function(event){
                        this.nowX = event.pageX || event.touches[0].pageX; // 当前鼠标或手指的位置
                        this.moveX = this.nowX - this.startX; // 位移
                        let newOffset = this.moveX + elOffsetLeft;
                        let contentLeft = this.offsetWidth || 0,
                            leftWidth = tableLeft[0].offsetWidth || 0;
                        const theadContent = document.getElementsByClassName("p-thead-slide");

                        let rightBorder = clientWidth-contentLeft-leftWidth;
                        if(newOffset <0 && newOffset >= rightBorder){
                            this.style.WebkitTransform='translate('+newOffset+'px,0px)';
                            theadContent[0].style.WebkitTransform='translate('+newOffset+'px,0px)';
                        }
                    },false);
                    el.addEventListener("touchend",function(event){
                        el.removeEventListener('touchstart',this,false);
                        el.removeEventListener('touchmove',this,false);
                    },false);
                }
            }
        },
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
                orderList: [], // 表格排序
                scrollX: 0, // 水平滚动距离
                isSuperTable: true,
            }
        },
        methods:{
        },
        beforeMount() {
            const self = this;
            this.headList.forEach((item)=>{
                self.orderList.push(item.dataKey);
            });

            document.getElementById('vux_view_box_body').addEventListener('scroll', function(e) {
                var fixedHeadDis = document.getElementById('vux_view_box_body').scrollTop;
                const table = document.getElementById('p-j-superTable');
                if(!table) return false;
                let showAddClass = true;
                if(fixedHeadDis>46 && showAddClass){
                    table.className = "p-table-sticky p-super-table";
                    showAddClass = false;
                }else{
                    showAddClass = true;
                    table.className = "p-super-table";
                }
            });
        },
        beforeDestroy(){
            // 销毁前解绑函数
            document.getElementById('vux_view_box_body').removeEventListener('scroll',function(e){
                return false;
            },false);
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
.p-table-sticky .p-table-header{
  position: fixed!important;
  top: 46px;
  left: 0;
}
.p-header-stand{
  display: none;
}
.p-table-sticky .p-header-stand{
  display: block;
  position: relative;
}
.p-super-table .p-table-header{
  position: relative;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  height: 2rem;
  border-bottom: solid #d7d7d7 1px;
}
.p-super-table .p-table-header .p-table-left{
  display: table-cell;
  border-right: solid #d7d7d7 1px;
  vertical-align: middle;
  font-size: 12px;
  font-weight: bold;
  height: 2rem;
  text-align: center;
}
.p-super-table .p-table-header .p-table-main{
  position: relative;
  display: table-cell;
  overflow: hidden;
  vertical-align: baseline;
  height: 2rem;
}
.p-super-table .p-table-header .p-thead-slide{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  white-space: nowrap;
}
.p-super-table .p-table-header .p-table-column{
  position: relative;
  display: inline-block;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  border-right: solid #d7d7d7 1px;
  font-size: 12px;
  font-weight: bold;
}
.p-super-table .p-table-header .p-table-column>span{
  display: block;
  width:100px;
  font-weight: bold;
}
.p-super-table .p-table-header .p-table-left>span{
  width: 100px;
  font-weight: bold;
  display: block;
}

/***********************/
.p-table-tbody .item{
  display: table;
  width: 100%;
}
.p-table-tbody .item .p-inner{
  display: table-cell;
  height: 3rem;
  padding: 0rem;
  font-size: .75rem;
  color: #666;
  line-height: 1.3;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  border-top: solid #d7d7d7 1px;
  border-right: solid #d7d7d7 1px;
}
.p-table-tbody .item .p-inner>span{
  width: 100px;
  display: block;
  font-weight: bold;
  color:#000;
}
.p-table-tbody .p-table-left{
  display: table-cell;
  background-color: #fff;
}
.p-table-tbody .p-table-main{
  position: relative;
  display: table-cell;
  overflow: hidden;
}
.p-table-tbody .p-table-main .p-tbody-data{
  position: relative;
  height: 100%;
}
.p-table-tbody .p-table-main .p-tbody-data .p-tbody-item{
  width: auto;
  table-layout: fixed;
  display: table;
}
.p-table-tbody .p-table-main .p-inner{
  display: table-cell;
  height: 3rem;
  padding: 0;
  font-size: .75rem;
  color: #666;
  line-height: 1.3;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  border-top: solid #d7d7d7 1px;
  background-color: #fff;
  border-right: solid #d7d7d7 1px;
}
.p-table-tbody .p-table-main .p-inner>span{
  width: 100px;
  display: block;
}
</style>
