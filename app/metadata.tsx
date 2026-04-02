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
].join(', ');

// ─────────────────────────────────────────────────────────────────────────────
// STATIC FALLBACK — Prevents build-time "export not found" errors
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  verification: {
    google: 'QcJPE3ifkwAO4Rz6KBEk5GuC8IwI8QXr0GESs8ehlSg',
  },
  openGraph: {
    images: [{ url: `${BASE_URL}/huh-logos.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${BASE_URL}/huh-logos.png`],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC METADATA — Safely handles ?v=1
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { searchParams }: { searchParams?: { v?: string } }, // Made optional for build-time safety
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Use Optional Chaining (?.) to prevent crash during prerendering
  const version = searchParams?.v;

  const title = version === '1'
    ? 'Hammad Ul Haq | Smart Video Insight Demo'
    : TITLE_DEFAULT;

  const description = version === '1'
    ? 'Experience Smart Video Insight — my AI-powered video analysis tool built with Next.js and Agentic AI.'
    : DESCRIPTION;

  return {
    ...metadata, // Spread static defaults
    title: {
      default: title,
      template: `%s | ${FULL_NAME}`,
    },
    description,
    alternates: {
      canonical: version === '1' ? '/?v=1' : '/',
    },
    openGraph: {
      ...metadata.openGraph,
      url: version === '1' ? `${BASE_URL}/?v=1` : BASE_URL,
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
    image: `${BASE_URL}/huh-logos.png`,
    sameAs: [LINKEDIN, GITHUB],
    jobTitle: 'Full-Stack Developer & AI Engineer',
    description: DESCRIPTION,
    knowsAbout: [
      'MERN Stack', 'Next.js', 'FastAPI', 'Agentic AI', 
      'LLM Integration', 'MongoDB', 'Socket.io'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
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