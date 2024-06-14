<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'title-section'
  },
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
    <h4 v-else-if="type === 'subtitle-section'" class="ui-title__text">
      <slot />
    </h4>
  </div>
</template>

<style lang="scss">
.ui-title {

  h1, h2, h3, h4{
    margin: 0 ;
    padding: 0;
    font-style: normal;
    line-height: 120%;
    font-weight: 700;
    color: var(--dark);
  }

  &.title-main h1 {
    font-size: 41px;

    @include phones {
      font-size: 31px;
    }
  }

  &.title-section h2 {
    text-align: center;
    font-size: 34px;

    @include phones {
      font-size: 28px;
    }
  }

  &.subtitle-main h3 {
    color: var(--text-blue);
    font-size: 31px;

    @include laptops {
      font-size: 27px;
    }
  }

  &.subtitle-section h4 {
    color: var(--text-blue);
    font-size: 18px;
  }
}
</style>