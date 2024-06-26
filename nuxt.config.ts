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
  vite: {
    assetsInclude: [
      '**/*.md'
    ]
  },
  modules: [
    // '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    'nuxt-simple-sitemap',
    'nuxt-schema-org',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/google-adsense',
    'nuxt-disqus'
  ],
  cookieControl: {
    isControlButtonEnabled: false,
    isAcceptNecessaryButtonEnabled: false,
    barPosition: 'bottom-right',
    locales: [
      'en', 
      'pt'
    ],
    colors: {
      barBackground: '#fff',
      barTextColor: '#101010',
      barButtonBackground: '#101010',
      barButtonColor: '#fafafa',
    }
  },
  disqus: {
    shortname: 'uhtred',
  },
  site: {
    url: 'https://uhtred.dev'
  },
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Uhtred M.',
      short_name: 'Uhtred M.',
      theme_color: '#101010',
      display: 'fullscreen',
      background_color: '#101010',
      orientation: 'portrait',
      start_url: '/?from=pwa-homescreen'
    }
  },
  i18n: {
    lazy: true,
    langDir: 'locale',
    defaultLocale: 'en',
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
  'google-adsense': {
    id: 'ca-pub-2215680955780165'
  },
  googleFonts: {
    download: false,
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
  gtag: {
    id: ''
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.uhtred.dev',
      appBaseUrl: process.env.NUXT_PUBLIC_APP_BASE_URL || 'https://uhtred.dev',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://uhtred.dev',
      featuredQuoteIds: process.env.NUXT_PUBLIC_FEATURED_QUOTE_IDS || '1,2',
      defaultCoverUrl: process.env.NUXT_PUBLIC_DEFAULT_COVER_URL || 'https://uhtred.dev/image/banner/default-insight-cover.png',
      contact: {
        email: process.env.NUXT_PUBLIC_CONTATC_EMAIL || 'am@uhtred.dev',
      },
      socialLink: {
        instagram: process.env.NUXT_PUBLIC_SOCIAL_LINK_INSTAGRAM || 'https://instagram.com/uhtred.dev',
        linkedin: process.env.NUXT_PUBLIC_SOCIAL_LINK_LINKEDIN || 'https://www.linkedin.com/in/uhtredmiller/',
        dribbble: process.env.NUXT_PUBLIC_SOCIAL_LINK_DRIBBBLE || 'https://dribbble.com/uhttred',
        twitter: process.env.NUXT_PUBLIC_SOCIAL_LINK_TWITTER || 'https://twitter.com/uhtredmiller',
        youtube: process.env.NUXT_PUBLIC_SOCIAL_LINK_YOUTUBE || 'https://www.youtube.com/@ageumatheus',
        github: process.env.NUXT_PUBLIC_SOCIAL_LINK_GITHUB || 'https://github.com/uhttred',
        telegramCommunity: process.env.NUXT_PUBLIC_SOCIAL_LINK_TELEGRAM_COMMUNITY,
        whatsappCommunity: process.env.NUXT_PUBLIC_SOCIAL_LINK_WHATSAPP_COMMUNITY,
      },
      formsUrl: {
        ptStartProject: process.env.NUXT_PUBLIC_FORMS_URL_PT_START_PROJECT || '',
        enStartProject: process.env.NUXT_PUBLIC_FORMS_URL_EN_START_PROJECT || '',
        ptRequestService: process.env.NUXT_PUBLIC_FORMS_URL_PT_REQUEST_SERVICE || '',
        enRequestService: process.env.NUXT_PUBLIC_FORMS_URL_EN_REQUEST_SERVICE || '',
        schedule: process.env.NUXT_PUBLIC_FORMS_URL_SCHEDULE || ''
      },
      i18n: {
        baseUrl: process.env.NUXT_PUBLIC_I18N_BASE_URL || 'https://uhtred.dev'
      },
      gtag: {
        id: process.env.NUXT_PUBLIC_GTAG_ID
      },
      'google-adsense': {
        id: process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_ID || 'ca-pub-2215680955780165',
        // analyticsUacct: process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_ANALYTICS_UACCT || '',
        test: process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_TEST === 'true',
        // analyticsDomainName: process.env.NUXT_PUBLIC_ANALYTICS_DOMAIN_NAME|| 'uhtred.dev'
      },
      topic: {
        programmingId: process.env.NUXT_PUBLIC_TOPIC_PROGRAMMING_ID,
        businessId: process.env.NUXT_PUBLIC_TOPIC_BUSINESS_ID,
        marketingId: process.env.NUXT_PUBLIC_TOPIC_MARKETING_ID,
        financeId: process.env.NUXT_PUBLIC_TOPIC_FINANCE_ID,
      }
    }
  }
})
