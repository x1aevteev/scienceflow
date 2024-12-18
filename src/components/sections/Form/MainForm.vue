<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  isLoggedIn: Boolean,
  isAuthenticated: Boolean,
})

</script>

<template>
  <template v-if="!isLoggedIn && !isAuthenticated">
    Тут будет форма
  </template>
  <template v-if="isLoggedIn && !isAuthenticated">

  </template>
</template>

<style scoped lang="scss">

</style>