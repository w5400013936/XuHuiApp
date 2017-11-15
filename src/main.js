// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../src/assets/css/base.css'
import '../src/assets/css/common.css'
//import './config/rem';
import FastClick from 'fastclick';
import  { LoadingPlugin,ToastPlugin } from 'vux'
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);

//移除移动端点击延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
//Vue.prototype.axios = axios;
Vue.use(Mint);
Vue.config.productionTip = false;
//router.push('home');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
