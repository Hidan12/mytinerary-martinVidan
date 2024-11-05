/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveplain:{
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(100%)'}
        },
        moveleft:{
          '0%': {transform:'translateX(0%)'},
          '100%':{transform:'translateX(-100%)'}
        },
        moverigth:{
          '0%': {transform:'translateX(-100%)'},
          '100%':{transform:'translateX(30%)'}
        },
        moveDown:{
          '0%': {top:'-64px', opacity:0},
          '60%': {opacity:0.1},
          '100%':{top:'0px', opacity:1}
        }
      },
      animation:{
        moveplain:'moveplain 3s forwards linear',
        moveleft: 'moveleft 1s forwards linear',
        moverigth: 'moverigth 1s forwards linear',
        moveDown: 'moveDown 0.5s forwards linear'
      }
    },
  },
  plugins: [],
}

