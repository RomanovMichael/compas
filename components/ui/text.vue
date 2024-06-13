<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'body-regular',
  }
})
</script>

<template>
  <div :class="`ui-text ${type}`">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-text {}
</style>