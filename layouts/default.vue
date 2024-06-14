<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <layout-header/>
  <main>
    <nuxt-page />
    <ui-popup v-if="mainStore.popup"/> 
  </main>
</template>

