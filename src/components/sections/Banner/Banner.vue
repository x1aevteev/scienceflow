<script setup lang="ts">
import './styles.scss'
import {onMounted} from "vue";
import {pageStore} from "@/stores/MainStore";
import Image from "@/components/base/Image/Image.vue";
import Container from "@/components/base/Container/Container.vue";
const store = pageStore()



onMounted(()=>{
  store.getMainBanner()
  console.log(store.mainBanner.name)
})
</script>

<template>
  <div class="Banner">
    <Container>
      <Image :alt="store.mainBanner.name" :src="store.mainBanner.url"/>
    </Container>
  </div>
</template>

<style scoped lang="scss">

</style>