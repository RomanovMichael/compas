<script setup></script>

<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-container {
  margin: 0 auto;
  max-width: 1164px;

  @include laptops {
    padding: 0 32px;
  }

  @include phones {
    padding: 0 16px;
  }
}
</style>