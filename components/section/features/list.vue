<script setup>
import { getImagesFromGlob } from '@/utils'
import { features } from './config'

const glob = import.meta.glob('@/assets/icons/features/*.svg', { eager: true })
const icons = getImagesFromGlob(glob)
</script>

<template>
    <div class="section-features-list">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="section-features-list__item"
      >
        <div class="section-features-list-tem-icon">
          <component :is="icons[feature.icon]" />
        </div>
        <div class="section-features-list__item-content">
          <ui-title 
            type="subtitle-section"
            class="section-features-list__item-title"
          >{{ feature.title }}</ui-title>
          <ui-text 
            text-size="size-sm"
            class="section-features-list__item-desc"
          >{{ feature.description }}</ui-text>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  .section-features-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;

    @include laptops {
      grid-template-columns: 1fr 1fr;
    }

    @include tablets {
      grid-gap: 24px;
    } 

    @include phones {
      grid-template-columns: 1fr;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      border-radius: 10px;
      background-color: var(--gray-light);
      border: 1px solid var(--gray-medium);
      padding: 24px 20px;

      @include laptops {
        justify-content: flex-start;
        gap: 35px;
      }

      @include tablets {
        gap: 24px;
      } 

      @include small-screen {
        flex-direction: column;
      }

      &-content {
        max-width: 247px;

        @include laptops {
          max-width: 100%;
        }
      }

      &-title {
        
        @include small-screen {
          text-align: center;
        }
      }

      &-desc {
        margin-top: 10px;

        @include small-screen {
          text-align: center;
        }
      }
    }
  }
</style>
