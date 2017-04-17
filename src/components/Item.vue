<template>
  <li>{{ option.value }}</li>
</template>

<script>
export default {
  name: 'item',
  props: ['option'],  // 作为子组件 接受的参数
  data: function () {
    return {}
  }
}
</script>

  <!-- scoped 使得样式只应用在当前component -->
<style scoped>

</style>
