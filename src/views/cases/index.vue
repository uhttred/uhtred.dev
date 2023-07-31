<template>
  <div class="row-c">
    <section class="row">
      <!-- left container -->
      <div class="col-span-full xl:col-span-8 min-h-screen">
        <h1 class="text-40 text-color-1 font-bold mt-12">
          {{ $t('Cases') }}
        </h1>
        <!-- serach bar and applied topics -->
        <div class="py-8 sticky top-14 bg-1">
          <InputSearchBar />
          <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
            <p class="text-12 font-medium text-color-3">
              Applied clients:
            </p>
            <UhInsightTag
              v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve',]"
              :key="tag"
              :tag="tag"
            />
          </div>
        </div>
        <!-- cases listing -->
        <div>
          <CardCase
            v-for="c in cases"
            :key="c.id"
            class="mt-12 bdr-b-2 last:border-b-0"
            :reverse-layout="c.reverseLayout"
            :project-case="c"
          />
        </div>
      </div>
      <!-- vertical line -->
      <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
        <div class="liney-1" />
      </div>
      <!-- sidebar container -->
      <aside class="col-span-3 col-start-10 hidden xl:block">
        <!-- sticky content -->
        <div class="sticky top-[90px]">
          <!-- content block -->
          <div class="mt-8">
            <!-- <h3 class="text-20 text-color-1 font-bold mb-5.5">
              Announcement
            </h3> -->
            <!--  -->
            <div class="w-full h-[14.875rem] rounded-md bg-2 bdr-2">

            </div>
          </div>
          <!-- content block -->
          <div class="mt-8">
            <h3 class="text-20 text-color-1 font-bold mb-5.5">
              Clients
            </h3>
            <!--  -->
            <div class="flex flex-wrap mt-4 gap-2 items-center">
              <UhInsightTag
                v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve',]"
                :key="tag"
                :tag="tag"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
    <!--  -->
    <PageSectionInsightsList />
  </div>
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
