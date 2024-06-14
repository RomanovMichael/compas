<script setup>

</script>

<template>
  <header class="layout-header">
    <ui-container class="layout-header__container">
      <div class="layout-header__side layout-header__side--left">
        <ui-logo/>
        <layout-header-nav class="layout-header__nav"/>
      </div>
      <div class="layout-header__side layout-header__side--right">
        <a href="tel:74951184422" target="_blank" class="layout-header__phone">+7 495 118-44-22</a>
        <ui-button
          @click="$router.push('/auth')" 
          color="transparent" 
          label="Вход"
          class="layout-header__btn"
        ></ui-button>
        <ui-button 
          @click="$router.push('/registry')" 
          label="Регистрация"
          class="layout-header__btn"
        ></ui-button>
      </div>
      <layout-header-burger />
      <layout-header-fullmenu />
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

    &__nav {
      display: none;
    }

    &__phone {
      font-weight: 700;
      color: var(--light);
      transition: .25s ease;
      
      &:hover {
        transition: .25s ease;
        color: var(--orange);
      }

      @include tablets {
        display: none;
      }
    }

    &__btn {
      @include tablets {
        display: none;
      }
    }
  }
</style>