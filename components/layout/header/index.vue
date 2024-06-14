<script setup>

</script>

<template>
  <header class="layout-header">
    <ui-container class="layout-header__container">
      <div class="layout-header__side layout-header__side--left">
        <ui-logo/>
        <layout-header-nav/>
      </div>
      <div class="layout-header__side layout-header__side--right">
        <a href="tel:74951184422" target="_blank" class="layout-header__phone">+7 495 118-44-22</a>
        <ui-button color="transparent" label="Вход"></ui-button>
        <ui-button label="Регистрация"></ui-button>
      </div>
    </ui-container>
  </header>
</template>

<style lang="scss">
  .layout-header {
    padding: 12px 0;
    background: var(--gradient);

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__side {
      display: flex;
      align-items: center;

      &--left {
        gap: 30px;
      }
    }

    &__phone {
      font-weight: 700;
      color: var(--light);
      transition: .25s ease;
      
      &:hover {
        transition: .25s ease;
        color: var(--orange);
      }
    }
  }
</style>