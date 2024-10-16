<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

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

const { type } = withDefaults(defineProps<BulletsSwiperProps>(), {
  type: '',
});
</script>

<template>
  <Swiper
      :loop="false"
      :breakpoints="breakpoints"
      :grabCursor="true"
  >
    <slot></slot>
  </Swiper>
</template>
