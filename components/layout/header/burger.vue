<script setup>
import { useFullmenuStore } from '@/stores/fullmenu'

const fullmenuStore = useFullmenuStore()
</script>

<template>
  <div :class="['layout-header-burger', { 'is-open': fullmenuStore.isOpen }]">
    <button
      @click="fullmenuStore.toggleMenu()"
      type="button"
      class="layout-header-burger__btn"
    >
      <div class="layout-header-burger__line"></div>
      <div class="layout-header-burger__line"></div>
    </button>
  </div>
</template>

<style lang="scss">
.layout-header-burger {
  display: none;

  @include tablets {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  &.is-open {
    & .layout-header-burger__line:first-child {
      transform: rotate(45deg);
    }
    & .layout-header-burger__line:last-child {
      transform: rotate(-45deg);
    }
  }
}

.layout-header-burger__btn {
  cursor: pointer;
  padding: 0 16px;
  transition: transform .2s ease;

  &:active {
    transform: scale(0.95);
    transition: transform .2s ease;
  }
}

.layout-header-burger__line {
  position: relative;
  width: 24px;
  height: 3px;
  margin: 6px 0;
  transform-origin: 6px;
  transition: all ease 0.3s;
  background-color: var(--light);
}
</style>
