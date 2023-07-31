<template>
  <section class="row-c py-120px">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('pages.section.caseslist.p1') }}
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('cases')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          {{ $t('See all cases') }}
        </NuxtLink>
      </div>
    </div>
    <!--  -->
    <CardCaseHFull
      v-for="c in cases"
      :key="c.id"
      class="mt-16 lg:mt-24"
      :reverse-layout="c.reverseLayout"
      :project-case="c"
    />
  </section>
</template>

<script setup lang="ts">
const cases = ref([
  {
    id: 1,
    banner: '/image/temp/case-banner-zaki.png',
    bannerDark: '/image/temp/case-banner-zaki-dark.png',
    logo: '/image/brand/logo-zaki.svg',
    logoDark: '/image/brand/logo-zaki-light.svg',
    title: 'More sales after a well-consolidated process',
    text: 'Find out how ZAKI became the first platform in Angola to sell subscriptions to digital services.',
    reverseLayout: false,
    slug: 'zaki'
  },
  {
    id: 2,
    banner: '/image/temp/case-banner-muve.png',
    bannerDark: '/image/temp/case-banner-muve-dark.png',
    logo: '/image/brand/logo-muve.svg',
    logoDark: '/image/brand/logo-muve-light.svg',
    title: "A space that doesn't let you miss anything",
    text: 'Find out how ZAKI became the first platform in Angola to sell subscriptions to digital services.',
    reverseLayout: true,
    slug: 'muve'
  }
])
</script>
