/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('/web/src/assets/img/pattern.png')" // no funciona
      },
      fontFamily: {
        ubuntu: 'Ubuntu, ui-serif'
      },
      colors: {
        'green-dabadi': "#4FE5B8",
        'purple-dabadi': "#A87FFF"
      },
      animation: {
        'pulse-low': "pulse 4s linear infinite"
      }
    },
  },
  plugins: [],
}

