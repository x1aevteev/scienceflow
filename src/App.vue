<script setup lang="ts">
import Header from "@/components/sections/Header/Header.vue";
import Footer from "@/components/sections/Footer/Footer.vue";
import NavigationBlock from "@/components/sections/NavigationBlock/NavigationBlock.vue";
</script>

<template>
  <Header/>
  <router-view class="flex flex-col flex-1"/>
  <Footer/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
