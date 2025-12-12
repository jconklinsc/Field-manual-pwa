/** @type {import('next').NextConfig} */

const nextConfig = {
  // Force Next.js to ignore TypeScript completely
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint issues during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable Next.js Telemetry
  telemetry: false,
};

module.exports = nextConfig;
