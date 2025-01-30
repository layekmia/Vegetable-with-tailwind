/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'body-font': ['Sora', 'serif'],
      },
      colors:{
        'primary-clr': '#179800',
        'secondary-clr': '#111111',
        'bg-primary-clr': '#efebe3'
      }
    },
  },
  plugins: [],
}

