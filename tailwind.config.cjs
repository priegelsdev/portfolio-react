/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FCF7F8',
        secondary: '#2c2c2c',
      },
      animation: {
        wave: 'wave 2s infinite',
        'fade-in': 'fadeIn 14s ease-out infinite',
        'fade-out': 'fadeOut 14s ease-in infinite',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '20%': {
            transform: 'rotate(25deg)',
          },
          '40%': {
            transform: 'rotate(-25deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
