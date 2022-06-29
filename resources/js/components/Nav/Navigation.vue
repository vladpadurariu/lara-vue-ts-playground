<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
import { useLanguage } from '@/composables/useLanguage';

const { setLanguage, languageIsSet } = useLanguage();

</script>

<template>
  <nav>
    <div>Logo</div>
    <Link
      v-if="languageIsSet"
      as="button"
      type="button"
      class="button"
      :href="`/`"
      @click="setLanguage(false)"
    >
      Chose language
    </Link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  height: 2rem;
  justify-content: space-between;
  width: 100%;
}
</style>
