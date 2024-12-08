<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import  Pagination  from 'swiper';

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';

// Types
import type { Breakpoints } from '@/constants/swipers';

type BulletsSwiperProps = {
  type?: '' | 'news' | 'bulletsBelow';
  breakpoints?: Breakpoints;
};

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 150,
  },
}

const { type } = withDefaults(defineProps<BulletsSwiperProps>(), {
  type: '',
});


</script>

<template>
  <Swiper
      :loop="false"
      :slides-per-view="3"
      :space-between="150"
      :grabCursor="true"
      :breakpoints="breakpoints"
  >
    <slot></slot>
  </Swiper>
</template>
