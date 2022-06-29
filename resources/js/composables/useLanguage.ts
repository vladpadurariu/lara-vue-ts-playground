import { ref } from 'vue';

const languageIsSet = ref(false);

export function useLanguage() {
  function setLanguage(newVal: boolean) {
    languageIsSet.value = newVal;
  }

  return {
    languageIsSet,
    setLanguage,
  };
}

export default useLanguage;
