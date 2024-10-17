<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";

const props = defineProps({
  name: String,
  subtitle: String,
  slug: String,
  img: String
})

const concatText = (text: any) => {
  if (text.length > 20){
    return text.slice(0, 20) + ('...')
  }
}

const store = pageStore()
</script>

<template>
  <!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
  <div class="news-card">
    <div class="news-card__image">{{props.img}}</div>
    <div class="cnews-card__text">
      <div class="news-card__text-name">{{ props.name }}</div>
      <div class="news-card__text-subtitle">{{concatText(props.subtitle)}}</div>
    </div>
    <div class="news-card__btn">
      <RouterLink :to="`/news/${props.slug}`"
      @click="store.getSingleNewsPage(props.slug)"
      >Подробнее</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>