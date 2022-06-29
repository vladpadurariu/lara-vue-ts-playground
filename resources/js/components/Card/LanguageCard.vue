<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
import { useLanguage } from '@/composables/useLanguage';
import type { Language } from './LanguageCard';

defineProps({
  languages: {
    type: Array as PropType<Array<Language>>,
    required: true,
  },
});

const { languageIsSet, setLanguage } = useLanguage();

// const { setLanguage } = useLanguage();
const cardFooter = ref<HTMLElement | null>();
// eslint-disable-next-line prefer-const
let activeIndex = ref<string>();
// eslint-disable-next-line prefer-const
let lang = ref<string>();

function pickLang(language: Language): void {
  activeIndex.value = language.uuid;
  lang.value = language.abbreviation;
  cardFooter.value?.classList.add('is-visible');
}
</script>

<template>
  <div class="card">
    <ul>
      <li
        v-for="language in languages"
        :key="language.uuid"
        :class="{ selected: activeIndex === language.uuid }"
        class="text-center"
        aria-hidden="true"
        @click="pickLang(language)"
      >
        {{ language.language }}
      </li>
    </ul>
    <div
      ref="cardFooter"
      class="card__footer"
    >
      <Link
        as="button"
        type="button"
        class="button"
        :href="`/cards/create/${lang}`"
        @click="setLanguage(true)"
      >
        Create card
      </Link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #faebd7;
  font-size: 1.75rem;
  width: 40rem;

  ul {
    align-content: space-around;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
    max-height: 350px;
    padding: 1rem 0;

    li {
      color: rgb(72, 61, 139);
      font-size: 1.1rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
    }
  }

  li {
    &:hover {
      background: $primary;
      color: $white;
      cursor: pointer;
    }
  }

  &__footer {
    display: none;
    opacity: 0;
    padding: 1rem 0;
    transition: opacity $transition-smooth;
    width: 100%;
  }

  .selected {
    background: $primary;
    color: $white;
  }

  .is-visible {
    display: flex;
    justify-content: center;
    opacity: 1;
  }
}
</style>
