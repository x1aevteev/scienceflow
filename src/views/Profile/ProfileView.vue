<script setup lang="ts">
import {userStore} from "@/stores/userStore";
import MainForm from "@/components/sections/Form/MainForm.vue";
import Container from "@/components/base/Container/Container.vue";

const store = userStore()
</script>

<template>
<Container class="flex-grow-1">
  <MainForm
      :is-authenticated="store.isAuthenticated"
      :is-logged-in="store.isLoggedIn"
  />
</Container>
</template>

<style scoped lang="scss">

</style>