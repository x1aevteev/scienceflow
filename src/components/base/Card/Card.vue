<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    required: true,
  },
})

console.log(props.data)

// const concatText = (text: any) => {
//   if (text.length > 20){
//     return text.slice(0, 20) + ('...')
//   }
// }

const store = pageStore()
</script>

<template>
  <!--  TODO здесь пропсами будет получаться инфа для карточки, сейчас хард-код-->
  <div class="card">
    <div class="card__image">{{props.data.img}}</div>
    <div class="card__text">
      <div class="card__text-name">{{ props.data.img }}</div>
      <div class="card__text-subtitle">{{props?.data?.subtitle}}</div>
    </div>
    <div class="card__btn">
      <RouterLink :to="`/${props.data.parent}/${props.data.slug}`"
                  @click="store.getSingleNewsPage(props.data.slug)"
      >Подробнее</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>