<script setup lang="ts">
import './styles.scss'
import Button from "@/components/base/Button/Button.vue";
</script>

<template>
<!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
<div class="card">
  <div class="card__image"></div>
  <div class="card__text">
    <div class="card__text-name">Название</div>
    <div class="card__text-subtitle">Краткое название</div>
  </div>
  <div class="card__btn">
    <Button>Подробнее</Button>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>