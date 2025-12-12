/** @type {import('next').NextConfig} */

// Next.js 9 compatibility settings + PWA allowance
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable Minifier for older Next.js builds to prevent SWC + OpenSSL issues
  experimental: {
    swcMinify: false
  },

  // Required for stable PWA behavior with a custom service worker
  poweredByHeader: false,
};

module.exports = nextConfig;
