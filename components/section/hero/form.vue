<script setup>
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
</script>

<template>
  <div class="section-hero-form">
    <form>
      <div class="section-hero-form__group">
        <ui-input v-model:value="mainStore.form.data.id"  label="Номер автомобиля"/>
        <ui-input v-model:value="mainStore.form.data.region"  label="Регион"/>
      </div>
      <ui-input v-model:value="mainStore.form.data.certificate" label="Свидетельство о регистрации ТС"/>
      <div class="section-hero-form__btns">
        <ui-button action="submit" requestBtn label="Проверить штрафы"></ui-button>
        <ui-button @click="mainStore.togglePopup()" playBtn label="О сервисе"></ui-button>
      </div>
      <span class="section-hero-form__caption">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</span>
    </form>
  </div>
</template>

<style lang="scss">
.section-hero-form {

  &__btns {
    display: flex;
    align-items: center;
    gap: 21px;
    margin-top: 15px;
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 16px;

    .ui-input:first-child {
      flex: 1;
    }
  }

  &__caption {
    display: inline-block;
    color: var(--text-caption);
    font-size: 13px;
    line-height: 120%;
    margin-top: 16px;
  }
}

</style>