'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Locale, localeConfig } from '@/src/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchToLanguage = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';

    if (newLocale === 'en') {
      router.push(pathWithoutLocale);
    } else {
      const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
    }
  };

  return (
    <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-1">
      {Object.entries(localeConfig).map((locale, index) => (
        <button
          key={`lsb-${locale[0]}`}
          onClick={() => switchToLanguage(locale[0] as Locale)}
          className={`px-4 py-2 rounded-md text-2xl font-medium transition-all duration-200 cursor-pointer ${currentLocale === locale[0]
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-white hover:bg-white/10'
            }`}
        >
          {locale[1].flag}
        </button>
      ))}
    </div>
  );
}
