'use client';

import { getAvailableLocales, Locale, localeConfig } from '@/src/lib/i18n';
import { useLocaleSwitcher } from '@/src/hooks/useLocaleSwitcher';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { switchLocale, isPending, getCurrentLocale } = useLocaleSwitcher();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  const currentLocale = getCurrentLocale();

  const handleLocaleSwitch = (newLocale: Locale) => {
    if (newLocale === currentLocale || isPending) return;

    setPendingLocale(newLocale);
    switchLocale(newLocale);

    setTimeout(() => setPendingLocale(null), 300);
  };

  const availableLocales = getAvailableLocales();

  return (
    <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-1">
      {availableLocales.map((locale) => {
        const localeData = localeConfig[locale];
        const isActive = currentLocale === locale;
        const isLoading = isPending && pendingLocale === locale;

        return (
          <button
            key={locale}
            onClick={() => handleLocaleSwitch(locale)}
            disabled={isPending}
            className={`
              relative px-4 py-2 rounded-md font-medium transition-all duration-200 
              disabled:opacity-50 disabled:cursor-not-allowed flex items-center
              justify-center gap-2 cursor-pointer text-2xl
              ${isActive
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-white hover:bg-white/10 active:bg-white/20'
              } ${isLoading ? 'animate-pulse' : ''}
            `}
            aria-pressed={isActive}
          >
            {localeData.flag}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </button>
        )
      })}
    </div>
  );
}
