import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';

  return {
    rules: [
      {
        // 1. General rules for most search engines
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api/',
          '/login',
          '/private/',
          '/*?v=', // Prevents indexing of the ?v=1 demo version to avoid duplicate content issues
        ],
      },
      {
        // 2. Specific rule for AI Training Crawlers (Optional)
        // Add this if you don't want your code/content used for AI training
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        disallow: '/',
      },
      {
        // 3. Social Media crawlers should have full access to ensure OpenGraph works
        userAgent: ['facebookexternalhit', 'WhatsApp', 'Twitterbot', 'LinkedInBot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}