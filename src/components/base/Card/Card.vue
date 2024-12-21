<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    required: true,
  },
  cardFormat: {
    type: String,
    required: true,
  }
})
// const concatText = (text: any) => {
//   if (text.length > 20){
//     return text.slice(0, 20) + ('...')
//   }
// }

const store = pageStore()
console.log(props.cardFormat)
</script>

<template>
  <div class="card flex flex-col rounded-2xl justify-center gap-3 w-full overflow-hidden" :class="{'max-w-[200px]':props.data.parent === 'lections', 'max-w-[290px]': props.cardFormat !== 'big'}">
    <div
        class="w-full bg-black"
        :class="{'h-[100px]': props.data.cardFormat !== 'big', 'max-w-[290px]': props.cardFormat !== 'big', 'h-[400px]': props.cardFormat === 'big'}"
        v-if="props.data.parent != 'lections'"
    >
      {{props.data.img}}
    </div>
    <div class="p-6"
    v-if="props.cardFormat === 'big'"
    >
      <p
          class="text-left"
      >Автор - @{{store.singleItem.author}}</p>
      <div class="chips flex gap-2">
        <VChip
            v-for="tag in store.singleItem.tags"
            :key="tag.id"
            class="max-w-[100px]"
        >
          #{{ tag.name }}
        </VChip>
      </div>
    </div>
    <div
        class="card__text py-2 px-2 flex flex-col gap-1 items-start max-w-full w-full" v-if="props.cardFormat !== 'big'"
    >{{ props.data.name }}
      <div
          class="card__text-subtitle text-gray-500 text-sm"
          v-if="props.cardFormat !== 'big'"
      >
        {{props?.data?.description}}
      </div>
    </div>
    <div
        class="max-w-full w-full flex justify-end pr-5"
    >
      <template
      v-if="props.cardFormat !== 'big'"
      >
        <RouterLink
            :to="{ name: `${props.data.parent}-item`, params: { parent: props.data.parent, slug: props.data.slug } }"
            @click="console.log(props.data.parent, props.data.slug)"
        >
          <p>Подробнее</p>
        </RouterLink>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>