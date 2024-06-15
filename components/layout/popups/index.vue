<script setup>
  import { usePopupStore } from '@/stores/popup'

  const popupStore = usePopupStore()
</script>

<template>
  <layout-popups-video v-if="popupStore.activePopup === 'video'"/>
  <layout-popups-success v-if="popupStore.activePopup === 'success'"/>
</template>