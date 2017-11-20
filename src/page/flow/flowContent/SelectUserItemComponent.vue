<template>
    <div>
        <div @click="toggleChild" class="p-userItemHeader">
            <i class="fa" :class="temp_ivData?'fa-plus':'fa-minus'"></i>
            <span>{{titleName}}</span>
        </div>
        <!-- 人员列表 -->
        <group v-if="!!!temp_ivData">
            <cell is-link >
                <span slot="title" style="color:green;">
                    <span style="vertical-align:middle;">选择指定人员</span>
                </span>
            </cell>
        </group>
    </div>
</template>

<script>
  import { Cell, Group } from 'vux';
  export default {
    data () {
        return {
            temp_ivData: this.itemVisible, // 父组件状态副本
        }
    },
    props:{
        itemVisible:{
            type: Boolean,
            default: true,
        },
        titleName:{
            type: String,
            default: '',
        },
        userList:{
            default:[],
        }
    },
    components: {
        Cell, Group,
    },
    beforeMount(){
        console.log(this.itemVisible)
    },
    methods:{
      toggleChild:function(){
          this.temp_ivData = !this.temp_ivData;
      }
    }
  }
</script>
<style>
  .p-userItemHeader {
    display:flex;
    align-items: center;
  }
  .p-userItemHeader>i{
      margin: 8px;
      color: #cccccc;
  }
  #vux_view_box_body .weui-cells{
    margin-top: 0!important;
  }
</style>
