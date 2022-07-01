<script setup lang="ts">
import type { PropType } from 'vue';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Greeting } from './GreetingCarousel';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';

defineProps({
  greetings: {
    type: Array as PropType<Array<Greeting>>,
    required: true,
  },
});

const modules = [EffectFade, Pagination, Navigation];

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
      v-for="greeting in greetings"
      :key="greeting.uuid"
    >
      {{ greeting.greeting }}
    </swiper-slide>
  </swiper>
</template>

<style  lang="scss" scoped>
.swiper-slide {
  align-items: center;
  background: #fff;
  color: $primary;
  display: flex;
  font-family: DINPro;
  font-size: $size-3;
  font-weight: $weight-medium;
  height: 10rem;
  justify-content: center;
}

</style>
