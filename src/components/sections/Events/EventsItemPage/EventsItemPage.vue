<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";

//TODO: fix request to get single page

const store = pageStore()

const props = defineProps({
  parent: String,
  slug: String,
})

const route = useRoute()

onMounted(async()=>{
  console.log('Route params:', route.params.parent, route.params.slug);
  if (route.params.parent && route.params.slug) {
    await store.getSinglePage(route.params.parent, route.params.slug)
  } else {
    console.error('Parent or slug is missing')
  }
})
</script>

<template>
  <Container>
    <BreadCrumbs second-text="События" :second-link="`/${store.singleItem.parent}`" :third-text="store.singleItem.name"/>
    {{store.singleItem}}
  </Container>
</template>

<style scoped lang="scss">

</style>