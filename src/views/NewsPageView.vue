<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";
import SinglePageBlock from "@/components/base/SinglePageBlock/SinglePageBlock.vue";

const store = pageStore()

onMounted(()=>{
  store.getNews()
})
</script>

<template>
  <SinglePageBlock
      :data="store.news"
  />
</template>

<style scoped lang="scss">

</style>