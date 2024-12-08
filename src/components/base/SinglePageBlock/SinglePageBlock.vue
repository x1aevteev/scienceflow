<script setup lang="ts">
import type {PropType} from "vue";
import Container from "@/components/base/Container/Container.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";
import Card from "@/components/base/Card/Card.vue";
import Image from "@/components/base/Image/Image.vue";
import './styles.scss'

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    required: true,
  },
})
</script>

<template>
  <Container>
    <template v-if="props.data.singlePageCondition === 'block'">
      <h3
          class="text-h4 font-bold text-start"
          v-if="props.data.title"
      >{{props.data.title}}</h3>
      <div class="grid grid-cols-3 w-full items-center gap-10">
        <template v-for="(event, i) in props.data.sections">
          <div class="event flex justify-center">
            <Card
                :data="event"
            />
          </div>
        </template>
      </div>
    </template>
    <template v-if="props.data.singlePageCondition === 'swiper'">
      <h3
          class="text-h4 font-bold text-start"
          v-if="props.data.title"
      >{{props.data.title}}</h3>
      <BaseSwiper>
        <template v-for="(card, i) in props.data.sections" :key="i">
          <SwiperSlide>
            <RouterLink :to="`/${props.data.parent}/${card.slug}`" type="newsLink">
              <Card
                  :data="card"
              />
            </RouterLink>
          </SwiperSlide>
        </template>
      </BaseSwiper>
    </template>
    <template v-if="props.data.singlePageCondition === 'banner'">
      <div class="Banner">
        <Image :alt="props.data.name" :src="props.data?.url"/>
      </div>
    </template>
  </Container>
</template>

<style scoped lang="scss">

</style>