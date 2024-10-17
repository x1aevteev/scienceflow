<script setup lang="ts">
// Sections
import Section from '@/components/base/Section/Section.vue';

// Styles
import './styles.scss';

defineProps<{
  secondText: string;
  secondLink?: string;
  thirdText?: string;
}>();
</script>

<template>
  <Section class="BreadCrumbs">
    <div class="BreadCrumbs__block">
      <RouterLink to="/" class="BreadCrumbs__link" type="noStyle">Главная</RouterLink>

      <span class="BreadCrumbs__text"> > </span>
      <span class="BreadCrumbs__text" v-if="!thirdText">{{ secondText }}</span>
      <RouterLink
        :to="secondLink"
        class="BreadCrumbs__link"
        v-if="thirdText && secondLink"
        type="noStyle"
      >
        {{ secondText }}
      </RouterLink>

      <span class="BreadCrumbs__text" v-if="thirdText"> > </span>
      <span class="BreadCrumbs__text" v-if="thirdText">{{ thirdText }}</span>
    </div>
  </Section>
</template>
