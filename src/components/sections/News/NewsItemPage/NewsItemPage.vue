<script setup lang="ts">

import {pageStore} from "@/stores/MainStore";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";
import {onMounted, PropType} from "vue";
import Container from "@/components/base/Container/Container.vue";

const store = pageStore()

const props = defineProps({
  parent: String,
  slug: String,
})

onMounted(async()=>{
  console.log(props.parent && props.slug)
  if (props.parent && props.slug) {
    await store.getSinglePage(props.parent, props.slug)
  } else {
    console.error('Parent or slug is missing')
  }
})

</script>

<template>
  <Container>
    <BreadCrumbs second-text="Новости" />
    {{props}}
    {{$route.params}}
    {{store.singleItem}}
<!--    <h3-->
<!--        class="text-h4 font-bold text-start"-->
<!--        v-if="props.data.title"-->
<!--    >{{props.data.title}}</h3>-->
  </Container>

{{store.singleNews}}
</template>

<style scoped lang="scss">

</style>