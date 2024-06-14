<script setup>
import { nav } from '../config'
import { useFullmenuStore } from '@/stores/fullmenu'

const route = useRoute()
const fullmenuStore = useFullmenuStore()

const closeFullmenu = () => {
  if (fullmenuStore.isOpen) fullmenuStore.toggleMenu(false)
}

watch(() => route.path, closeFullmenu)
</script>

<template>
  <Transition name="fullmenu">
    <div class="layout-header-fullmenu fullmenu" v-if="fullmenuStore.isOpen">
      <ui-container class="fullmenu__container">
        <div class="fullmenu__content">
          <nuxt-link 
            v-for="link in nav"
            :key="link.name"
            :to="link.url"
          >{{ link.name }}</nuxt-link>
          <nuxt-link to="/auth">Вход</nuxt-link>
          <nuxt-link to="/registry">Регистрация</nuxt-link>
          <a href="tel:74951184422" target="_blank">+7 495 118-44-22</a>
        </div>
      </ui-container>
    </div>
  </Transition>
</template>

<style lang="scss">
.fullmenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  height: 100vh;
  padding-top: 64px;
  overflow-x: hidden;
  background-color: rgb(26, 26, 26, 0.98);
  z-index: 1;

  a {
    color: var(--light);
    transition: .25s ease;
    font-size: 24px;
    font-weight: 700;

    &:hover {
      color: var(--orange);
      transition: .25s ease;
    }
  }

  .router-link-exact-active {
   color: var(--orange);
   pointer-events: none;
  }

  & .ui-title {
    color: var(--caption);

    &.title-section h2 {
      text-align: left;
    }

    &.is-active {
      color: var(--light);
    }
  }
}

.fullmenu__container {
  max-height: 100%;
  overflow-y: scroll;
}

.fullmenu__content {
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 120px;
  gap: 32px;

  @include small-screen {
    padding-left: 16px;
  }
}

.fullmenu-enter-active,
.fullmenu-leave-active {
  transition: transform 0.25s ease;
}

.fullmenu-enter-from,
.fullmenu-leave-to {
  transform: translateX(-100%);
  transition: transform 0.25s ease;
}
</style>