import { getDictionary } from '@/src/lib/dictionaries';
import { Locale } from '@/src/lib/i18n';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <h2>{dict.home.subtitle}</h2>
    </main>
  );
}
