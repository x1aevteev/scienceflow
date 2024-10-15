<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import Container from "@/components/base/Container/Container.vue";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from "@/components/sections/Card/Card.vue";

const swiper = Swiper

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

// const props = defineProps({
//   item: {type: Number, required: true}
// })

let count = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
]
</script>

<template>
<div class="swiper_universal">
  <Container>
    <h2>Новости</h2>
    <Swiper
        :slides-per-view="3"
        :space-between="20"
        @swiper="onSwiper"
        :modules="[Pagination]"
        @slideChange="onSlideChange"
    >
        <swiper-slide v-for="(item, i) in count" :key="i">
          <Card></Card>
        </swiper-slide>
    </Swiper>
  </Container>
</div>
</template>

<style scoped lang="scss">

</style>