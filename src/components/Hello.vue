<template>
  <div class="hello">
    <!--属性绑定，条件判断, html绑定--><!--属性绑定缩写 :title-->
    <h1 v-bind:title="title" v-if="show" v-html="msg"></h1>
    <ul>
      <!--循环，key，参数传递-->
      <Item v-for="option in list" :key="option.key" v-bind:option="option"></Item>
      <!--计算属性-->
      <li>{{reversedMessage}}</li>
    </ul>
    <!--事件绑定，事件修饰符，内容绑定--><!--事件绑定缩写 @click-->
    <button v-on:click.prevent="reverse">{{ '逆转消息' }}</button>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'hello',  // 组件名
  components: {Item}, // 列举引用的组件
  data () {
    return {
      msg: '<span>花括号绑定</span>',
      title: 'v-bind',
      show: true,
      list: [{key: 1, value: 'a'}, {key: 2, value: 'b'}]
    }
  },
  methods: {
    reverse: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  created: function () {
    // 生命周期函数
    console.log('created')
  },
  update: function () {
    // 生命周期函数
    console.log('update')
  },
  destroyed: function () {
    // 生命周期函数
    console.log('destroyed')
  },
  // 计算属性
  computed: {
    reversedMessage: function () {
      return this.msg.split('').reverse().join('')
    }
  },
  // 观察者
  watch: {
    msg: function (newMsg) {
      console.log('msg发生变化')
    }
  }
}
</script>

  <!-- scoped 使得样式只应用在当前component -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
