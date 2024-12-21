<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import {nextTick, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";
import Card from "@/components/base/Card/Card.vue";
import Container from "@/components/base/Container/Container.vue";
import {SwiperSlide} from 'swiper/vue';
import BaseSwiper from "@/components/sections/Swiper/BaseSwiper/BaseSwiper.vue";

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
    <div class="flex flex-col gap-6">
      <BreadCrumbs second-text="События" :second-link="`/${store.singleItem.parent}`" :third-text="store.singleItem.name"/>
      <h1 class="text-left text-h3 font-semibold">{{store.singleItem.name}}</h1>
      <Card :card-format="'big'" :data="store.singleItem"/>
      <div class="other-img">
        <BaseSwiper>
          <template v-for="i in 15" :key="i">
            <SwiperSlide>
              <div class="bg-black w-full h-[180px] rounded-xl"/>
            </SwiperSlide>
          </template>
        </BaseSwiper>
      </div>
    </div>
  </Container>
</template>

<style scoped lang="scss">

</style>