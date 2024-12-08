<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import Container from "@/components/base/Container/Container.vue";
import NewsItemCard from "@/components/sections/News/NewsItemCard/NewsItemCard.vue";
import Card from "@/components/base/Card/Card.vue";

const store = pageStore()

</script>

<template>
  <Container>
    <Section>
      <ul class="NewsPage__list">
        <li class="NewsPage__item News__card" v-for="(card,i) in store.news.sections" :key="i">
          <RouterLink :to="`/news/${card.slug}`" type="newsLink">
            <Card
                :data="card"
            />
          </RouterLink>
        </li>
      </ul>
    </Section>
  </Container>
</template>

<style scoped lang="scss">

</style>