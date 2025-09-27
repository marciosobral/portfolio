import type { Metadata } from 'next';
import { validateLocale } from '@/src/lib/i18n';
import { generatePageMetadata } from '@/src/config/metadata';

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

  return generatePageMetadata('maintenance', validLocale);
}

export default async function LocaleLayout({
  children,
}: LocaleLayoutProps) {

  return children;
}
