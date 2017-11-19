<template>
    <div>
        <div>
            <i class="fa" :class="temp_ivData?'fa-plus':'fa-minus'" @click="toggleChild"></i>
        </div>
        <ul></ul>
    </div>
</template>

<script>
  export default {
    data () {
        return {
            temp_ivData: this.itemVisible, // 父组件状态副本
        }
    },
    props:{
        itemVisible:{
            //type: Boolean,
            default: true,
        },
    },
    components: {

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
