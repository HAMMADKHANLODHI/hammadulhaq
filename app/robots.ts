import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',       // Protects your private dashboard from search results
        '/admin/',      // Ensures all sub-paths are blocked
        '/api/',        // Prevents indexing of your backend MERN endpoints
        '/login',       // No need for login pages to appear in Google
        '/_next/',      // Standard Next.js internal directory protection
        '/models/',     // Extra safety for your schema definitions
        '/lib/',        // Extra safety for your utility functions
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}