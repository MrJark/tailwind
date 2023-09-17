/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      screens: { // para ver la pantalla
        'xs': {'max': '768px'}
      },
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
        'pulse-low': "pulse 4s linear infinite",
        'from-right': "fromRight 300ms linear"
      },
      keyframes: { // como en CSS, pones los % de donde empieza, los intermedios, y donde acaba y pones lo que quieres que haga en esos tiempos
        fromRight: {
          '0%': { transform: 'translateX(200%)'},
          // '25%': { transform: 'translateX(-20%)'},
          // '50%': { transform: 'translateX(0%)'},
          // '75%': { transform: 'translateX(20%)'},
          '100%': { transform: 'translateX(0%)'}
        }
      }
    },
  },
  plugins: [],
}

