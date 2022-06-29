<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import type { Language } from './LanguageCard';

defineProps({
  languages: {
    type: Array as PropType<Array<Language>>,
    required: true,
  },
});

// const { languageIsSet, setLanguage } = useLanguage();

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
    <div>{{ useLanguage().languageIsSet }}</div>
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
      <a
        aria-hidden="true"
        :href="`/cards/create/${lang}`"
        @click="useLanguage().setLanguage(true)"
      >
        Create card
      </a>
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

    a {
      background: $primary;
      border: 0;
      border-radius: 0.2rem;
      color: $white;
      cursor: pointer;
      padding: 0.5rem 1rem;
      text-decoration: none;

      &:hover {
        background: $white;
        color: $primary;
      }
    }
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
