import { HomePage } from '@/src/components/home/HomePage';
import { getDictionary } from '@/src/lib/dictionaries';
import { Locale } from '@/src/lib/i18n';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <HomePage dict={dict} />;
}
