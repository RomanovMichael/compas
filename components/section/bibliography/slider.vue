<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'

const sliderModules = ref([Navigation, Pagination, Scrollbar])

const props = defineProps({
  slides: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="section-bibliography-slider">
    <swiper
      :modules="sliderModules"
      :autoHeight="true"
      navigation
      :slidesPerView="1"
      :spaceBetween="16"
      :grabCursor="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        991: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        768: {
          slidesPerView: 2,
        }
      }"
    >
    <swiper-slide
      v-for="slide in slides"
      :key="slide.id"
    >
      <section-bibliography-card :item="slide"/>
    </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
  .section-bibliography-slider {
    .swiper {
      filter: drop-shadow(0 0 11px rgba(0, 0, 0, 0.15));
      padding: 40px 27px 27px;   
    }

    .swiper-button-prev,.swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: var(--blue-light);
      cursor: pointer;
      z-index: 2;

      @include tablets {
        display: none;
      }
    }

    .swiper-button-prev {
      left: -40px;
      background-image: url('data:image/svg+xml,<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.58723 12.9505C4.07525 13.3751 3.81926 13.7928 3.81926 14.2037C3.81926 14.6146 4.08587 15.0802 4.61911 15.6007L14.5576 25.6012C15.0715 26.1184 15.0798 26.9508 14.5763 27.478C14.0877 27.9897 13.2768 28.0084 12.7652 27.5198C12.7583 27.5132 12.7514 27.5064 12.7446 27.4996L0.855788 15.6238C0.0743157 14.8431 0.0736281 13.5768 0.854252 12.7953C0.856452 12.7931 0.858657 12.7909 0.860867 12.7887L12.9372 0.811666C13.4528 0.300275 14.2854 0.30371 14.7968 0.81934C14.8038 0.826454 14.8108 0.833648 14.8177 0.840921C15.3326 1.38435 15.3206 2.23908 14.7907 2.76787L4.58723 12.9505Z" fill="white"/></svg>');
      background-repeat: no-repeat;
      background-position: 70% 50%; 
    }

    .swiper-button-next {
      right: -40px;
      background-image: url('data:image/svg+xml,<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4127 12.9505C11.9247 13.3751 12.1807 13.7928 12.1807 14.2037C12.1807 14.6146 11.9141 15.0802 11.3808 15.6007L1.44239 25.6012C0.928487 26.1184 0.920188 26.9508 1.42368 27.478C1.91226 27.9897 2.7231 28.0084 3.23474 27.5198C3.24169 27.5132 3.24857 27.5064 3.25537 27.4996L15.1442 15.6238C15.9256 14.8431 15.9263 13.5768 15.1457 12.7953C15.1435 12.7931 15.1413 12.7909 15.1391 12.7887L3.06275 0.811666C2.54712 0.300275 1.71456 0.30371 1.20317 0.81934C1.19611 0.826454 1.18914 0.833648 1.18225 0.840921C0.667385 1.38435 0.679354 2.23908 1.20923 2.76787L11.4127 12.9505Z" fill="white"/></svg>');
      background-repeat: no-repeat;
      background-position: 30% 50%;
    }

    .swiper-button-disabled {
      opacity: 0;
    }

    .swiper-pagination {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: nowrap;
      height: 10px;
    }

    .swiper-pagination-bullet {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
      background-color: #D9D9D9;
      transition: .25s ease;
      cursor: pointer;

      &-active {
        width: 10px;
        height: 10px;
        background-color: #007AFF;
        transition: .25s ease;
      }
    }
  }
</style>
