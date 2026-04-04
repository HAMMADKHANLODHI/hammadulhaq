import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimize Images (Crucial for your 'hammad.jpeg' and logos)
  images: {
    formats: ['image/avif', 'image/webp'], // Modern, smaller image formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hammadulhaq-seven.vercel.app',
      },
    ],
  },

  // 2. Production Optimizations
  reactStrictMode: true, // Helps catch bugs in your MERN components
  swcMinify: true,       // Faster builds on Vercel

  // 3. Prevent Metadata Conflicts
  // If you ever move sitemap to a custom route, you'd handle rewrites here.
  // For now, Next.js 16 handles /sitemap.xml automatically via app/sitemap.ts
};

export default nextConfig;