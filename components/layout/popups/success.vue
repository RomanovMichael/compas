<script setup>
  import { usePopupStore } from '@/stores/popup'

  const popupStore = usePopupStore()
</script>

<template>
  <ui-popup class="layout-popups-success">
    <div class="layout-popups-success__content">
      <span>Данные успешно отправлены</span>
      <ui-button
        @click="popupStore.updatePopup()"
        label="Окей"
      />
    </div>
  </ui-popup>
</template>

<style lang="scss">
.layout-popups-success {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 16px;
    padding: 24px;
    background-color: var(--light);
    max-width: 250px;

    span {
      text-align: center;
    }

    button {
      width: 100%;
    }
  }
}
</style>