export const localeConfig = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    htmlLang: 'en',
    openGraphLocale: 'en_US',
    direction: 'ltr',
  },
  pt: {
    name: 'Português',
    flag: '🇧🇷',
    htmlLang: 'pt-BR',
    openGraphLocale: 'pt_BR',
    direction: 'ltr',
  },
} as const;

export type Locale = keyof typeof localeConfig;

const defaultLocale: Locale = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as Locale || 'en';
const availableLocales = Object.keys(localeConfig) as (keyof typeof localeConfig)[];

export function validateLocale(locale?: string): Locale {
  return availableLocales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
}

export function isValidLocale(locale: string): locale is Locale {
  return availableLocales.includes(locale as Locale);
}

export function getAvailableLocales(): readonly Locale[] {
  return availableLocales;
}

export function getDefaultLocale(): Locale {
  return defaultLocale;
}
