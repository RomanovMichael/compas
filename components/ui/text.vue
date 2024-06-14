<script setup>
const props = defineProps({
  textSize: {
    type: String,
    default: 'size-md',
  }
})
</script>

<template>
  <p :class="`ui-text ui-text--${textSize}`">
    <slot />
  </p>
</template>

<style lang="scss">
.ui-text {
  color: var(--dark);
  
  &--size-md {
    font-size: 18px;
    line-height: 23px;
  }

  &--size-sm {
    font-size: 15px;
    line-height: 120%;
  }
}
</style>