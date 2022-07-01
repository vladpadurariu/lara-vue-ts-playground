import { computed, ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-vue3';

import type { SharedProps } from '@/types/pages';

type Replace = { [key: string]: string; };

const languageIsSet = ref(false);

export function useLanguage() {
  const defaultLocale = computed(() => (
    usePage<SharedProps>().props.value.localization.defaultLocale
  ));

  const locale = computed(() => usePage<SharedProps>().props.value.localization.locale);
  const locales = computed(() => usePage<SharedProps>().props.value.localization.locales);
  const translations = computed(() => usePage<SharedProps>().props.value.localization.translations);
  const inactiveLocales = computed(() => locales.value.filter((l) => l.code !== locale.value.code));

  function replaceParams(translation: string, replace: Replace = {}): string {
    let trans = translation;

    Object.keys(replace).forEach((replaceKey) => {
      trans = trans.replace(`:${replaceKey}`, replace[replaceKey]);
    });

    return trans;
  }

  function extractChoiceLine(segment: string, number: number): string | null {
    const matches = segment.match(/^[{[]([^[\]{}]*)[}\]](.*)/s);

    if (!Array.isArray(matches) || matches.length !== 3) {
      return null;
    }

    const condition = matches[1];
    const value = matches[2].trim();

    if (condition.includes(',')) {
      const [from, to] = condition.split(',');

      if (to === '*' && number >= parseInt(from, 10)) {
        return value;
      }

      if (from === '*' && number <= parseInt(to, 10)) {
        return value;
      }

      if (number >= parseInt(from, 10) && number <= parseInt(to, 10)) {
        return value;
      }
    }

    return parseInt(condition, 10) === number ? value : null;
  }

  function warn(key: string) {
    if (locale.value.code !== defaultLocale.value) {
      // eslint-disable-next-line no-console
      console.warn(`Translation not found for key ["${key}"] in [${locale.value.code}.json].`);
    }
  }

  /**
   * Translate the given message.
   */
  function t(key: string, replace: Replace = {}): string {
    let translation = translations.value[key];

    if (!translation) {
      warn(key);

      translation = key;
    }

    return replaceParams(translation, replace);
  }

  /**
   * Translate the given message based on a count.
   */
  function tc(key: string, number: number, replace: Replace = {}): string {
    let translation = translations.value[key];

    if (!translation) {
      warn(key);

      translation = key;
    }

    const segments = translation.split('|');
    let value: string | null = null;

    segments.every((segment) => {
      value = extractChoiceLine(segment, number);

      return !value;
    });

    return replaceParams(value || translation, { ...replace, count: number.toString() });
  }

  /**
   * Set app locale to provided locale code.
   */
  function setLanguage(newVal: boolean, lang: string) {
    languageIsSet.value = newVal;
    document.documentElement.setAttribute('lang', lang);
  }

  return {
    languageIsSet,
    setLanguage,
  };
}

export default useLanguage;
