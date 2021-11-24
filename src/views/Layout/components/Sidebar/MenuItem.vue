<template>
  <!--el-icon-->
  <i :class="icon" v-if="icon.includes('el-icon')"></i>
  <!--svg 组件-->
  <svg-icon
    :iconName="icon"
    :className="$store.getters.sideBarOpen ? 'sideClass' : ''"
    v-else
  />
  <span>{{ getTitle(title) }}</span>
</template>
<script setup>
import { defineProps } from 'vue'
import { getTitle } from '@/utils/i18n.js'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.sideClass {
  margin-right: 10px;
  margin-left: 3px;
}
</style>
