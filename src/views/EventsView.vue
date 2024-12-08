<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import SinglePageBlock from "@/components/base/SinglePageBlock/SinglePageBlock.vue";
import {onMounted} from "vue";
const store = pageStore()

onMounted(()=>{
  store.getEvents()
})
</script>

<template>
  <SinglePageBlock
  :data="store.events"
  />
</template>

<style scoped lang="scss">

</style>