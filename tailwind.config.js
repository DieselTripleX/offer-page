/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': [
          {'min': '360px', 'max': '640px'}
        ],
        'tablet': [
          {'max': '768px'}
        ],
        'laptops': [
          {'max': '1024px'}
        ],
        'desktop': [
          {'max': '1200px'}
        ],
      }
    },
  },
  plugins: [],
}
