/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxxs': '0.5rem',  // 8px
      },
      colors: {
        primary: {
          extraLight: "#81CDA6",
          light: "#C6E9D5",
          DEFAULT: '#339A7D',
          cardsColor: "#F1FBFA",
          highlighted: "#05DE69"
        },
        bg: {
          light: "#FFFFFF",
          DEFAULT: '#56BD86'
        }
      },
      animation: {
        vote: 'vote 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        pulse: 'pulse 1s ease-in-out',
        moveRight: 'moveRight 1s ease-in-out',
        appearFromLeft: 'appearFromLeft 1s ease forwards',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0.4, },
          '100%': { opacity: 1 }
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(2px)' },
        },
        appearFromLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: 0.4 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

