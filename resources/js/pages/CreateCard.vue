<script setup lang="ts">
import type { CreateCardPage } from '@/types/pages';
import AppGreetingsCarousel from '@/components/Greeting/GreetingsCarousel.vue';
import AppThemesCarousel from '@/components/Theme/ThemeCarousel.vue';
import AppAudioCarousel from '@/components/Audio/AudioCarousel.vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

const greetings = computed(() => usePage<CreateCardPage>().props.value.greetings);
const themes = computed(() => usePage<CreateCardPage>().props.value.themes);
const audios = computed(() => usePage<CreateCardPage>().props.value.audios);

</script>

<template>
  <div>
    <h3 class="text-center">
      This is the create card page
    </h3>
    <!-- <AppSwiper :greetings="greetings" /> -->
    <AppGreetingsCarousel :greetings="greetings" />
    <AppThemesCarousel :themes="themes" />
    <AppAudioCarousel :audios="audios" />
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 3rem 0;
}
</style>
