<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';

const store = useLanguage();
</script>

<template>
  <nav>
    <div>Logo</div>
    <router-link
      v-if="store.languageIsSet"
      to="\/"
      @click="store.setLanguage()"
    >
      Chose language
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  a {
    padding: 0.2rem 1rem;
    text-decoration: none;
    color: white;
    &:hover {
      background: red;
    }
  }
}
</style>
