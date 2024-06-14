<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="section-bibliography-card">
    <ui-title type="subtitle-main">{{ item.title }}</ui-title>
    <ui-text class="section-bibliography-card__desc"> {{ item.description }}</ui-text>
    <ui-button @click="$router.push(`/docs/${item.id}`)" label="Перейти" class="section-bibliography-card__btn"></ui-button>
  </div>
</template>

<style lang="scss">
.section-bibliography-card {
  transform: translate3d(0,0,0);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 25px;
  border-radius: 10px;
  background-color: var(--light);
  min-height: 450px;

  &__desc {
    margin-top: 15px;
  }

  &__btn {
    margin-top: auto;
  }
}
</style>

