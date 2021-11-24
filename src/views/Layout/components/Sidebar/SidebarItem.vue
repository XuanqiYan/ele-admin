<template>
  <!--有二级菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon" />
    </template>
    <!--循环子菜单-->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    />
  </el-sub-menu>
  <!--只有一级菜单-->
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped></style>
