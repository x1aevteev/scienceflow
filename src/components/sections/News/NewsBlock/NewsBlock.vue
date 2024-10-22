<script setup lang="ts">

import Container from "@/components/base/Container/Container.vue";
import Card from "@/components/sections/Card/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { pageStore } from "@/stores/MainStore";
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";
import NewsItemCard from "@/components/sections/News/NewsItemCard/NewsItemCard.vue";
import {onMounted} from "vue";

const store = pageStore()


onMounted(() => {
  store.getNews()
})

</script>

<template>
<!--//TODO название и пропсы для карточек-->
  <div class="NewsBlock">
    <Container>
      <BaseSwiper>
        <template v-for="(card, i) in store.news.sections" :key="i">
          <SwiperSlide>
            <RouterLink :to="`/news/${card.slug}`" type="newsLink">
              <NewsItemCard
                  :name="card.name"
                  :subtitle="card.description"
                  :slug = "card.slug"
                  :img = "card.img"
              />
            </RouterLink>
          </SwiperSlide>
        </template>
      </BaseSwiper>
    </Container>
  </div>
</template>

<style scoped lang="scss">

</style>