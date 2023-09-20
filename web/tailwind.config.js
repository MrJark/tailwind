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
        'background-img': "url('./assets/img/pattern.png')", // no funcionaba porque tenia la ruta como ./src/assets... y lo que me he dado cuenta es que no hay que poner el src en estos casos
        'background-banner-img': "url('./assets/img/bakbaner.png')" 
      },
      backgroundPosition: {
        'banner-position': '-800px -200px', // para que se vea el cohete en el banner
      },
      boxShadow: {
        header3D: '0px 1px #393d3f'
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
        'from-right': "fromRight 300ms linear",
        'bg-banner': 'bgBanner 5s linear',
        'text-banner': 'showBannerText 5s linear',
        'show-card-icon': 'showCardIcon 300ms linear',
      },
      keyframes: { // como en CSS, pones los % de donde empieza, los intermedios, y donde acaba y pones lo que quieres que haga en esos tiempos
        fromRight: {
          '0%': { transform: 'translateX(200%)'},
          // '25%': { transform: 'translateX(-20%)'},
          // '50%': { transform: 'translateX(0%)'},
          // '75%': { transform: 'translateX(20%)'},
          '100%': { transform: 'translateX(0%)'}
        },
        bgBanner: {
          '0%': {'background-position': '0px 0px'} ,
          '100%': {'background-position': '-800px -200px'}
        },
        showBannerText: {
          '0%': {
            transform: "translateX(-600%) scale(3,3)",
            opacity: 1
          },
          '50%': {
            transform: "translateX(600%) scale(3,3)",
            opacity: 1
          },
          '75%': {
            transform: 'translateX(-600%) scale(3,3)',
            color: 'transparent',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0%) scale(1,1)',
            opacity: 1
          }
        },
        showCardIcon: { //hacer el from y to es como decir del 0% al 100%
          'from': {
            transform: "translateY(-200%)",
            opacity: 0
          },
          'to': {
            transform: "translateY(0%)",
            opacity: 1
          }
        },
      }
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}

