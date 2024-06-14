<script setup></script>

<template>
  <section class="section-hero">
    <ui-container class="section-hero__container">
      <div class="section-hero__content">
        <ui-title type="title-main">Проверьте штрафы и зарегистрируйтесь в 1 клик</ui-title>
        <section-hero-form />
      </div>
      <div class="section-hero__image">
        <picture>
          <img src="@/assets/images/hero/main-image.png" alt="Проверьте штрафы и зарегистрируйтесь в 1 клик">
        </picture>
      </div>
    </ui-container>
  </section>
</template>

<style lang="scss">

.section-hero {

  &__container {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    max-width: 563px;
    gap: 25px;
  }

  &__image {
    position: relative;
    width: 532px;

    picture { 
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      padding-bottom: 62.96992481203007%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>