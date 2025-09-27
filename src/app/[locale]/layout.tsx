import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { localeConfig, validateLocale } from '@/src/lib/i18n';
import { generateBaseMetadata } from '@/src/config/metadata';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = validateLocale(locale);

  return generateBaseMetadata(validLocale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = validateLocale(locale);
  const localeInfo = localeConfig[validLocale];

  return (
    <html
      lang={localeInfo.htmlLang}
      dir={localeInfo.direction}
      className={montserrat.variable}
    >
      <body className={`font-sans ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
