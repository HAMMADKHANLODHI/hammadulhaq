import type { Metadata } from 'next';

const BASE_URL = 'https://hammadulhaq-seven.vercel.app';
const FULL_NAME = 'Hammad Ul Haq';
const TITLE_DEFAULT = 'Hammad Ul Haq | Full-Stack & AI Engineer';
const DESCRIPTION = 'Full-Stack Developer & AI Engineer specializing in MERN Stack, Next.js, and Agentic AI. Developer of real-time ERP systems and AI solutions in Lahore, Pakistan.';
const OG_IMAGE = `${BASE_URL}/huh-logoss.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: ['Hammad Ul Haq', 'MERN Stack', 'Next.js', 'AI Engineer', 'Lahore'],
  
  // 1. Canonical URL (Crucial for Google)
  alternates: {
    canonical: '/',
  },

  // 2. OpenGraph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: FULL_NAME,
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

  // 3. Twitter / X Optimization
  twitter: {
    card: 'summary_large_image', // This makes the big preview image on X
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [OG_IMAGE], // Must be an absolute URL
    creator: '@your_twitter_handle', // Optional: Add your handle here
  },

  // 4. Search Console & Verifications
  verification: {
    google: 'QcJPE3ifkwAO4Rz6KBEk5GuC8IwI8QXr0GESs8ehlSg',
    other: {
      'p:domain_verify': ['0cf888d55a0f949177131b224bb96f2f'],
    },
  },
};

// JSON-LD for "Rich Results" in Google
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FULL_NAME,
    url: BASE_URL,
    image: OG_IMAGE,
    sameAs: [
      'https://linkedin.com/in/hammad-ul-haq-07b62a357',
      'https://github.com/HAMMADKHANLODHI'
    ],
    jobTitle: 'Full-Stack Developer & AI Engineer',
    address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}