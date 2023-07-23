/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/views/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/nuxt.config.{js,ts}",
    "./src/app.vue",
  ]
}
