<template>
  <div id="app">
    <router-link to="/world/1">带参路由</router-link>
    <router-link to="/world">嵌套路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app' // 组件名
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
