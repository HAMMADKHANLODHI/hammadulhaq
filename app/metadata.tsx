import type { Metadata, ResolvingMetadata } from 'next';

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — Single Source of Truth
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = 'https://hammadulhaq-seven.vercel.app';
const FULL_NAME = 'Hammad Ul Haq';
const LINKEDIN = 'https://linkedin.com/in/hammad-ul-haq-07b62a357';
const GITHUB = 'https://github.com/HAMMADKHANLODHI';

const TITLE_DEFAULT = 'Hammad Ul Haq | Full-Stack & AI Engineer — MERN & Next.js';
const DESCRIPTION =
  'Full-Stack Developer & AI Engineer specializing in MERN Stack, Next.js, and Agentic AI. ' +
  'Developer of Smart Video Insight and real-time ERP systems in Lahore, Pakistan.';

const KEYWORDS = [
  'Hammad Ul Haq',
  'MERN Stack Developer Lahore',
  'Next.js Developer Pakistan',
  'AI Engineer',
  'Agentic AI',
  'crewAI Developer',
  'FastAPI Python',
  'Full-Stack JavaScript Developer',
  'Remote Developer Pakistan'
];

const OG_IMAGE = `${BASE_URL}/huh-logoss.png`;

// ─────────────────────────────────────────────────────────────────────────────
// STATIC FALLBACK
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: {
    canonical: './',
  },
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
  verification: {
    google: 'QcJPE3ifkwAO4Rz6KBEk5GuC8IwI8QXr0GESs8ehlSg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    creator: '@your_twitter_handle', // Optional: Add your handle
    images: [OG_IMAGE],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC METADATA
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const sParams = await searchParams;
  const version = sParams.v;

  const isDemo = version === '1';

  const title = isDemo
    ? 'Smart Video Insight Demo | AI Video Analysis'
    : TITLE_DEFAULT;

  const description = isDemo
    ? 'Experience Smart Video Insight — an AI-powered video analysis tool built with Next.js and Agentic AI.'
    : DESCRIPTION;

  return {
    ...metadata,
    title,
    description,
    alternates: {
      canonical: isDemo ? '/?v=1' : '/',
    },
    openGraph: {
      ...metadata.openGraph,
      url: isDemo ? `${BASE_URL}/?v=1` : BASE_URL,
      title,
      description,
    },
    twitter: {
      ...metadata.twitter,
      title,
      description,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FULL_NAME,
    url: BASE_URL,
    image: OG_IMAGE,
    sameAs: [LINKEDIN, GITHUB],
    jobTitle: 'Full-Stack Developer & AI Engineer',
    description: DESCRIPTION,
    knowsAbout: [
      'MERN Stack',
      'Next.js',
      'FastAPI',
      'Agentic AI',
      'LLM Integration',
      'MongoDB',
      'Socket.io',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Self-Employed',
    },
    availableLanguage: ['English', 'Urdu'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}