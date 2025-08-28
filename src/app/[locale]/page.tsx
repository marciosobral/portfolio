import { getDictionary } from '@/src/lib/dictionaries';
import { Locale } from '@/src/lib/i18n';

interface PageProps {
  params: { locale: Locale };
}

export default async function Home({ params }: PageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <h2>{dict.home.subtitle}</h2>
      <p>{dict.home.description}</p>
    </main>
  );
}
