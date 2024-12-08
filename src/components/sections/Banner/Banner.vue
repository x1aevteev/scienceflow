<script setup lang="ts">
import './styles.scss'
import {onMounted} from "vue";
import {pageStore} from "@/stores/MainStore";
import Image from "@/components/base/Image/Image.vue";
import Container from "@/components/base/Container/Container.vue";
const store = pageStore()

onMounted(()=>{
  store.getMainBanner()
})
</script>

<template>

</template>

<style scoped lang="scss">

</style>