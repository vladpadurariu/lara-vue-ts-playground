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
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 2rem;
  }
}
</style>
