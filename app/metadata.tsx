import type { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — Single Source of Truth [cite: 1, 5, 7, 8]
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = 'https://hammadulhaq-seven.vercel.app';
const FULL_NAME = 'Hammad Ul Haq';
const LINKEDIN = 'https://linkedin.com/in/hammad-ul-haq-07b62a357';
const GITHUB = 'https://github.com/HAMMADKHANLODHI';

/**
 * Primary title — optimized for high-intent search clusters. [cite: 2, 10, 43]
 */
const TITLE_DEFAULT =
  'Hammad Ul Haq | Full-Stack & AI Engineer — MERN · Next.js · FastAPI';

/**
 * Meta description — Includes your specific project experience and location. [cite: 8, 11, 22, 26]
 */
const DESCRIPTION =
  'Full-Stack Developer & AI Engineer specializing in MERN Stack, Next.js, and Agentic AI. ' +
  'Developer of Smart Video Insight and real-time ERP systems in Lahore, Pakistan.';

/**
 * Keywords — Extracted from your specific certifications and tech stack. [cite: 2, 38, 39, 46, 47]
 */
const KEYWORDS = [
  'Hammad Ul Haq',
  'MERN Stack Developer Lahore',
  'Next.js Developer Pakistan',
  'AI Engineer',
  'Agentic AI',
  'crewAI Developer',
  'FastAPI Python',
  'Smart Video Insight',
  'Mingo Chat App',
  'Full-Stack JavaScript Developer',
  'Remote Developer Pakistan'
].join(', ');

// ─────────────────────────────────────────────────────────────────────────────
// METADATA EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${FULL_NAME}`,
  },

  description: DESCRIPTION,
  keywords: KEYWORDS,

  authors: [{ name: FULL_NAME, url: LINKEDIN }],
  creator: FULL_NAME,
  publisher: FULL_NAME,

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ur-PK': '/', // Signals regional relevance to Pakistan [cite: 8, 52]
    },
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
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
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
        url: '/huh-logos.png',
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Full-Stack & AI Engineer Portfolio`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: ['/huh-logos.png'],
  },

  verification: {
    google: 'pxNjVx0r_sk8jzwSViwSqhj1LeoWc7Vy5E7rgmALi1w', // Paste your code here after GSC setup
  },

  category: 'technology',
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD) [cite: 1, 2, 7, 8, 52, 53]
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