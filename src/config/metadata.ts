
import type { Metadata } from 'next';
import { getDefaultLocale, type Locale } from '../lib/i18n';

interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string;
  noIndex?: boolean;
  noCache?: boolean;
  canonicalPath?: string;
}

interface LocalizedPageMetadata {
  en: PageMetadata;
  pt: PageMetadata;
}

const SITE_CONFIG = {
  author: 'Márcio Sobral',
  domain: process.env.DOMAIN || 'http://localhost:3000',
} as const;

export const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title: {
      default: 'Márcio Sobral',
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
      default: 'Márcio Sobral',
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

export function generateBaseMetadata(
  locale: Locale = getDefaultLocale(),
): Metadata {
  const meta = metadataByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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

export const pageMetadata: Record<string, LocalizedPageMetadata> = {
  maintenance: {
    en: {
      title: 'Maintenance',
      description: 'Site under maintenance. We will be back soon.',
      noIndex: true,
      noCache: true,
    },
    pt: {
      title: 'Manutenção',
      description: 'Site em manutenção. Voltaremos em breve.',
      noIndex: true,
      noCache: true,
    },
  },
} as const;

export function generatePageMetadata(
  pageKey: keyof typeof pageMetadata,
  locale: Locale = getDefaultLocale()
): Metadata {
  const page = pageMetadata[pageKey]?.[locale];

  if (!page) {
    return generateBaseMetadata(locale);
  }

  const metadata: Metadata = {};

  if (page.title) {
    metadata.title = page.title;
  }

  if (page.description) {
    metadata.description = page.description;
  }

  if (page.keywords) {
    metadata.keywords = page.keywords;
  }

  if (page.noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
      },
    };
  }

  if (page.noCache) {
    metadata.other = {
      'cache-control': 'no-cache, no-store, must-revalidate',
      'pragma': 'no-cache',
      'expires': '0',
      'x-robots-tag': 'noindex, nofollow, noarchive, nosnippet',
    };
  }

  return metadata;
}

export const createPageMetadata = (pageKey: keyof typeof pageMetadata) => {
  return async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
    const { locale } = await params;
    const validLocale = (locale as Locale) || 'en';
    return generatePageMetadata(pageKey, validLocale);
  };
};
