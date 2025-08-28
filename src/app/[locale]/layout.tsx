import type { Metadata } from 'next';
import { generateMetadataByLocale, montserrat } from '../layout';
import { localeConfig, validateLocale } from '@/src/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = validateLocale(locale);

  return generateMetadataByLocale(validLocale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = validateLocale(locale);

  return (
    <html lang={localeConfig[validLocale].htmlLang}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
