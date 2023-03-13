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
        'fade-in': 'fadeIn 8s ease-out infinite',
        'fade-out': 'fadeOut 8s ease-in infinite',
      },
      keyframes: {
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
