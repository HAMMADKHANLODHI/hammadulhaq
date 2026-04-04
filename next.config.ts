import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hammadulhaq-seven.vercel.app',
      },
    ],
  },
  // Remove the experimental section entirely to fix the build error
}
 
export default nextConfig