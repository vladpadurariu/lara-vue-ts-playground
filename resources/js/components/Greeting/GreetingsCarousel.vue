/* eslint-disable import/no-unresolved */
<script setup lang="ts">
import type { PropType } from 'vue';

import type { Greeting } from './GreetingCarousel';

defineProps({
  greetings: {
    type: Array as PropType<Array<Greeting>>,
    required: true,
  },
});

// const modules = [EffectFade, Pagination, Navigation];

</script>

<template>
  <swiper
    :slides-per-view="1"
    :effect="'fade'"
    :rewind="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :centered-slides="true"
  >
    <swiper-slide
      v-for="greeting in greetings"
      :key="greeting.uuid"
    >
      {{ greeting.greeting }}
    </swiper-slide>
  </swiper>
</template>

<!-- <style  lang="scss" scoped></style> -->
