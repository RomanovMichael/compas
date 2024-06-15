<script setup>
import { useFormStore } from '@/stores/form'
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators'

const formStore = useFormStore()

const form = reactive({
  carId: '',
  carRegion: '',
  carReciept: ''
})

const rules = {
  carId: { required },
  carRegion: { required },
  carReciept: { required }
}

const v$ = useVuelidate(rules, form)

const submitForm = async () => {
  const isValidFields = await v$.value.$validate()

  if (!isValidFields) return
  formStore.postRequest(form)
}
</script>

<template>
  <span class="load">
    {{ formStore.isLoading }}
  </span>
  <div :class="[
    'section-hero-form',
    {'section-hero-form--is-loading' : formStore.isLoading}]"
  >
    <form @submit.prevent="submitForm()">
      <div class="section-hero-form__group">
        <ui-input 
          v-model:value="form.carId" 
          label="Номер автомобиля" 
          name="carId"
          :isError="v$.carId.$errors.length > 0"
        />
        <ui-input
          v-model:value="form.carRegion"
          label="Регион" 
          name="carRegion"
          :isError="v$.carRegion.$errors.length > 0"
        />
      </div>
      <ui-input 
        v-model:value="form.carReciept" 
        label="Свидетельство о регистрации ТС" 
        name="carReciept"
        :isError="v$.carReciept.$errors.length > 0"
      />
      <div class="section-hero-form__btns">
        <ui-button action="submit" requestBtn label="Проверить штрафы"></ui-button>
        <!-- <ui-button @click="mainStore.togglePopup()" playBtn label="О сервисе"></ui-button> -->
      </div>
      <span class="section-hero-form__caption">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</span>
    </form>
  </div>
</template>

<style lang="scss">
.section-hero-form {
  transition: .25s ease;

  &--is-loading {
    opacity: 0.4;
    transition: .25s ease;
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 21px;
    margin-top: 15px;

    @include phones {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 16px;

    @include phones {
      flex-direction: column;
      gap: 16px;
    }


    .ui-input {

      &:first-child {
        flex: 1;
      }

      @include phones {
        width: 100%;
      }
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