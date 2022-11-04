<!-- eslint-disable max-len -->
/* eslint-disable import/no-unresolved */
<script setup lang="ts">
import { onMounted, PropType } from 'vue';

// eslint-disable-next-line import/extensions, import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination } from 'swiper';

import type { Audio } from './AudioCarousel';

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
  audios: {
    type: Array as PropType<Array<Audio>>,
    required: true,
  },
});

</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :effect="'fade'"
    :rewind="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :centered-slides="true"
  >
    <swiper-slide
      v-for="song in audios"
      :key="song.name"
    >
      <audio controls>
        <track kind="captions">
        <source
          :src="'../../../music/' + song.source"
          type="audio/mpeg"
        >
      </audio>

      {{ song.name }}
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
