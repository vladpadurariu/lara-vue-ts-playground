import { ref, watch } from 'vue';

export function useLanguage() {
  const languageIsSet = ref(false);

  function setLanguage(newVal: boolean) {
    console.log(languageIsSet.value);
    languageIsSet.value = newVal;
    console.log(languageIsSet.value);
  }

  // watch(languageIsSet, (newVal) => {
  //   setLanguage(newVal);
  // });

  return {
    languageIsSet,
    setLanguage,
  };
}

export default useLanguage;
