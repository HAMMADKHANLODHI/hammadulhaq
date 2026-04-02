import { MetadataRoute } from 'next';
// import { getProjectSlugs } from "@/lib/projects"; // Example: Import your DB fetcher

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hammadulhaq-seven.vercel.app';

  // 1. Define Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily', // Higher frequency for the home/landing page
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Fetch Dynamic Project Routes (Gold Standard Approach)
  // This ensures Google finds "Smart Video Insight" and other apps immediately.
  /*
  const projectSlugs = await getProjectSlugs(); // Fetch from your MongoDB models
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  */

  return [...staticRoutes /*, ...projectRoutes */];
}