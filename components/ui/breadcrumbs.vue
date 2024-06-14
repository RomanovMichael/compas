<script setup>
  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  })

  // const breadcrumbs = route.path.replace(/^\/|\/$/g, '').split('/')
</script>

<template>
  <div class="ui-breadcrumbs">
    <nuxt-link class="ui-breadcrumbs__item ui-breadcrumbs__item--root" to="/">Главная страница</nuxt-link>
    <span 
      v-for="crumb in items" 
      :key="crumb"
      :class="[
        'ui-breadcrumbs__item', 
        { 'ui-breadcrumbs__item--current' : items[items.length - 1] === crumb }
      ]"
    >{{ crumb }}</span>
  </div>
</template>

<style lang="scss">
.ui-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a,span {
    font-size: 13px;
    white-space: nowrap;
  }

  &__item {
    position: relative;
    margin-right: 26px;
    margin-bottom: 10px;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--dark);
      right: -13px;
      top: 50%;
      transform: translateY(-50%);
    }


    &--current {
      color: var(--text-caption);

      &::after{
        display: none;
      }
    }
  }
}
</style>