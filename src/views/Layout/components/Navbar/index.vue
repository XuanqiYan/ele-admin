<template>
  <div class="navbar">
    <!--切换侧边栏的组件-->
    <cuttle class="cuttle-container" />
    <!--面包屑-->
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container">
        <!--头像-->
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>课程主页</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import avatar from '@/assets/logo.png'
import { useStore } from 'vuex'
import Cuttle from '@/components/Cuttle/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

const store = useStore()
// 主动退出
const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        :deep(.el-avatar) {
          --el-avatar-background-color: none;
          margin-right: 10px;
        }
      }
    }
  }

  .cuttle-container {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    height: 50px;
    line-height: 50px;
    float: left;
  }
}
</style>
