import type { Metadata } from 'next';
import { generateMetadataByLocale } from '../layout';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: 'en' | 'pt' };
}

export async function generateMetadata({
  params
}: {
  params: { locale: 'en' | 'pt' }
}): Promise<Metadata> {
  return generateMetadataByLocale(params.locale);
}

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="pt" href="/pt" />
        <link rel="alternate" hrefLang="x-default" href="/en" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
