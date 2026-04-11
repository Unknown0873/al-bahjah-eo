/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,     // ← Ini yang penting
  },
  eslint: {
    ignoreDuringBuilds: true,    // ← Ini juga
  },
};

module.exports = nextConfig;