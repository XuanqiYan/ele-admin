<template>
  <el-config-provider :locale="store.getters.language === 'zh' ? zhCn : en">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { useStore } from 'vuex'
import zhCn from 'element-plus/lib/locale/lang/zh-cn.js'
import en from 'element-plus/lib/locale/lang/en.js'
import { generateNewStyle, writeStyleToHearTag } from '@/utils/theme.js'
const store = useStore()
generateNewStyle(store.getters.theme_color).then((res) => {
  writeStyleToHearTag(res)
})
</script>
