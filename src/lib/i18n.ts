export const locales = ['en', 'pt'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeConfig = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    htmlLang: 'en',
    openGraphLocale: 'en_US',
  },
  pt: {
    name: 'Português',
    flag: '🇧🇷',
    htmlLang: 'pt-BR',
    openGraphLocale: 'pt_BR',
  },
} as const;

export function validateLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}
