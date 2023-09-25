<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <NuxtLoadingIndicator
          color="#10b981"
          :height="1"
          class="z-50"
        />
        <UhMenu />
        <NuxtPage />
        <FooterBasic />
        <SmallCookieConcent />
      </Body>
    </Html>
  </div>
</template>

<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

// const title = computed(() => t(route.meta.title || 'pages.index.title'))
const title = computed(() => t('layouts.title', { title: t(route.meta.title || 'pages.index.title') }))
const description = computed(() => t(route.meta.description || 'pages.index.description'))
const iconPath = '/icon.svg'

// const titleTemplate = (title) => title
//   ? `${title} | Uhtred M.`
//   : 'Uhtred M.'
useHead({
  // titleTemplate,
  link: [
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
  ]
  // script: [
    // {
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2215680955780165',
    //   crossorigin: 'anonymous',
    //   async: ''
    // }
  // ] 
})
useSeoMeta({
  title,
  // titleTemplate,
  description,
  ogTitle: title,
  icon: iconPath,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  twitterDescription: description,
  twitterTitle: title,
  twitterImage: iconPath,
  ogImage: iconPath,
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: 'Uhtred M.',
  applicationName: 'Uhtred M.',
  appleMobileWebAppStatusBarStyle: 'black',
  msapplicationTileColor: '#101010',
  msapplicationTileImage: iconPath,
  colorScheme: '#101010',
  themeColor: '#101010',
  author: 'Uhtred Miller',
  publisher: 'Uhtred M.',
  creator: 'Uhtred M.',
  mobileWebAppCapable: 'yes',
  ogImageAlt: 'Uhtred M. image',
  robots: {
    index: true,
    follow: true,
  },
})
useSchemaOrg([
  defineWebSite({
    name: 'Uhtred M.',
    potentialAction: [
      defineSearchAction({
        target: '/insights?q={search_term_string}'
      })
    ]
  }),
  definePerson({
    name: 'Uhtred M.',
    image: '/uhtred.png',
    sameAs: [
      'https://uhtred.dev',
      'https://github.com/uhttred',
      'https://instagram.com/uhtred.dev',
      'https://linkedin.com/in/uhtredmiller'
    ]
  }),
  defineWebPage()
])
</script>
