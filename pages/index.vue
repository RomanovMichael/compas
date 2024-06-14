<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
  <ui-button requestBtn label="Проверить штрафы"></ui-button>
  <ui-button @click="mainStore.togglePopup()" playBtn label="О сервисе"></ui-button>
  <ui-logo/>
</template>