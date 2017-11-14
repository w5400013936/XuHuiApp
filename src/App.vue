<template>
  <div id="app" style="height:100%;">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/footer/TabBar'
export default {
  name: 'app',
  components:{
    tabbar
  }
}
</script>
