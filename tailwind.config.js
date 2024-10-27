/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': [ "Rubik", "sans-serif"],
      },
      colors: {
        'light-gray-100': '#F6f6f6',
        'light-gray-200': '#E0E4EA',
        'light-gray-300': '#F8F8F8',
        'light-gray-400': '#EBEBEB',
        'dark-gray-100': '#585858',
        'dark-gray-200': '#5F5F5F',
        'dark-gray-300': '#6C6C6C',
        'dark-gray-400': '#585858',
        'dark': '#021130',
        'green': '#67CB65',
        'orange': '#FD633D'
      },
      width: {
        'main' : '90rem',
        'nav': '18.75rem',
        'search': '50rem',
        'icons': '6.188rem',
        'profile': '9.438rem'
      },
      height: {
        
      }
    },
  },
  plugins: [],
}