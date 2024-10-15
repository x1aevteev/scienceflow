<script setup lang="ts">
import './styles.scss'
import {pageStore} from "@/stores/MainStore";
import Container from "@/components/base/Container/Container.vue";

const store = pageStore()

store.getBlockRoutes()
</script>

<template>
<div class="navigation-block">
  <Container>
    <ul>
      <li v-for="(item, i) in store.navigationBLock.sections" :key="i">
        <RouterLink :to="item.route">
          {{item.name}}
        </RouterLink>
      </li>
    </ul>
  </Container>
</div>
</template>

<style scoped lang="scss">

</style>