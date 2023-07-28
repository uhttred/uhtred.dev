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
    '~/assets/css/main.css',
    '~/assets/icons/style.css',
  ],
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Uhtred M.',
      short_name: 'Uhtred M.',
      theme_color: '#0A0A0A',
      display: 'fullscreen',
      background_color: '#0A0A0A',
      orientation: 'portrait',
      start_url: '/?from=homescreen'
    }
  },
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
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'Noto+Sans': {
        wght: [
          700, 500, 600, 400
        ]
      },
      'Josefin+Sans': {
        wght: [
          700, 400
        ]
      }
    }
  },
  runtimeConfig: {
    public: {
      socialLink: {
        instagram: process.env.UH_SOCIAL_INSTAGRAM || 'https://instagram.com/uhtred.dev',
        linkedin: process.env.UH_SOCIAL_LINKEDIN || 'https://www.linkedin.com/in/uhtredmiller/',
        dribbble: process.env.UH_SOCIAL_DRIBBBLE || 'https://dribbble.com/uhtredmiller',
        youtube: process.env.UH_SOCIAL_YOUTUBE || 'https://www.youtube.com/@ageumatheus',
        github: process.env.UH_SOCIAL_GITHUB || 'https://github.com/txiocoder'
      }
    }
  }
})
