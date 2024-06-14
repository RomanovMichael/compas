<script setup>
const getDocs = await queryContent('/docs').findOne()
const bibliographyList = getDocs.data
</script>

<template>
  <section class="section-bibliography">
    <ui-container>
      <ui-title type="title-section">Документы</ui-title>
      <section-bibliography-slider :slides="bibliographyList"/>
    </ui-container>
  </section>
</template>

<style lang="scss">
.section-bibliography {
  margin-top: 85px;
}
</style>