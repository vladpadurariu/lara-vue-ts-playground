export function useLanguage() {
  let languageIsSet = false;

  function setLanguage() {
    languageIsSet = !languageIsSet;

    return languageIsSet;
  }

  return {
    languageIsSet,
    setLanguage,
  };
}

export default useLanguage;
