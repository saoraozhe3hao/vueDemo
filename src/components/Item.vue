<template>
  <li v-on:mouseover="over">
    {{ opItem.value }}
    <slot name="slot-name"></slot>
  </li>
</template>

<script>
export default {
  props: ['opItem'],  // 作为子组件 接受的参数，协力写成驼峰式camelCased，父组件中写成短杠式kebab-case
  data: function () {
    return {}
  },
  methods: {
    over: function () {
      // 触发自定义事件
      this.$emit('success')
    }
  }
}
</script>

  <!-- scoped 使得样式只应用在当前component -->
<style scoped>

</style>
