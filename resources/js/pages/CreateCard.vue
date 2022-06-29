<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';

</script>

<template>
  <div class="container">
    <h1>This is the create card page</h1>
    <h2>{{ useLanguage().languageIsSet.value }}</h2>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
