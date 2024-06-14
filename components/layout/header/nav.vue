<script setup>
import { nav } from '../config'
</script>

<template>
  <nav class="layout-header-nav">
    <ul class="layout-header-nav__list">
      <li
        v-for="link in nav"
        :key="link.name"
        class="layout-header-nav__item"
      >
        <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .layout-header-nav {

    &__list {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    & a {
      color: var(--light);
      font-size: 18px;
      line-height: 23px;
      transition: .25s ease;
      &:hover {
        color: var(--orange);
        transition: .25s ease;
      }
    }
  }
</style>