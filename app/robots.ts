import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';

  return {
    rules: [
      {
        // General rules for all bots
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/login',
          '/_next/',
        ],
      },
      {
        // Dedicated rule for social media preview crawlers
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}