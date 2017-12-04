<template>
    <div class="fullScreen">
        <!-- <Search v-model="searchKey" top="5.6rem"></Search> -->
        <div class="p-tips">
            注：
        </div>
        <div>
            <div class="p-leafname">投资阶段</div>
            <group>
                <cell title="强排方案提报"></cell>
                <cell-box>
                    <div>
                        <div class="p-name">节点等级</div>
                        <div>二级</div>
                    </div>
                    <div>
                        <div class="p-name">计划开始</div>
                        <div>2017-05-08</div>
                    </div>
                    <div>
                        <div class="p-name">计划结束</div>
                        <div>2017-05-09</div>
                    </div>
                    <div>
                        <div class="p-name">实际结束</div>
                        <div>2017-05-09</div>
                    </div>
                </cell-box>
                <cell-box>
                    <div>
                        <div class="p-name">工期</div>
                        <div>1</div>
                    </div>
                    <div>
                        <div class="p-name">负责人</div>
                        <div>王贝妮</div>
                    </div>
                    <div>
                        <div class="p-name">专业</div>
                        <div>建筑</div>
                    </div>
                    <div>
                        <div class="p-name">状态</div>
                        <div><icon type="success"></icon></div>
                    </div>
                </cell-box>
            </group>
            <group class="p-childleaf">
                <cell title="强排方案提报"></cell>
                <cell-box>
                    <div>
                        <div class="p-name">节点等级</div>
                        <div>二级</div>
                    </div>
                    <div>
                        <div class="p-name">计划开始</div>
                        <div>2017-05-08</div>
                    </div>
                    <div>
                        <div class="p-name">计划结束</div>
                        <div>2017-05-09</div>
                    </div>
                    <div>
                        <div class="p-name">实际结束</div>
                        <div>2017-05-09</div>
                    </div>
                </cell-box>
                <cell-box>
                    <div>
                        <div class="p-name">工期</div>
                        <div>1</div>
                    </div>
                    <div>
                        <div class="p-name">负责人</div>
                        <div>王贝妮</div>
                    </div>
                    <div>
                        <div class="p-name">专业</div>
                        <div>建筑</div>
                    </div>
                    <div>
                        <div class="p-name">状态</div>
                        <div><icon type="success"></icon></div>
                    </div>
                </cell-box>
            </group>
        </div>
    </div>
</template>
<script>
import { Search,Group,Cell,CellBox,Icon } from 'vux'
export default {
    data(){
        return{
            searchKey:'',
        }
    },
    components:{
        Search,
        Group,
        Cell,
        CellBox,
        Icon,
    }
}
</script>
<style scoped>
.p-tips{
    width: 100%;
    padding: 1rem;
    background-color: #fff;
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
.p-childleaf{
    /* padding-left: 1rem; */
}
</style>
