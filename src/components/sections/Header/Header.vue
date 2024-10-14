<script setup lang="ts">
import './styles.scss'


//icons
import { useCounterStore } from '@/stores/MainStore'
import Logo from "@/components/icons/Logo.vue";
import SearchBar from "@/components/sections/SearchBar/SearchBar.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import TicketsLogo from "@/components/icons/TicketsLogo.vue";
import FavIcon from "@/components/icons/FavIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import Container from "@/components/base/Container/Container.vue";


const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()

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
          <li>
            <!--          TODO с бэка данные о городе-->
            <LocationIcon/>
            Калуга
          </li>
          <li>
            <RouterLink :to="{name: 'tickets'}"><TicketsLogo/>
              Мои билеты</RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <FavIcon/>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'profile'}">
              <ProfileIcon/>
            </RouterLink>
          </li>
        </ul>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="scss">

</style>