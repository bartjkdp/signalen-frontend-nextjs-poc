/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/incident/beschrijf",
        permanent: false,
      },
      {
        source: "/incident",
        destination: "/incident/beschrijf",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
