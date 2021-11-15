<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// 写代码的时候 保存的时候自动将代码格式化（eslint 规范）
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log('12321')
  }
}
</script>
