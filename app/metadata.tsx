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

const OG_IMAGE = `${BASE_URL}/huh-logos.png`;

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
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: FULL_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [OG_IMAGE], // Explicitly defined to satisfy X/Twitter crawler
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC METADATA — Safely handles ?v=1 and build-time prerendering
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { searchParams }: { searchParams?: { v?: string } }, 
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Use Optional Chaining to prevent crash during prerendering
  const version = searchParams?.v;

  const title = version === '1'
    ? 'Hammad Ul Haq | Smart Video Insight Demo'
    : TITLE_DEFAULT;

  const description = version === '1'
    ? 'Experience Smart Video Insight — my AI-powered video analysis tool built with Next.js and Agentic AI.'
    : DESCRIPTION;

  return {
    ...metadata, // Inherit base configs
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
      images: [OG_IMAGE], // Explicitly re-declared for dynamic routes
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