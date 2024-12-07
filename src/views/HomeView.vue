<script setup lang="ts">
import {defineComponent, onMounted} from 'vue';
import Header from "@/components/sections/Header/Header.vue";
import Footer from "@/components/sections/Footer/Footer.vue";
import Card from "@/components/sections/Card/Card.vue";
import NewsBlock from "@/components/sections/News/NewsBlock/NewsBlock.vue";
import EventsBlock from "@/components/sections/Events/EventsBlock/EventsBlock.vue";
import Banner from "@/components/sections/Banner/Banner.vue";
import {pageStore} from "@/stores/MainStore";

const store = pageStore()

onMounted(()=>{
  store.getNews()
  store.getEvents()
  store.getMainBanner()
  console.log(store.news)
})

</script>


<template>
  <nav class="home flex flex-col gap-4">
    <NewsBlock
    :data="store.news"
    />
    <EventsBlock
    :data="store.events"
    />
    <Banner
    :store="store.mainBanner"
    />
  </nav>
</template>

<style scoped lang="scss">
.home{
  margin-bottom: 30px;
}
</style>
