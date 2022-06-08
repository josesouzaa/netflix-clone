module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ]
}
