<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';

// const { setLanguage, languageIsSet } = useLanguage();

</script>

<template>
  <nav>
    <div>Logo</div>
    <div>{{ useLanguage().languageIsSet }}</div>
    <a
      v-if="useLanguage().languageIsSet.value === true"
      aria-hidden="true"
      :href="`/`"
      @click="useLanguage().setLanguage(false)"
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
    color: rgb(176, 50, 50);
    padding: 0.2rem 1rem;
    text-decoration: none;
  }

  a:hover {
    background: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
  }
}
</style>
