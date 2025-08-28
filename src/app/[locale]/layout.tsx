import type { Metadata } from 'next';
import { generateMetadataByLocale, montserrat } from '../layout';
import { Locale, localeConfig } from '@/src/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataByLocale(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  return (
    <html lang={(await params).locale ?? localeConfig.en.htmlLang}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
