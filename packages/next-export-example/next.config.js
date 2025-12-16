module.exports = {
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
