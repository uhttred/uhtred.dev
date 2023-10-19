<template>
  <div>
    <UhMenuSub />
    <!--  -->
    <section class="row-c">
      <div class="row bdr-b-1">
        <!-- left container -->
        <section class="col-span-full xl:col-span-8">
          <!-- newsletter or ads -->
          <CardHorizontalAutoNewsletterOrAds
            class="mt-8"
          />
          <!-- title -->
          <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-8">
            {{ $t('Series') }}<span class="text-green-brand">.</span>
          </h1>
          <!-- serach bar and view toggle -->
          <div class="py-4 lg:pt-5.5 sticky top-12 bg-1 z-10">
            <InputSearchBar
              v-model="query.search"
              :placeholder="
                locale === 'pt'
                  ? 'Buscar por séries'
                  : 'Search for greatest series'
              "
              @search="reset"
            />
          </div>
          <!-- series listing -->
          <div class="w-full flex flex-wrap gap-y-10 pt-5">
            <CardSerieList
              v-for="serie in entries"
              :key="serie.id"
              class="w-full"
              :serie="serie"
            />
          </div>
          <div class="row-c mb-8 mt-6">
            <UhSpinner
              v-show="loading"
            />
            <!--  -->
            <button
              v-if="canLoadMore && !loading"
              class="text-14 text-color-1 underline decoration-green-brand underline-offset-2"
              @click="loadMore"
            >
              {{ $t('Load more') }}
            </button>
            <button
              v-if="error && !loading"
              title="Error! Retry"
              @click="reset"
            >
              <i class="icon-refresh-cw text-red-500" />
            </button>
          </div>
        </section>
        <!-- vertical line -->
        <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div>
        <!-- sidebar container -->
        <aside class="col-span-3 col-start-10 hidden xl:block pb-12">
          <!-- sticky content -->
          <div class="sticky top-[72px]">
            <!-- ADS -->
            <AdsenseDisplayVertical class="mt-8" />
            <!-- content block -->
            <AsideInsightTopics
              class="mt-8"
              :page-limit="10"
            />
          </div>
        </aside>
      </div>
    </section>
    <!--  -->
    <SectionJoinCommunityGroup />
    <!-- line -->
    <div class="row-c">
      <div class="row">
        <div class="linex-1 col-span-full" />
      </div>
    </div>
    <!-- products -->
    <PageSectionProductListSimple class="mt-14" />
    <!-- ads -->
    <AdsenseDisplayHorizontalFull class="mb-10" />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const searchQuery = computed(() => route.query.q)
const query = ref({
  search: searchQuery.value
})
const {
  entries,
  loadMore,
  loading,
  canLoadMore,
  reset,
  error
} = await usePaginator('series', {
  query,
  pageLimit: 4,
})

const pageTitle = ref('')
if (query.value.search) {
  pageTitle.value = locale.value === 'pt'
    ? `${query.value.search} - Buscar por series | Uhtred M`
    : `${query.value.search} - Insight Search | Uhtred M`
  useSeoMeta({
    title: pageTitle
  })
}

definePageMeta({
  title: 'pages.series.index.title',
  description: 'pages.series.index.description'
})
useSchemaOrg([
  defineWebPage({
    '@type': ['CollectionPage', 'SearchResultsPage'],
  }),
  defineWebPage({
    description: t('pages.series.index.description'),
    name: pageTitle.value || t('pages.series.index.title')
  })
])
</script>
