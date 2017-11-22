<template>
    <div>
        <div @click="toggleChild" class="p-userItemHeader">
            <i class="fa" :class="temp_ivData?'fa-plus':'fa-minus'"></i>
            <span style="width:calc(100% - 60px)">{{titleName}}</span>
            <badge :text="selectedList.length" :style="{background: activeColor}"></badge>
        </div>
        <!-- 人员列表 -->
        <group v-if="!!!temp_ivData">
            <cell is-link >
                <span slot="title" style="color:green;">
                    <span style="vertical-align:middle;" @click="showSearchBar">选择指定人员</span>
                </span>
            </cell>
        </group>
        <!---->
        <div v-if="userSelectModal">
            <SelectUser
              @listenToToggleSearchBar="syncToggleState"
              @listenSelectedUserList="getUserFromChild"
            />
        </div>
    </div>
</template>

<script>
  import { Cell, Group, Badge, } from 'vux';
  import SelectUser from './SelectUser.vue';
  export default {
    data () {
        return {
            temp_ivData: this.itemVisible, // 父组件状态副本
            selectedList: [], //　子组件中存的已选人员列表
            userSelectModal: false, //　是否处于用户选择模式下
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
    computed: {
        activeColor:function(){
            return this.selectedList.length? '#f74c31': '#ccc';
        }
    },
    components: {
        Cell, Group, Badge, SelectUser,
    },
    beforeMount(){
        console.log(this.itemVisible)
    },
    methods:{
        toggleChild:function(){
            this.temp_ivData = !this.temp_ivData;
        },
        sendMsgToParent(){
            let newItem = {name:'admin',guid:"5406bebbb0909c60e47752df",userId:"1"};
            this.selectedList.push(newItem);
            this.$emit('listenToChildEvent',{data:newItem,handleType:1}); // handleType 1 添加　删除
        },
        showSearchBar: function(){
            this.userSelectModal = !this.userSelectModal;
        },
        syncToggleState: function(newState){ // 同步用户选择状态
            this.userSelectModal = newState;
        },
        getUserFromChild: function(data){
            console.log('以下是从组件获取的人员信息！');
            console.log(data);
        }
    }
  }
</script>
<style>
  .p-userItemHeader {
    display:flex;
    align-items: center;
    flex-direction: row;
    background-color: '#f6f6f6',
  }
  .p-userItemHeader>i{
      margin: 8px;
      color: #cccccc;
  }
  #vux_view_box_body .weui-cells{
      margin-top: 0!important;
  }
</style>
