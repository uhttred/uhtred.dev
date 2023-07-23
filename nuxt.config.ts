// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  dir: {
    pages: 'views'
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    lazy: true,
    langDir: 'locale',
    defaultLocale: 'en',
    baseUrl: 'https://uhtred.dev',
    dynamicRouteParams: true,
    detectBrowserLanguage: {
      redirectOn: 'root',
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.ts'
      },
      {
        name: 'Portugês',
        code: 'pt',
        iso: 'pt-PT',
        file: 'pt.ts'
      }
    ]
  },
  runtimeConfig: {
    public: {}
  }
})
