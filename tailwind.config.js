/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}','./node_modules/tw-elements/dist/js/**/*.js',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANyekan'],
        black:['IRANyekan'],
        bold:['IRANyekan'],
        extrablack:['IRANyekan'],
        extrabold:['IRANyekan'],
        medium:['IRANyekan'],
        regular:['IRANyekan'],
        thin:['IRANyekan'],
      },
      colors: {
        'color-Text1': '#3d3d4e',
        'color-Text2': '#6e6d7a',
        'color-Text3': '#0d0c22',
        'color-green': '#15cfaa',
        'color-bg-search-navbar': 'rgba(13,12,34,0.05)',
        'color-body-light': '#fff',
        'color-footer': '#fafafb',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
