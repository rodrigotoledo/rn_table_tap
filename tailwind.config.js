/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          light: '#D2B48C',
          DEFAULT: '#A52A2A',
          dark: '#5C4033',
        },
      },
      fontFamily: {
        anton: ['Anton'],
      },
    },
  },
  plugins: [],
}

