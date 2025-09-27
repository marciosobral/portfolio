import { Locale, localeConfig } from './i18n';

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
  layout: {
    footer: {
      rights: string;
    }
  }
};

const dictionaries = Object.fromEntries(
  Object.keys(localeConfig).map(locale => [
    locale,
    () => import(`../locales/${locale}.json`).then((module) => module.default as Dictionary)
  ])
) as Record<Locale, () => Promise<Dictionary>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    if (!locale || !(locale in dictionaries)) {
      return await dictionaries.en();
    }

    const dictionaryLoader = dictionaries[locale];
    return await dictionaryLoader();
  } catch (error) {
    return await dictionaries.en();
  }
};
