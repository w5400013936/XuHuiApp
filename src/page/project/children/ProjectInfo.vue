<template>
    <div class="fullScreen">
        <group>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell title="分期名称" value="总部楼C1" value-align="left"></cell>
            <cell-box>
                <div class="w100p">
                    <div class="p-cellTitle">效果图</div>
                    <div class="w100p">
                        <ul class="flexbox p-buildingShowList">
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                            <li>
                                <img src="" alt="#" :onerror="defaultAvatar" width="100" style="height:100px;width: 100px;">
                            </li>
                        </ul>
                    </div>
                </div>
                
            </cell-box>
        </group>
    </div>
</template>
<script>
import { Group,Cell,CellBox } from 'vux'
export default {
    data(){
        return{
            defaultAvatar: 'this.src="' + require('../../../assets/images/avatar/BatMan.png') + '"',
        }
    },
    components:{
        Group,
        Cell,
        CellBox,
    }
}
</script>
<style scoped>
.weui-cells .weui-cell{
    padding: 15px;
}

.vux-label{
    color: #999999 !important;
}
.weui-cell__ft{
    margin-left: 1rem !important;
    color: #000 !important;
}
.w100p{
    width: 100%;
}
.p-cellTitle{
    color: #999999;
}
.p-buildingShowList{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 0.5rem 0;
    background-color: #fff;
}
.p-buildingShowList li{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
}
</style>
