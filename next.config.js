/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['35.213.138.100'],
  },
};

module.exports = nextConfig;
