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
// DYNAMIC METADATA — Properly handles ?v=1
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { searchParams }: { searchParams: { v?: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const version = searchParams.v;

  const title = version === '1'
    ? 'Hammad Ul Haq | Smart Video Insight Demo'
    : TITLE_DEFAULT;

  const description = version === '1'
    ? 'Experience Smart Video Insight — my AI-powered video analysis tool built with Next.js and Agentic AI.'
    : DESCRIPTION;

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: TITLE_DEFAULT,
      template: `%s | ${FULL_NAME}`,
    },

    description,
    keywords: KEYWORDS,

    authors: [{ name: FULL_NAME, url: LINKEDIN }],
    creator: FULL_NAME,
    publisher: FULL_NAME,

    alternates: {
      canonical: version === '1' ? '/?v=1' : '/',
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: version === '1' ? `${BASE_URL}/?v=1` : BASE_URL,
      siteName: `${FULL_NAME} — Portfolio`,
      title,
      description,
      images: [
        {
          url: `${BASE_URL}/huh-logos.png`,   // ← Only this image now
          width: 1200,
          height: 630,
          alt: `${FULL_NAME} — Full-Stack & AI Engineer Portfolio`,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/huh-logos.png`],
    },

    verification: {
      google: 'QcJPE3ifkwAO4Rz6KBEk5GuC8IwI8QXr0GESs8ehlSg',
    },

    category: 'technology',
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
      'MERN Stack',
      'Next.js',
      'FastAPI',
      'Agentic AI',
      'LLM Integration',
      'MongoDB',
      'Socket.io'
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