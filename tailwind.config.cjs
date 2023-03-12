/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCF7F8',
        secondary: '#2c2c2c',
      },
    },
  },
  plugins: [],
};
