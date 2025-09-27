import { Locale } from './i18n';

export type Dictionary = {
  navigation: {
    home: string;
    about: string;
    technologies: string;
    experience: string;
    projects: string;
    contact: string;
  };
  maintenance: {
    title: string;
    subtitle: string;
    description: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
  };
};

const dictionaries = {
  en: () => import('../locales/en.json').then((module) => module.default as Dictionary),
  pt: () => import('../locales/pt.json').then((module) => module.default as Dictionary),
} as const;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    if (!locale || !(locale in dictionaries)) {
      return await dictionaries.en();
    }

    const dictionaryLoader = dictionaries[locale as keyof typeof dictionaries];
    if (typeof dictionaryLoader !== 'function') {
      return await dictionaries.en();
    }

    return await dictionaryLoader();
  } catch (error) {
    return await dictionaries.en();
  }
};
