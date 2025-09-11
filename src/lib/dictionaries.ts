import { Locale } from './i18n';

const dictionaries = {
  en: () => import('../locales/en.json').then(module => module.default),
  pt: () => import('../locales/pt.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

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
