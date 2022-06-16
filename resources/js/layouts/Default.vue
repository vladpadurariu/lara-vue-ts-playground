<script setup lang="ts">

import AppNavbar from '@/components/Nav/Navigation.vue';

</script>

<template>
  <div class="main-layout">
    <div class="head">
      <AppNavbar />
    </div>

    <main class="body">
      <div class="container-layout">
        <slot />
      </div>
    </main>

    <div class="foot">
      <!-- <AppFooter /> -->
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
