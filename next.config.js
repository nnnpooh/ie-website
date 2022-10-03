/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['35.213.138.100'],
  },
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'th',
  }
};

module.exports = nextConfig;
module.exports = nextTranslate()