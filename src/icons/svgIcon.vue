<template>
  <svg aria-hidden="true" class="defaultSvgClass">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    require: true
  }
})
const iconName = computed(() => {
  return `#icon-${props.iconName}`
})
</script>

<style lang="scss" scoped>
.defaultSvgClass {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
