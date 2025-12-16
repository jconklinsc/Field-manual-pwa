/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/enviroment',
        destination: '/environment',
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
