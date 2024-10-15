<script setup lang="ts">
import './styles.scss'
import Container from "@/components/base/Container/Container.vue";

const tags = [
  {
    name: 'Главная',
    route: '/'
  },
  {

  }
]
</script>

<template>
<div class="tags-block">
  <Container>
<!--    TODO сюда будет передаваться массив данных с бэка с тегами-->
    <ul></ul>
  </Container>
</div>
</template>

<style scoped lang="scss">

</style>