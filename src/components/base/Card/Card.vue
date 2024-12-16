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
  <div class="card flex flex-col rounded-2xl justify-center max-w-[290px] gap-3 w-full overflow-hidden" :class="{'flex-col':props.data.parent === 'lections', 'max-w-[200px]':props.data.parent === 'lections'}">
    <div
        class="h-[100px] max-w-[290px] w-full bg-black"
        v-if="props.data.parent != 'lections'"
    >
      {{props.data.img}}
    </div>
    <div
        class="card__text px-4 flex flex-col gap-5 items-start max-w-full w-full"
    >
      <p
          class="card__text-name"
      >
        {{ props.data.name }}
      </p>
      <div
          class="card__text-subtitle text-gray-500 text-sm"
      >
        {{props?.data?.description}}
      </div>
    </div>
    <div
        class="card__btn max-w-full w-full flex justify-end pr-5"
    >
      <RouterLink
          :to="{ name: `${props.data.parent}-item`, params: { parent: props.data.parent, slug: props.data.slug } }"
                  @click="console.log(props.data.parent, props.data.slug)"
      >
        <p>Подробнее</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>