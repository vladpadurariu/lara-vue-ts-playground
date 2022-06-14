<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
// import type { LanguageResource } from '@/types/resources';
import type { Language } from './LanguageCard';

// interface Language {
//   id: number;
//   code: string;
//   language: string;
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  languages: {
    // type: Array as PropType<Language[]>,
    type: Array as PropType<Array<Language>>,
    required: true,
  },
});

const cardFooter = ref<HTMLElement | null>();
// eslint-disable-next-line prefer-const
let activeIndex = ref<string>();

function pickLang(language: Language): void {
  activeIndex.value = language.uuid;
  cardFooter.value?.classList.add('isVisible');
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
      <router-link
        to="create"
        @click="useLanguage().setLanguage()"
      >
        Create card
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 40rem;
  background-color: antiquewhite;
  ul {
    height: 450px;
    list-style: none;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    li {
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
      font-weight: bold;
      text-align: center;
      color: darkslateblue;
      &:hover {
        cursor: pointer;
        background: #e50000;
        color: white;
      }
      &.selected {
        color: white;
        background: #e50000;
      }
    }
  }
  &__footer {
    width: 100%;
    padding: 1rem 0;
    display: none;
    opacity: 0;
    transition: opacity 1s ease-in;
    a {
      text-decoration: none;
      border: none;
      border-radius: 0.2rem;
      background: #e50000;
      padding: 0.5rem 1rem;
      color: white;
      cursor: pointer;
      &:hover {
        background: white;
        color: #e50000;
      }
    }
  }
  .isVisible {
    opacity: 1;
    display: flex;
    justify-content: center;
  }
}
</style>
