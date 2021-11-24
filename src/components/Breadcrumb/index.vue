<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="list">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 如果是最后一项 不可以点击-->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">
          {{ getTitle(item.meta.title) }}
        </span>
        <!-- 不是最后一项 可以点击-->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">
          {{ getTitle(item.meta.title) }}</a
        >
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTitle } from '@/utils/i18n.js'
// 获取当前的路由
const route = useRoute()
const breadcrumbData = ref([])
watch(
  route,
  () => {
    breadcrumbData.value = route.matched.filter((item) => {
      return item.meta && item.meta.title
    })
  },
  { immediate: true }
)
// 监听路由变化

const router = useRouter()
// 点击跳转
const onLinkClick = (item) => {
  router.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }

  .redirect {
    color: #666;
    font-weight: 600;
  }
}
</style>
