<script setup lang="ts">
import type { CreateCardPage } from '@/types/pages';
import AppGreetingsCarousel from '@/components/Greeting/GreetingsCarousel.vue';
import AppThemesCarousel from '@/components/Theme/ThemeCarousel.vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

const greetings = computed(() => usePage<CreateCardPage>().props.value.greetings);
const themes = computed(() => usePage<CreateCardPage>().props.value.themes);

</script>

<template>
  <div>
    <h3 class="text-center">
      This is the create card page
    </h3>
    <AppGreetingsCarousel :greetings="greetings" />
    <AppThemesCarousel :themes="themes" />
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 3rem 0;
}
</style>
