/** @type {import('next').NextConfig} */

const nextConfig = {
  // Force Next.js to ignore TypeScript mode completely
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint during builds (old template triggers false warnings)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable Next.js Image Optimization to avoid installing "sharp"
  images: {
    disableStaticImages: true,
  },

  // Disable telemetry noise
  telemetry: false,
};

module.exports = nextConfig;
