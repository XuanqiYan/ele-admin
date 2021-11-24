<template>
  <p>{{ $t('msg.login.title') }}</p>
  <el-pagination
    v-model:currentPage="currentPage1"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  >
  </el-pagination>
</template>

<script setup>
import {} from 'vue'
const currentPage1 = 1
</script>

<style lang="scss" scoped></style>
