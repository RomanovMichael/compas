<script setup>
  import LogoIcon from '@/assets/icons/logo.svg?component'
</script>

<template>
  <div class="ui-logo">
    <nuxt-link to="/" class="ui-logo__link">
      <logo-icon class="ui-logo__icon"/>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.ui-logo {
  position: relative;
  width: 119px;
  height: 23px;

  & svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>