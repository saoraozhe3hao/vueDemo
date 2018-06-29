<template>
  <div class="hello">
    <!--过渡，需定义样式-->
    <transition name="fade">
      <!--属性绑定，条件判断, html绑定-->
      <h1 v-bind:title="title" v-show="show" v-html="msg"></h1>
    </transition>
    <!--属性绑定缩写 :title-->
    <ul :title="title">
      <!--循环，key，参数传递，自定义事件，子组件索引-->
      <Item v-for="option in list" :key="option.key" v-bind:op-item="option"  v-on:success="itemSuccess" ref="item">
          <!--将内容分发到子组件中名称为slot-name的slot-->
          <span slot="slot-name">{{option.key}}</span>
      </Item>
      <!--计算属性-->
      <li>{{reversedMessage}}</li>
    </ul>
    <!--事件绑定，事件修饰符，内容绑定-->
    <button v-on:click.prevent="reverse">{{ '逆转消息' }}</button>
    <!-- 双向绑定，绑定修饰符-->
    <input type="text" v-model.trim="msg"/>
    <!--下级组件容器-->
    <router-view></router-view>
  </div>
</template>

<script>
import Item from './Item'
export default {
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
    reverse () {
      this.msg = this.msg.split('').reverse().join('')
      this.show = !this.show
    },
    itemSuccess () {
      console.log('item success')
    },
    elementAlert () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({type: 'info', message: `action: ${action}`})
        }
      })
    }
  },
  created () {
    // 生命周期函数
    console.log('created')
  },
  update () {
    // 生命周期函数
    console.log('update')
  },
  destroyed () {
    // 生命周期函数
    console.log('destroyed')
  },
  // 计算属性
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  // 观察者
  watch: {
    msg (newMsg) {
      console.log('msg发生变化')
    }
  }
}
</script>

  <!-- scoped 使得样式只应用在当前component， 要使用less需安装less 和 less-loader-->
<style scoped lang="less">
// 引入less  mixin
@import '../assets/mixin';
h1, h2 {
  font-weight: normal;
  .text-overflow();
}

ul {
  list-style-type: none;
  padding: 0;
  li {
   display: inline-block;
   margin: 0 10px;
  }
}
a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
