<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
    <!-- <tabbar></tabbar> -->
  </div>
</template>

<script>
import Tabbar from './components/footer/TabBar';
export default {
  name: 'app',
  components:{
      Tabbar,
  }
}
</script>
