// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import '../static/fonts/iconfont.css'

Vue.prototype.$http = axios
Vue.prototype.$url = 'http://120.24.175.112:6080'
Vue.prototype.$token = '0d41a663-d97e-45f2-901a-32bd4a0c8518'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
