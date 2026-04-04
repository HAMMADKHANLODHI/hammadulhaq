import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';
  const lastMod = new Date();

  return [
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.6 },
  ];
}