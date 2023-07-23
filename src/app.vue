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
        <NuxtPage />
      </Body>
    </Html>
  </div>
</template>

<script setup>
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = ref('')
const iconPath = '/icon.svg'
const description = t('pages.index.description')
const titleTemplate = (title) => title
  ? `${title} | Uhtred M.`
  : 'Uhtred M.'
useHead({
  titleTemplate
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
  msapplicationTileColor: '#0B0C0D',
  msapplicationTileImage: iconPath,
  colorScheme: '#0B0C0D',
  themeColor: '#0B0C0D',
  author: 'Uhtred Miller',
  publisher: 'Uhtred M.',
  creator: 'Uhtred M.',
  mobileWebAppCapable: 'yes',
  ogImageAlt: 'Uhtred M. logo image',
  robots: {
    index: true,
    follow: true,
  },
})
</script>
