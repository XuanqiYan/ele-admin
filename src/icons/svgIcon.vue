<template>
  <svg aria-hidden="true" :class="getClassName">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    require: true
  },
  className: {
    type: String
  }
})
const iconName = computed(() => {
  return `#icon-${props.iconName}`
})

const getClassName = computed(() => {
  if (props.className) {
    // 如果传了className  == > defaultSvgClass sideClass
    return `defaultSvgClass ${props.className} `
  } else {
    // 如果没传className  == > defaultSvgClass
    return 'defaultSvgClass'
  }
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
