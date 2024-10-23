<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";

const store = pageStore()

onMounted(() => {
  store.getEvents()
})

</script>

<template>
  <div class="events-block">
    <template v-for="(event, i) in store.events.sections">
      <div class="event">
        <p>{{event.name}} {{event.slug}}</p>
        <RouterLink :to="`/events/${event.slug}`">
          Подробнее
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>