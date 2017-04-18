import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
        {
          path: 'world',   // 嵌套路由
          component: World
        }
      ]
    },
    {
      path: '/world/:id',  // 带参路由
      component: World
    }
  ]
})
