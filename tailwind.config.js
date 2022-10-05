/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#47080b",
          100: "#B8141D",
          200: "#A5121A",
          300: "#931017",
          400: "#810E14",
          500: "#6E0C11",
          600: "#5C0A0E",
          700: "#47080b",
          800: "#370609",
          900: "#250406",
        },
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
