/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/enviroment',
        destination: '/environment',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
