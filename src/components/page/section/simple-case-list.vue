<template>
  <div class="row-c py-120px">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <p class="text-24 text-gray-950 lg:text-26 font-bold">
          Cases that make us inspired
        </p>
        <!--  -->
        <NuxtLink
          :to="localePath('index')"
          class="text-18 text-gray-700 border-b-2 
            border-green-500 hover:text-gray-950 pb-1 hidden lg:block"
        >
          See all cases
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
  </div>
</template>

<script setup lang="ts">
const cases = ref([
  {
    id: 1,
    banner: '/image/temp/case-banner-zaki.png',
    logo: '/image/brand/logo-zaki.svg',
    title: 'More sales after a well-consolidated process',
    text: 'Find out how ZAKI became the first platform in Angola to sell subscriptions to digital services.',
    reverseLayout: false,
  },
  {
    id: 2,
    banner: '/image/temp/case-banner-muve.png',
    logo: '/image/brand/logo-muve.svg',
    title: "A space that doesn't let you miss anything",
    text: 'Find out how ZAKI became the first platform in Angola to sell subscriptions to digital services.',
    reverseLayout: true,
  }
])
</script>
