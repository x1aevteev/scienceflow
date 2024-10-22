<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";

const store = pageStore()

onMounted(() => {
  store.getEvents()
})

</script>

<template>
<template v-for="(event, i) in store.events.sections">
  <p>{{event.name}} {{event.slug}}</p>
  <RouterLink :to="`/events/${event.slug}`">
    Подробнее
  </RouterLink>
</template>
</template>

<style scoped lang="scss">

</style>