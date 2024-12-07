<script setup lang="ts">
// Styles
import './styles.scss';

// Types
type ImageProps = {
  src: string;
  alt?: string;
  title?: string;
};

withDefaults(defineProps<ImageProps>(), {
  alt: '',
  title: '',
});
</script>

<template>
  <img class="Image" :src="src" :alt="alt" :title="title" loading="lazy" decoding="async" />
</template>
