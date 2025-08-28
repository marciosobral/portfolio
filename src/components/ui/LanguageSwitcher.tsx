'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/src/lib/i18n';

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
      <button
        onClick={() => switchToLanguage('en')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${currentLocale === 'en'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-white hover:bg-white/10'
          }`}
      >
        EN
      </button>
      <button
        onClick={() => switchToLanguage('pt')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${currentLocale === 'pt'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-white hover:bg-white/10'
          }`}
      >
        PT
      </button>
    </div>
  );
}
