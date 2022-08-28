/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',],
  theme: {
    extend: {
      boxShadow: {
        'subMenu': '-4px 10px 50px rgb(0 0 0 / 10%)',
      },
      fontFamily: {
        sans: ['IRANyekan'],
        black: ['IRANyekan'],
        bold: ['IRANyekan'],
        extrablack: ['IRANyekan'],
        extrabold: ['IRANyekan'],
        medium: ['IRANyekan'],
        regular: ['IRANyekan'],
        thin: ['IRANyekan'],
      },
      colors: {
        'color-Text1': '#3d3d4e',
        'color-Text2': '#6e6d7a',
        'color-Text3': '#0d0c22',
        'color-main-1': '#15cfaa',
        'color-main-2': '#fafafb',
        'color-main-3': '#fff',
        'color-light-main-1': '#15cfaa24',
        'color-light-main-2': '#f3f3f4',
        'color-dark-main-2': '#E7E7E8',
        
        
        // 'color-Text1': '#3d3d4e',
        // 'color-Text2': '#6e6d7a',
        // 'color-Text3': '#0d0c22',
        // 'color-green': '#15cfaa',
        // 'color-bg-search-navbar': 'rgba(13,12,34,0.05)',
        // 'color-body-light': '#fff',
        // 'color-footer': '#fafafb',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
