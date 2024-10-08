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
          '0%':{left:'-30%'},
          '100%':{left:'30%'}
        },
        moveleft:{
          '0%': {transform:'translateX(0%)'},
          '100%':{transform:'translateX(-100%)'}
        },
        moverigth:{
          '0%': {transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0%)'}
        }
      },
      animation:{
        moveplain:'moveplain 1s forwards linear',
        moveleft: 'moveleft 1s forwards linear',
        moverigth: 'moverigth 1s forwards linear',
      }
    },
  },
  plugins: [],
}

