<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
import { useLanguage } from '@/composables/useLanguage';

const { setLanguage, languageIsSet } = useLanguage();

</script>

<template>
  <nav class="container-layout">
    <div>Logo</div>
    <Link
      v-if="languageIsSet"
      as="button"
      type="button"
      class="button"
      :href="`/`"
      @click="setLanguage(false, 'en')"
    >
      Chose language
    </Link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  align-items: center;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  width: 100%;
}
</style>
