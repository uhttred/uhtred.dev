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
        <UhMenu />
        <NuxtPage />
        <FooterBasic />
      </Body>
    </Html>
  </div>
</template>

<script setup>
const { t } = useI18n()
const colorMode = useColorMode()
const { $configFetch } = useNuxtApp()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = ref('')
const iconPath = '/icon.svg'
const description = t('pages.index.head.description')
const titleTemplate = (title) => title
  ? `${title} | Uhtred M.`
  : 'Uhtred M.'
useHead({
  titleTemplate,
  link: [
    { rel: 'manifest', href: '/manifest.json' }
  ]
})
useSeoMeta({
  title,
  titleTemplate,
  description,
  ogTitle: 'Uhtred M.',
  icon: iconPath,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  twitterDescription: description,
  twitterTitle: 'Uhtred M.',
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
  ogImageAlt: 'Uhtred M. logo image',
  robots: {
    index: false,
    follow: false,
  },
})
</script>
