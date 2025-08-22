/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        mineShaft: '#2D2D2D', 
        akaroa: '#D7C9AE',
        barleyCorn: '#A68763',
        whiteRock: '#EAE0D2',
      },
      fontFamily: {
        serifRegular: ['"DMS Serif Regular"', 'serif'],
        serifItalic: ['"DMS Serif Italic"', 'serif'], 
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      }
    },
  },
  plugins: [],
}

