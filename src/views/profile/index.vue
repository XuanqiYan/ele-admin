<template>
  <p>{{ $t('msg.login.title') }}</p>
  <el-pagination
    v-model:currentPage="currentPage1"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  >
  </el-pagination>

  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<script setup>
import {} from 'vue'
const currentPage1 = 1
</script>

<style lang="scss" scoped></style>
