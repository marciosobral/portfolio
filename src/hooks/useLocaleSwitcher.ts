'use client';

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { getDefaultLocale, type Locale } from "../lib/i18n";

export function useLocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const defaultLocale = getDefaultLocale();

  const switchLocale = (newLocale: Locale) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
      if (newLocale === defaultLocale) {
        return router.push(pathWithoutLocale);
      }

      const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
      return router.push(newPath);
    });
  };

  const getCurrentLocale = (): Locale => {
    const localeMatch = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
    return (localeMatch?.[1] as Locale) || defaultLocale;
  };

  return {
    switchLocale,
    getCurrentLocale,
    isPending,
  };
}
