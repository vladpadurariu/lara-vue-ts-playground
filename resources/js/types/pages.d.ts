import type { Errors, ErrorBag } from "@inertiajs/inertia";
import type { Locale, Translation } from "@/types/localization";
import type { LanguageResource } from "@/types/resources";

export interface SharedLocalization {
  defaultLocale: string;
  locale: Locale;
  locales: Array<Locale>;
  translations: Translation;
}

export interface SharedFlash<SharedFlashData = unknown> {
  message: string;
  data: SharedFlashData;
}

export interface SharedProps {
  errors: Errors & ErrorBag;
  // localization: SharedLocalization;
  // flash: SharedFlash;
}

export interface ErrorPage extends SharedProps {
  status: number;
}

export interface ChooseLanguagePage extends SharedProps {
  languages: Array<LanguageResource>;
}
