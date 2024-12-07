<script setup lang="ts">

//imports
import Container from "@/components/base/Container/Container.vue";
import BreadCrumbs from "@/components/sections/BreadCrumbs/BreadCrumbs.vue";
import {NewsSections} from "@/types/news";
import NewsItemPage from "@/components/sections/News/NewsItemPage/NewsItemPage.vue";
import {pageStore} from "@/stores/MainStore";

const store = pageStore()
</script>

<template>
<Container>

<!--  :thirdText="data.name"-->
  <BreadCrumbs second-text="Новости" />
  <NewsItemPage/>
</Container>
</template>

<style scoped lang="scss">

</style>