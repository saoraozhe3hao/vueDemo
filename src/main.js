// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'         // ./App 是一个单文件组件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',         // 用template填充el
  components: { App }        // 列举 component，用于 template
})

// 中央事件总线，用于非父子关系组件之间的通讯
window.bus = new Vue()
