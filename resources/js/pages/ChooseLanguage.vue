<script setup lang="ts">
import type { ChooseLanguagePage } from '@/types/pages';
import AppLanguageCard from '@/components/Card/LanguageCard.vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

const languages = computed(() => usePage<ChooseLanguagePage>().props.value.languages);

</script>

<template>
  <div class="content">
    <h1>Choose your language</h1>
    <AppLanguageCard :languages="languages" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: xx-large;
    margin-bottom: 2rem;
  }
}
</style>
