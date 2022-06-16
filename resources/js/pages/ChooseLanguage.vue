<script setup lang="ts">
import type { ChooseLanguagePage } from '@/types/pages';
import AppLanguageCard from '@/components/Card/LanguageCard.vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

const languages = computed(() => usePage<ChooseLanguagePage>().props.value.languages);

</script>

<template>
  <div class="content">
    <h2>Choose your language</h2>
    <AppLanguageCard :languages="languages" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
  }
}
</style>
