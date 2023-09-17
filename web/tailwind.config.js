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
      }
    },
  },
  plugins: [],
}

