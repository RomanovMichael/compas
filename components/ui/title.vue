<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'title-section'
  },
  placement: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div :class="`ui-title ${type}`">
    <h1 v-if="type === 'title-main'" class="ui-title__text">
      <slot />
    </h1>
    <h2 v-else-if="type === 'title-section'" class="ui-title__text">
      <slot />
    </h2>
    <h3 v-else-if="type === 'subtitle-main'" class="ui-title__text">
      <slot />
    </h3>
    <h3 v-else-if="type === 'subtitle-section'" class="ui-title__text">
      <slot />
    </h3>
  </div>
</template>

<style lang="scss">
.ui-title {
  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-style: normal;
  }

  &.title-main h1 {
    text-align: center;
    letter-spacing: 4px;
    font-size: 70px;
    line-height: 80px;
  }

  &.title-section h2 {

  }

  &.subtitle-main h3 {

  }

  &.subtitle-section h3 {

  }
}
</style>