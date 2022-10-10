/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["10.10.12.140", "localhost", "ieadmin.eng.cmu.ac.th"],
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
  },
};

// module.exports = nextConfig;
module.exports = nextTranslate(nextConfig);
