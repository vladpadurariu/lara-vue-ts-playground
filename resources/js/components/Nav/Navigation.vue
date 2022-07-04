<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
import { useLanguage } from '@/composables/useLanguage';

const { setLanguage, languageIsSet } = useLanguage();

</script>

<template>
  <nav>
    <div class="container-layout">
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
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: $light;
  display: flex;
  height: 3rem;
}

.container-layout {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
}
</style>
