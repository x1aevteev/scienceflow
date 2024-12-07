<script setup lang="ts">

import Container from "@/components/base/Container/Container.vue";
import Card from "@/components/base/Card/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { pageStore } from "@/stores/MainStore";
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";
import NewsItemCard from "@/components/sections/News/NewsItemCard/NewsItemCard.vue";
import {onMounted, type PropType} from "vue";

const store = pageStore()

onMounted(() => {
  store.getNews()
})

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    required: true,
  },
})

console.log(props.data)


</script>

<template>
<!--//TODO название и пропсы для карточек-->
  <div class="NewsBlock">
    <Container>
      <BaseSwiper>
        <template v-for="(card, i) in props.data.sections" :key="i">
          {{card}}
          <SwiperSlide>
            <RouterLink :to="`/news/${card.slug}`" type="newsLink">
              <Card
                  :data="card"
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