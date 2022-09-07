<script setup lang="ts">
import type { PropType } from 'vue';
import { EffectFade, Navigation, Pagination } from 'swiper';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/vue';

import type { Theme } from './ThemeCarousel';

// Import Swiper styles
// eslint-disable-next-line import/extensions, import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import 'swiper/scss/navigation';
// eslint-disable-next-line import/extensions, import/no-unresolved
import 'swiper/scss/pagination';
// eslint-disable-next-line import/extensions, import/no-unresolved
import 'swiper/css/effect-fade';

const modules = [EffectFade, Pagination, Navigation];

defineProps({
  themes: {
    type: Array as PropType<Array<Theme>>,
    required: true,
  },
});
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
      v-for="theme in themes"
      :key="theme.uuid"
    >
      {{ theme.name }}
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
  .swiper-slide {
    align-items: center;
    background: $night-blue;
    color: $primary;
    display: flex;
    font-family: DINPro;
    font-size: $size-3;
    font-weight: $weight-medium;
    height: 10rem;
    justify-content: center;
  }
</style>
