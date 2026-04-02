import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';

  return {
    rules: [
      {
        // General rules for all bots (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/login',
          '/_next/', // Usually handled by Next.js, but safe to keep
        ],
      },
      {
        // Explicitly ensure Social Media bots are NEVER blocked from your assets
        userAgent: ['facebookexternalhit', 'WhatsApp', 'Twitterbot'],
        allow: ['/', '/huh-logos.png'], 
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}