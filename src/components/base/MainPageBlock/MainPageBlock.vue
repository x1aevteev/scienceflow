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

console.log(props.data)
</script>

<template>
  <Container>
    <template v-if="props.data.mainPageCondition === 'block'">
        <h3
            class="text-h4 font-bold text-start"
            v-if="props.data.title"
        >{{props.data.title}}</h3>
      <div class="grid grid-cols-4 w-full content-center gap-10">
        <template v-for="(event, i) in props.data.sections.slice(0,4)">
          <Card
              :data="event"
          />
        </template>
      </div>
      <div class="pt-8">
        <RouterLink :to="`/${props.data.name}`" type="newsLink" class="max-w-[300px] w-full rounded-xl border p-4 !border-black">
          Посмотреть больше
        </RouterLink>
      </div>
    </template>
    <template v-if="props.data.mainPageCondition === 'swiper'">
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
    <template v-if="props.data.mainPageCondition === 'banner'">
      <div class="Banner">
        <Image :alt="props.data.name" :src="props.data?.url"/>
      </div>
    </template>
  </Container>
</template>

<style scoped lang="scss">

</style>