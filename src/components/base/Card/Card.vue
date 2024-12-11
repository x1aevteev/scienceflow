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
// const concatText = (text: any) => {
//   if (text.length > 20){
//     return text.slice(0, 20) + ('...')
//   }
// }

const store = pageStore()
</script>

<template>
  <div class="card">
    <div class="card__image">{{props.data.img}}</div>
    <div class="card__text px-4">
      <p class="card__text-name">{{ props.data.name }}</p>
      <div class="card__text-subtitle">{{props?.data?.subtitle}}</div>
    </div>
    <div class="card__btn">
      <RouterLink :to="{ name: `${props.data.parent}-item`, params: { parent: props.data.parent, slug: props.data.slug } }"
                  @click="console.log(props.data.parent, props.data.slug)"
      >
        <p>Подробнее</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>