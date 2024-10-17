<script setup lang="ts">
import './styles.scss'
import Button from "@/components/base/Button/Button.vue";

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
</script>

<template>
<!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
<div class="card">
  <div class="card__image">{{props.img}}</div>
  <div class="card__text">
    <div class="card__text-name">{{ props.name }}</div>
    <div class="card__text-subtitle">{{concatText(props.subtitle)}}</div>
  </div>
  <div class="card__btn">
    <RouterLink :to="`/news/${props.slug}`">Подробнее</RouterLink>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>