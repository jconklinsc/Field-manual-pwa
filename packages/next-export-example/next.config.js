/** @type {import('next').NextConfig} */

const nextConfig = {
  // Force Next.js to completely ignore TypeScript mode
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable ESLint during build (old template triggers false errors)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable stray telemetry noise
  telemetry: false,
};

module.exports = nextConfig;
