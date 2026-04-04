import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  // 1. React Strict Mode is still supported and recommended for MERN
  reactStrictMode: true,

  // 2. Image Optimization (Updated for Next.js 16.2)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hammadulhaq-seven.vercel.app',
      },
    ],
  },

  // 3. New Next.js 16 Features (Optional but useful)
  // Enable the React Compiler for automatic performance boosts
  experimental: {
    reactCompiler: true,
  }
}
 
export default nextConfig