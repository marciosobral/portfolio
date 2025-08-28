import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ["latin"],
});

export { montserrat };

const metadataByLocale = {
  en: {
    title: {
      default: 'Márcio Sobral - Portfolio',
      template: '%s - Márcio Sobral',
    },
    description: 'Full Stack Developer specialized in modern web technologies. Experienced in React, Next.js, Node.js, and TypeScript. Creating innovative digital solutions.',
    keywords: 'Full Stack Developer, React, Next.js, TypeScript, JavaScript, Node.js, Web Development, Frontend, Backend',
    openGraph: {
      title: 'Márcio Sobral - Full Stack Developer',
      description: 'Full Stack Developer specialized in modern web technologies. Check out my projects and experience.',
      type: 'website',
      locale: 'en_US',
    },
  },
  pt: {
    title: {
      default: 'Márcio Sobral - Portfólio',
      template: '%s - Márcio Sobral',
    },
    description: 'Desenvolvedor Full Stack especializado em tecnologias web modernas. Experiência em React, Next.js, Node.js e TypeScript. Criando soluções digitais inovadoras.',
    keywords: 'Desenvolvedor Full Stack, React, Next.js, TypeScript, JavaScript, Node.js, Desenvolvimento Web, Frontend, Backend',
    openGraph: {
      title: 'Márcio Sobral - Desenvolvedor Full Stack',
      description: 'Desenvolvedor Full Stack especializado em tecnologias web modernas. Confira meus projetos e experiência.',
      type: 'website',
      locale: 'pt_BR',
    },
  },
} as const;

export function generateMetadataByLocale(locale: 'en' | 'pt' = 'en'): Metadata {
  const meta = metadataByLocale[locale];
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Márcio Sobral' }],
    creator: 'Márcio Sobral',
    publisher: 'Márcio Sobral',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        pt: '/pt',
      },
    },
  };
}

export const metadata: Metadata = generateMetadataByLocale('en');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
