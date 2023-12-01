/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/**/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      margin: {
        15: '4rem',
      },
      colors: {
        noir: '#0E0E0E',
        moon: {
          100: '#958B84',
          200: '#877F79',
          300: '#7A736D',
          400: '#6C6661',
          500: '#5F5955',
          600: '#524B49',
        },
        polaire: '#F6F6F6',
        rose: '#BB74B6',
        lightgreen: '#CAF8B5',
        lightrose: '#FF3E83',
        lightyellow: '#FFDC61',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        jjk: ['Jujutsu'],
      },
    },
  },
  plugins: [],
};