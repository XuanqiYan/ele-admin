<template>
  <el-dropdown
    v-bind="$attrs"
    class="theme"
    trigger="click"
    @command="showSelectColor"
  >
    <!--图标-->
    <div>
      <el-tooltip :content="$t('msg.theme.themeChange')">
        <svg-icon iconName="change-theme"></svg-icon>
      </el-tooltip>
    </div>
    <!--下拉选项-->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>{{
          $t('msg.theme.themeColorChange')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!--弹出的模态框-->
  <select-color
    :showDialogVariable="showDialogVariable"
    @closeDialog="hideSlectColor"
  />
</template>

<script setup>
import SelectColor from './components/selectColor.vue'
import { ref } from 'vue'
const showDialogVariable = ref(false)
const showSelectColor = () => {
  showDialogVariable.value = true
}
const hideSlectColor = () => {
  showDialogVariable.value = false
}
</script>

<style lang="scss" scoped></style>
