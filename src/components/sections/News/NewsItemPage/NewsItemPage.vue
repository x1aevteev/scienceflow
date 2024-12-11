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

const store = pageStore()

const props = defineProps({
  parent: String,
  slug: String,
})

const route = useRoute()

onMounted(async()=>{
  console.log('Route params:', route.params.parent, route.params.slug);
  if (route.params.parent && route.params.slug) {
    await store.getSinglePage(route.params.parent, route.params.slug)
  } else {
    console.error('Parent or slug is missing')
  }

  await store.getNews()
})

let item = store.singleItem

</script>

<template>
  <Container>
    <BreadCrumbs second-text="Новости" :second-link="`/${item.parent}`" :third-text="item.name"/>
    <div class="flex flex-col gap-6">
      <div class="item-head grid grid-cols-6 gap-6 w-full">
        <div class="names col-span-3">
          <h3
              class="text-h1 font-bold text-start w-full"
              v-if="item.name"
          >
         <span v-for="(word, index) in item.name.trim().split(/\s+/)" :key="index">
            {{ word }}<span v-if="index === item.name.trim().split(/\s+/).length - 1">.</span>
            <br />
          </span>
          </h3>
          <div class="col-span-3 flex-wrap gap-2 mt-4 flex flex-col justify-center">
            <p
                class="text-left"
            >Автор - @{{item.author}}</p>
            <div class="chips flex gap-2">
              <VChip
                  v-for="tag in item.tags"
                  :key="tag.id"
                  class="max-w-[100px]"
              >
                #{{ tag.name }}
              </VChip>
            </div>
          </div>
        </div>
        <div class="col-span-3 max-w-full w-full bg-black rounded-xl" v-if="item.img !== null">
          <Image :src="item.img"/>
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
              {{ item.content }}
            </p>
          </div>
          <div class="bg-black w-full h-full rounded-xl"/>
          <div class="bg-black w-full h-full rounded-xl"/>
          <div class="col-span-2 text-left">
            <p class="text-lg">
              {{ item.content }}
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