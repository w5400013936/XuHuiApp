<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
    <!-- <tabbar></tabbar> -->
  </div>
</template>

<script>
import tabbar from './components/footer/TabBar'
import index from './page/index'
export default {
  name: 'app',
  components:{
    tabbar,
    index
  }
}
</script>
