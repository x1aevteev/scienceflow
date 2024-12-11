<script setup lang="ts">

import {pageStore} from "@/stores/MainStore";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";
import {onMounted, PropType} from "vue";
import Container from "@/components/base/Container/Container.vue";
import {useRoute} from "vue-router";

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
    <BreadCrumbs second-text="Новости" :second-link="`/${store.singleItem.parent}`" :third-text="store.singleItem.name"/>
    {{store.singleItem}}
<!--    <h3-->
<!--        class="text-h4 font-bold text-start"-->
<!--        v-if="props.data.title"-->
<!--    >{{props.data.title}}</h3>-->
  </Container>
</template>

<style scoped lang="scss">

</style>