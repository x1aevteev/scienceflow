<script setup lang="ts">

import Container from "@/components/base/Container/Container.vue";
import Logo from "@/components/icons/Logo.vue";
</script>

<template>
<footer>
  <Container class="flex flex-col items-center gap-5">
    <Logo/>
    <div class="flex gap-4">
      <p>© x1aevteev, 2024</p>
      <a href="https://github.com/x1aevteev/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/github-mark.svg" alt="">
      </a>
    </div>
  </Container>
</footer>
</template>

<style scoped lang="scss">
img{
  width: 25px;
  height: 25px;
}
</style>