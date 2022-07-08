<script setup lang="ts">
import type { PropType } from 'vue';

import type { Theme } from './ThemeCarousel';

defineProps({
  themes: {
    type: Array as PropType<Array<Theme>>,
    required: true,
  },
});
</script>

<template>
  <div>
    {{ themes }}
  </div>
</template>

<!-- <style lang="scaa" scoped></style> -->
