<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <main>
    <nuxt-page />
    <ui-popup v-show="mainStore.popup"/> 
  </main>
</template>

