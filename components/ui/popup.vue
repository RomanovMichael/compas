<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <div class="ui-popup">
    <div class="ui-popup__wrap">
      <div class="ui-popup__content">
        <div class="ui-popup__close" @click="mainStore.togglePopup()"></div>
        <iframe width="960" height="532" src="https://www.youtube.com/embed/bolW0Fhr390?si=QFE-h_tLC9RYA8E_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div @click="mainStore.togglePopup()" class="ui-popup__shade"></div>
  </div>
</template>

<style lang="scss">
.ui-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10;

  &__wrap {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__content {
    position: relative;
    max-width: 960px;
    max-height: 532px;
    z-index: 4;
  }

  &__shade {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.79);
    animation-duration: .16s;
  }

  &__close {
    position: absolute;
    top: -25px;
    right: 0;
    width: 17px;
    height: 17px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('data:image/svg+xml,<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="15.7071" y2="16.2929" stroke="white" stroke-width="2"/><line y1="-1" x2="21.2132" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 17 2)" stroke="white" stroke-width="2"/></svg>');
    cursor: pointer;
  }
}
</style>