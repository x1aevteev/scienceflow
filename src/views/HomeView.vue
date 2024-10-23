<script setup lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/sections/Header/Header.vue";
import Footer from "@/components/sections/Footer/Footer.vue";
import Card from "@/components/sections/Card/Card.vue";
import NewsBlock from "@/components/sections/News/NewsBlock/NewsBlock.vue";
import EventsBlock from "@/components/sections/Events/EventsBlock/EventsBlock.vue";
import Banner from "@/components/sections/Banner/Banner.vue";

</script>


<template>
  <nav class="home">
    <NewsBlock/>
    <EventsBlock/>
    <Banner/>
  </nav>
</template>

<style scoped lang="scss">
.home{
  margin-bottom: 30px;
}
</style>
