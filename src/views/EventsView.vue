<script setup lang="ts">
import EventsBlock from "@/components/sections/Events/EventsBlock/EventsBlock.vue";
import {pageStore} from "@/stores/MainStore";
const store = pageStore()
</script>

<template>
<EventsBlock
:data="store.events"
/>
</template>

<style scoped lang="scss">

</style>