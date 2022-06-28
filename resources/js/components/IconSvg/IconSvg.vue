<script setup lang="ts">
/**
 * Get new icons from this link (icon.svg file must be 24x24):
 * @see https://icones.js.org/collection/all?s=cross
 */

import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const iconHtml = computed(() => {
  let html = '';

  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    html = require(`!svg-inline-loader?classPrefix&idPrefix!./icons/${props.icon}.svg`);
  } catch {
    // eslint-disable-next-line no-console
    console.warn(`Icon [${props.icon}] not found.`);
  }

  return html;
});
</script>

<template>
  <span
    v-if="iconHtml"
    class="icon-svg"
    v-html="iconHtml"
  />
</template>

<style lang="scss" scoped>
.icon-svg {
  display: inline-block;
  height: rem(24);
  position: relative;
  width: rem(24);

  svg {
    @include centeriser('both');
    height: auto;
    width: 100%;
  }
}
</style>
