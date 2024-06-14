<script setup>
const route = useRoute()
const getDocs = await queryContent('/docs').findOne()
const currentPage = getDocs.data[route.params.page]
</script>

<template>
  <div class="page-docs">
    <ui-container>
      <ui-title
        v-if="currentPage.title" 
        type="title-main"
        class="page-docs__title"
      >{{ currentPage.title }}</ui-title>
      <div v-if="currentPage.content" class="page-docs__content">
        <div 
          v-for="block in currentPage.content"
          :key="block" 
          class="page-docs__block"
        >
          <ui-title v-if="block.heading" type="title-section"> {{ block.heading }}</ui-title>
          <div v-if="block.paragraphs" class="page-docs__block-paragraphs">
            <ui-text v-for="p in block.paragraphs" :key="p">{{ p }}</ui-text>
          </div>
        </div>
      </div>
    </ui-container>
  </div>
</template>

<style lang="scss">
.page-docs {

  &__content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }

  &__block-paragraphs {
    p {
      margin-top: 18px;
    }
  }

  .ui-title__text {
    text-align: left !important;
  }
}
</style>