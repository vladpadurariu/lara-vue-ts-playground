<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';

const state = useLanguage();
</script>

<template>
  <nav>
    <div>Logo</div>
    <a
      v-if="state.languageIsSet"
      aria-hidden="true"
      @click="state.setLanguage()"
    >
      Chose language
    </a>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  height: 2rem;
  justify-content: space-between;
  width: 100%;

  a {
    color: rgb(255, 255, 255);
    padding: 0.2rem 1rem;
    text-decoration: none;

    &:hover {
      background: rgb(255, 0, 0);
    }
  }
}
</style>
