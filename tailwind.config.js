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
      spacing: {
        70: '17.5rem',
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
          700: '#453E3D',
          800: '#373130',
        },
        polaire: '#F6F6F6',
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