// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axiosnpm install qs.js --save　
axios.defaults.baseURL = 'http://localhost:8083/';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
