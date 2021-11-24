<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <select-lang class="select-lang" />
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon iconName="user" />
        </span>
        <el-input
          placeholder="username"
          v-model="loginForm.username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon iconName="password" />
        </span>
        <el-input
          placeholder="password"
          v-model="loginForm.password"
          name="password"
          :type="flag ? 'password' : 'text'"
        ></el-input>

        <span class="svg-container" @click="toggleIcon">
          <svg-icon :iconName="flag ? 'close-eye' : 'open-eye'" />
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-top: 30px"
        @click="handleLogin"
      >
        {{ $t('msg.login.loginBtn') }}
      </el-button>
      <!--账号tips-->
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
    <!--使用svg-->
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { passwordValidate, usernameValidate } from './rule.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SelectLang from '@/components/SelectLang/index.vue'

// 表单数据
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 表单验证逻辑
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      // message: i18n.t('msg.login.usernameRule') // 不具备响应式
      validator: usernameValidate()
    }
  ],
  password: [
    {
      trigger: 'blur',
      validator: passwordValidate()
    }
  ]
})

// 切换password状态
const flag = ref(true)
const toggleIcon = () => {
  flag.value = !flag.value
}

// 怎么引用dom
const loginRef = ref(null)
// 登录逻辑
const store = useStore()
const router = useRouter()
const handleLogin = () => {
  // 验证一次表单的数据是否合法
  loginRef.value.validate((validate) => {
    if (!validate) {
      return // 一个规则没有通过
    }
    // 验证通过执行登录逻辑  保存token
    store.dispatch('user/login', loginForm.value).then((res) => {
      // 只有在登陆成功的情况下 执行跳转
      router.push({
        name: 'Index'
      })
    })
  })
}

// 监听getters.language 的变化
watch(
  () => store.getters.language,
  (newValue, oldValue) => {
    // 中英文切换了 验证重新执行
    loginRef.value.validateField('username')
    loginRef.value.validateField('password')
  }
)
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  height: 100vh;
  background-color: $bg;
  overflow: hidden;

  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    :deep(.select-lang) {
      position: absolute;
      top: 4px;
      right: 0px;
      background-color: white;
      font-size: 24px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .el-input {
        height: 47px;
        width: 80%;

        .el-input__inner {
          background: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $cursor;
          height: 47px;
          caret-color: $cursor;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 5px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }

    .tips {
      font-size: 14px;
      line-height: 28px;
      color: #fff;
      margin-bottom: 10px;
    }
  }
}
</style>
