<template>
  <div class="navbar">
    <!--切换侧边栏的组件-->
    <cuttle class="cuttle-container" />
    <!--面包屑-->
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!--主题换肤-->
      <theme class="right-menu-item" />
      <!--国际化按钮-->
      <select-lang class="right-menu-item" data="" />

      <el-dropdown class="avatar-container">
        <!--头像-->
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            <el-dropdown-item @click="logout">{{
              $t('msg.navBar.logout')
            }}</el-dropdown-item>
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
import SelectLang from '@/components/SelectLang/index.vue'
import Theme from '@/components/Theme/index.vue'
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

    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #ccc;
      vertical-align: text-bottom;
      &:hover {
        background: rgba(0, 0, 0, 0);
      }
    }
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
