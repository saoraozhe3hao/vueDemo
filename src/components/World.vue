<template>
  <div>
    <span>世界</span>
    <div>$route.params= {{ routeParam }}</div>
    <div>$route.query= {{ routeQuery }}</div>
    <button v-on:click="jump">JS跳转</button>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      // 广播事件
      window.bus.$emit('event-name', 1)
      // 跳转
      this.$router.push({path: '/world/2', query: {name: 'tom'}})
    }
  },
  // 计算属性
  computed: {
    routeParam () {
      return JSON.stringify(this.$route.params)
    },
    routeQuery () {
      return JSON.stringify(this.$route.query)
    }
  },
  watch: {
    // 监听路由变化
    '$route' (to, from) {
    }
  }
}
</script>

  <!-- scoped 使得样式只应用在当前component -->
<style scoped>

</style>
