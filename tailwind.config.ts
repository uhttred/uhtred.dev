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
          10: '#FFFFFF',
          50: '#F8F9FA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#3D3D3D',
          700: '#151515',
          800: '#151515',
          900: '#101010',
          950: '#101010',
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
        // 9: '0.625rem', // 9px
        // 8: '0.625rem', // 8px
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        12: '0.75rem', // 12px
        13: '0.813rem', // 13px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        17: '1.063rem', // 17px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        22: '1.375rem', // 22px
        24: '1.5rem', // 24px
        26: '1.625rem', 
        28: '1.75rem', 
        30: '1.875rem', 
        32: '2rem', 
        34: '2.125rem', 
        36: '2.25rem', 
        38: '2.375rem', 
        40: '2.5rem', 
        42: '2.625rem', 
        44: '2.75rem', 
        46: '2.875rem', 
        48: '3rem'
      },
      screens: {
        'pre-sm': '420px'
      },
      gridTemplateColumns: {
        '4x': 'repeat(4, 80px)',
        4: 'repeat(4, 66px)',
        6: 'repeat(6, 66px)',
        8: 'repeat(8, 66px)',
        10: 'repeat(10, 66px)',
        12: 'repeat(12, 66px)'
      },
      gap: {
        16: '16px',
        20: '20px',
        4: '16px',
        12: '20px'
      },
      spacing: {
        '5.5': '1.5rem',
        '120px': '7.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/views/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
    './src/app.vue',
    // 'node_modules/tailvue/dist/tailvue.es.js'
  ]
}
