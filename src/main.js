// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'         // ./App 是一个单文件组件
import router from './router'
import 'element-ui/lib/theme-default/index.css'  // 引入element-ui 的样式
import ElementUI from 'element-ui'  // 引入 element-ui

Vue.config.productionTip = false
Vue.use(ElementUI)          // 使用插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',         // 用template填充el
  components: { App }        // 列举 component，用于 template
})

// 中央事件总线，用于非父子关系组件之间的通讯
window.bus = new Vue()
