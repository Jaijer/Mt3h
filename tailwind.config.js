/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        movies: "url('/src/assets/Movies-banner.jpg')",
        shows: "url('assets/src/assets/Shows-banner.jpg')",
        anime: "url('/src/assets/Anime-banner.png')"
      },
      colors: {
        deepBlue: "rgb(37,43,72)",
        grayBlue: "rgb(68, 80, 105)",
        greenish: "rgb(91, 154, 139)",
        yellowish: "rgb(255, 246, 189)",
        pinky: "rgb(255, 217, 183, 0.8)",
        browny: "rgb(224, 192, 151)",
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'monoton': ['"Monoton"', 'cursive'],
      },
      animation:{
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
    },
    keyframes: {
      'shake' : {
          '10%, 90%': {
              transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
              transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
              transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
              transform: 'translate3d(4px, 0, 0)'
          }
      }
  },
    },
  },
  plugins: [],
}

