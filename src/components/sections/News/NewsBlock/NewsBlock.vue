<script setup lang="ts">

import Container from "@/components/base/Container/Container.vue";
import Card from "@/components/sections/Card/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { pageStore } from "@/stores/MainStore";
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";

const store = pageStore()

store.getNews()

</script>

<template>
<!--//TODO название и пропсы для карточек-->
  <div class="NewsBlock">
    <Container>
      <BaseSwiper>
        <template v-for="(item, i) in store.news.sections" :key="i">
          <SwiperSlide>
            <Card
                :name="item.name"
                :subtitle="item.description"
                :slug = "item.slug"
                :img = "item.img"
            ></Card>
          </SwiperSlide>
        </template>
      </BaseSwiper>
    </Container>
  </div>
</template>

<style scoped lang="scss">

</style>