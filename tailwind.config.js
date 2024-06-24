/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        organicGreen: {
          100: "#98bc65",
          200: "#2b3b00",
          300: "#82AE46"
        }
      },
      screens: {
        'sm': '540px',
        'md': '720px'
      }
    },
  },
  plugins: [],

}

