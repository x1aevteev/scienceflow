<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";

const props = defineProps({
  name: String,
  subtitle: String,
  slug: String,
  img: String
})

const store = pageStore()
</script>

<template>
  <!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
  <div class="events-card">
    <div class="events-card__image">{{props.img}}</div>
    <div class="events-card__text">
      <div class="events-card__text-name">{{ props.name }}</div>
    </div>
    <div class="events-card__btn">
      <RouterLink :to="`/news/${props.slug}`"
                  @click="store.getSingleNewsPage(props.slug)"
      >Подробнее</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>