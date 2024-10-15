<script setup lang="ts">
import './styles.scss'
import Button from "@/components/base/Button/Button.vue";

const props = defineProps({
  name: String,
  subtitle: String,
  slug: String,
  img: String
})
</script>

<template>
<!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
<div class="card">
  <div class="card__image">{{props.img}}</div>
  <div class="card__text">
    <div class="card__text-name">{{ props.name }}</div>
    <div class="card__text-subtitle">{{props.subtitle}}</div>
  </div>
  <div class="card__btn">
    <Button>Подробнее</Button>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>