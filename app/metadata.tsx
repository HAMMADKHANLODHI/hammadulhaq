import type { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — Single Source of Truth
// ─────────────────────────────────────────────────────────────────────────────
const BASE_URL = 'https://hammadulhaq-seven.vercel.app';
const FULL_NAME = 'Hammad Ul Haq';
const LINKEDIN = 'https://linkedin.com/in/hammad-ul-haq-07b62a357';
const GITHUB = 'https://github.com/HAMMADKHANLODHI';

/**
 * Primary title — Optimized under 60 chars for all platforms.
 */
const TITLE_DEFAULT = 'Hammad Ul Haq | Full-Stack & AI Engineer — MERN & Next.js';

/**
 * Meta description — Clear and geographically targeted.
 */
const DESCRIPTION =
  'Full-Stack Developer & AI Engineer specializing in MERN Stack, Next.js, and Agentic AI. ' +
  'Developer of Smart Video Insight and real-time ERP systems in Lahore, Pakistan.';

/**
 * Keywords — Optimized for local and remote recruitment.
 */
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
      'ur-PK': '/', 
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
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
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
        // Updated to point to your new 1200x630 image
        url: '/huh-logoss.png', 
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
    // Explicit absolute URL to satisfy strict crawlers and force the 1.91:1 ratio
    images: [`${BASE_URL}/huh-logoss.png`], 
  },

  verification: {
    // Matches the verification string you successfully checked
    google: 'QcJPE3ifkwAO4Rz6KBEk5GuC8IwI8QXr0GESs8ehlSg', 
  },

  category: 'technology',
};

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA (JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FULL_NAME,
    url: BASE_URL,
    // Updated image path for schema consistency
    image: `${BASE_URL}/huh-logoss.png`,
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