<script setup lang="ts">
import {defineComponent, onMounted} from 'vue';
import Banner from "@/components/sections/Banner/Banner.vue";
import {pageStore} from "@/stores/MainStore";
import MainPageBlock from "@/components/base/MainPageBlock/MainPageBlock.vue";

const store = pageStore()

onMounted(async ()=>{
  if(!store.allBlocksInfo.length){
    await store.getSlugs()
    await store.getInfo(store.allBlocks)
    console.log(store.allBlocksInfo)
  }
})

console.log(store.allBlocksInfo)
</script>


<template>
  <nav class="home flex flex-col gap-4">
    <template
        v-for="(item,i) in store.allBlocksInfo"
    >
      <MainPageBlock
      :data="item"
      />
    </template>
  </nav>
</template>

<style scoped lang="scss">
.home{
  margin-bottom: 30px;
}
</style>
