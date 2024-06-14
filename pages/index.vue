<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()

</script>

<template>
  <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
  <ui-button requestBtn label="Проверить штрафы"></ui-button>
  <ui-button @click="mainStore.togglePopup()" playBtn label="О сервисе"></ui-button>
  <ui-logo/>
  <ui-input label="Номер автомобиля"/>
  <ui-input label="Регион"/>
  <ui-input v-model:value="mainStore.inputVal" label="Свидетельство о регистрации ТС"/>
{{ mainStore.inputVal }}
  <section-features/>
  <section-bibliography/>
</template>