<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
// import type { LanguageResource } from '@/types/resources';
import type { Language } from './LanguageCard';

defineProps({
  languages: {
    type: Array as PropType<Array<Language>>,
    required: true,
  },
});

const cardFooter = ref<HTMLElement | null>();
// eslint-disable-next-line prefer-const
let activeIndex = ref<string>();

function pickLang(language: Language): void {
  activeIndex.value = language.uuid;
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
      <button
        @click="useLanguage().setLanguage()"
      >
        Create card
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  --white: rgb(255, 255, 255);
  --red: rgb(229, 0, 0);

  background-color: #faebd7;
  font-size: 1.75rem;
  width: 40rem;

  ul {
    align-content: space-around;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
    list-style: none;
    max-height: 350px;
    padding: 1rem 0;

    li {
      color: rgb(72, 61, 139);
      font-size: 1.1rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }

  li {
    &:hover {
      background: var(--red);
      color: var(--white);
      cursor: pointer;
    }
  }

  &__footer {
    display: none;
    opacity: 0;
    padding: 1rem 0;
    transition: opacity 1s ease-in;
    width: 100%;

    button {
      background: var(--red);
      border: 0;
      border-radius: 0.2rem;
      color: var(--white);
      cursor: pointer;
      padding: 0.5rem 1rem;
      text-decoration: none;

      &:hover {
        background: var(--white);
        color: var(--red);
      }
    }
  }

  .selected {
    background: var(--red);
    color: var(--white);
  }

  .is-visible {
    display: flex;
    justify-content: center;
    opacity: 1;
  }
}
</style>
