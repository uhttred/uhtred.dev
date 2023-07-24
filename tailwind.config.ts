/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#fff',
        gray: {
          950: '#0a0a0a',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
        green: {
          brand: '#10b981',
          950: '#022c22',
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
          200: '#a7f3d0',
          100: '#d1fae5',
          50: '#ecfdf5',
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'Helvetica', 'sans serif'],
        noto: ['Noto Sans', 'sans serif'],
        josefin: ['Josefin Sans', 'sans serif'],
      },
      fontSize: {
        10: '0.625rem', // 10px
        12: '0.75rem', // 12px
        13: '0.813rem', // 13px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        22: '1.375rem', // 22px
        24: '1.5rem' // 24px
      },
      gridTemplateColumns: {
        4: 'repeat(4, 66px)',
        6: 'repeat(6, 66px)',
        8: 'repeat(8, 66px)',
        10: 'repeat(10, 70px)',
        12: 'repeat(12, 70px)'
      },
      gap: {
        30: '30px',
        20: '20px'
      }
    },
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
