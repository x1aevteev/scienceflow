<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

//TODO: fix props to get single page

const route = useRoute()
console.log(route.params.parent, route.params.slug)

const props = defineProps({
  parent: String,
  slug: String,
})

onMounted(async()=>{
  if (props.parent && props.slug) {
    await store.getSinglePage(props.parent, props.slug)
  } else {
    console.error('Parent or slug is missing')
  }
})

const store = pageStore()
</script>

<template>

</template>

<style scoped lang="scss">

</style>