<script setup lang="ts">

import {pageStore} from "@/stores/MainStore";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";
import {onMounted, PropType} from "vue";
import Container from "@/components/base/Container/Container.vue";
import {useRoute} from "vue-router";
import Image from "@/components/base/Image/Image.vue";
import Card from "@/components/base/Card/Card.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";
import {watch} from "vue";
import {nextTick} from "vue";

const props = defineProps({
  parent: String,
  slug: String,
});

const route = useRoute();
const store = pageStore()

const fetchData = async (parent: string | undefined, slug: string | undefined) => {
  if (parent && slug) {
    console.log('Fetching data for:', parent, slug);
    await store.$patch({ singleItem: {} }); // Сброс старых данных
    await store.getSinglePage(parent, slug);
  } else {
    console.error('Parent or slug is missing');
  }
};

// Отслеживаем изменения параметров маршрута
watch(
    () => route.params, // Следим за параметрами маршрута
    async (newParams, oldParams) => {
      console.log('Route changed:', newParams);
      await fetchData(newParams.parent as string, newParams.slug as string);
      await store.getNews();

      await nextTick();

      console.log('Updated singleItem:', store.singleItem);// Загружаем новости при изменении маршрута
    },
    { immediate: true } // Вызываем сразу для начальной загрузки данных
);

</script>

<template>
  <Container :key="route.params.slug">
    <BreadCrumbs second-text="Новости" :second-link="`/${store.singleItem.parent}`" :third-text="store.singleItem.name"/>
    <div class="flex flex-col gap-6">
      <div class="item-head grid grid-cols-6 gap-6 w-full">
        <div class="names col-span-3">
          <h3
              class="text-h1 font-bold text-start w-full"
              v-if="store.singleItem.name"
          >
         <span v-for="(word, index) in store.singleItem.name.trim().split(/\s+/)" :key="index">
            {{ word }}<span v-if="index === store.singleItem.name.trim().split(/\s+/).length - 1">.</span>
            <br />
          </span>
          </h3>
          <div class="col-span-3 flex-wrap gap-2 mt-4 flex flex-col justify-center">
            <p
                class="text-left"
            >Автор - @{{store.singleItem.author}}</p>
            <div class="chips flex gap-2">
              <VChip
                  v-for="tag in store.singleItem.tags"
                  :key="tag.id"
                  class="max-w-[100px]"
              >
                #{{ tag.name }}
              </VChip>
            </div>
          </div>
        </div>
        <div class="col-span-3 max-w-full w-full bg-black rounded-xl" v-if="store.singleItem.img !== null">
          <Image :src="store.singleItem.img"/>
        </div>
      </div>
      <div class="other-img">
        <BaseSwiper>
          <template v-for="i in 15" :key="i">
            <SwiperSlide>
              <div class="bg-black w-full h-[180px] rounded-xl"/>
            </SwiperSlide>
          </template>
        </BaseSwiper>
      </div>
      <div class="content">
        <div class="grid grid-cols-3 gap-10">
          <div class="col-span-2 text-left">
            <p class="text-lg">
              {{ store.singleItem.content }}
            </p>
          </div>
          <div class="bg-black w-full h-full rounded-xl"/>
          <div class="bg-black w-full h-full rounded-xl"/>
          <div class="col-span-2 text-left">
            <p class="text-lg">
              {{ store.singleItem.content }}
            </p>
          </div>
        </div>
      </div>
      <h3
          class="text-h4 font-bold text-start"
          v-if="store.news.title"
      >{{store.news.title}}</h3>
      <BaseSwiper>
        <template v-for="(card, i) in store.news.sections" :key="i">
          <SwiperSlide>
            <RouterLink :to="`/${card.parent}/${card.slug}`" type="newsLink">
              <Card
                  :data="card"
              />
            </RouterLink>
          </SwiperSlide>
        </template>
      </BaseSwiper>
    </div>
  </Container>
</template>

<style scoped lang="scss">
</style>