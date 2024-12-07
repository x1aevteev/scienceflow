<script setup lang="ts">
import './styles.scss'


//icons
import {pageStore} from '@/stores/MainStore'
import Logo from "@/components/icons/Logo.vue";
import SearchBar from "@/components/sections/SearchBar/SearchBar.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import TicketsLogo from "@/components/icons/TicketsLogo.vue";
import FavIcon from "@/components/icons/FavIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import Container from "@/components/base/Container/Container.vue";
import NavigationBlock from "@/components/sections/NavigationBlock/NavigationBlock.vue";


const store = pageStore()

store.getHeader()

</script>

<template>
  <header>
    <Container>
      <div class="header">
        <RouterLink to="/">
          <Logo/>
        </RouterLink>
        <ul class="header__list">
          <li>
            <SearchBar/>
          </li>
          <li v-for="(item, i) in store.header.sections" :key="i">
            <template v-if=" item.block === 'location' ">
              <LocationIcon/>
              {{item?.location}}
            </template>
            <template v-if="item.block === 'personal'">
              <RouterLink :to="item.route">
              <ProfileIcon/>
              </RouterLink>
            </template>
            <RouterLink :to="item.route">
              {{item.name}}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Container>
    <NavigationBlock/>
  </header>
</template>

<style scoped lang="scss">

</style>