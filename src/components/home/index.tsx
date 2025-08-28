import { Dictionary } from "@/src/lib/dictionaries";

interface HomePageProps {
  dict: Dictionary;
}

export function HomePage({ dict }: HomePageProps) {

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <h2>{dict.home.subtitle}</h2>
    </main>
  );
}
