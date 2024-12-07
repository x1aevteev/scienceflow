<script setup lang="ts">

import {pageStore} from "@/stores/MainStore";

const store = pageStore()

</script>

<template>
{{store.singleNews}}
</template>

<style scoped lang="scss">

</style>