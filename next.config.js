/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "10.10.12.140",
      "localhost",
      "scontent.fbkk10-1.fna.fbcdn.net",
      "scontent.fbkk14-1.fna.fbcdn.net",
      "scontent.fbkk22-8.fna.fbcdn.net",
      "scontent.fbkk22-6.fna.fbcdn.net",
      "scontent.fbkk22-2.fna.fbcdn.net",
    ],
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
  },
};

// module.exports = nextConfig;
module.exports = nextTranslate(nextConfig);
