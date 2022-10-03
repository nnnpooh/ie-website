/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#47080b',
          100: '#810E14',
          200: '#6E0C11',
          300: '#5C0A0E',
          400: '#47080b',
          500: '#370609',
          600: '#250406',
        },
      },
    },
  },
  plugins: [],
};
