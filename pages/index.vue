<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <div class="page page-main">
    <section-hero/>
    <section-features/>
    <section-bibliography/>
  </div>
</template>

<style lang="scss">
.page-main {
  padding-top: 79px;
}
</style>