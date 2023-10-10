<template>
  <div>
    <section class="row-c">
      <div class="row">
        <!-- left container -->
        <div class="col-span-full xl:col-span-8 min-h-screen">
          <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-12">
            {{ $t('Insights') }}
          </h1>
          <!-- serach bar and applied topics -->
          <div class="py-4 lg:pt-8 sticky top-14 bg-1">
            <InputSearchBar
              v-model="query.search"
              :placeholder="
                locale === 'pt'
                  ? 'Buscar por insights...'
                  : 'Search for insights...'
              "
              @search="reset"
            />
            <!-- <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
              <p class="text-12 font-medium text-color-3">
                Applied topics:
              </p>
              <UhInsightTag
                v-for="tag in ['Django', 'Python', 'Ruby',]"
                :key="tag"
                :tag="tag"
              />
            </div> -->
          </div>
          <!-- insights listing -->
          <div class="w-full mt-14 flex flex-col items-center">
            <CardInsightList
              v-for="insight in entries"
              :key="insight.id"
              :insight="insight"
              class="bdr-b-2 last:mb-0 last:border-b-0"
            />
            <UhSpinner
              v-show="loading"
              class="mt-8"
            />
            <!--  -->
            <button
              v-if="canLoadMore && !loading"
              class="text-14 mt-8 text-color-1 underline decoration-green-brand underline-offset-2"
              @click="loadMore"
            >
              {{ $t('Load more') }}
            </button>
            <div
              v-if="$config.public.adsense.showAds"
              class="max-h-[90px] mb-6 w-full max-w-full rounded-md bg-2 bdr-2"
            >
              <!-- Ad Slot Name: Insights Side Bar Right -->
              <Adsbygoogle
                :ad-slot="$config.public.adsense.slot.horizontalMainContent"
                ad-format="fluid"
              />
            </div>
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
              <div
                class="max-h-[14.875rem] w-full max-w-full rounded-md bg-2 bdr-2"
              >
                <!-- Ad Slot Name: Insights Side Bar Right -->
                <Adsbygoogle
                  v-if="$config.public.adsense.showAds"
                  :ad-slot="$config.public.adsense.slot.topRightSidebar"
                  ad-format="display"
                  :ad-style="{display: 'inline-block', height: '238px', width: '238px'}"
                />
              </div>
            </div>
            <!--  -->
            <PageAsideNewsletter class="mt-8" />
            <!-- content block -->
            <PageAsideInsightsTopics class="mt-8" />
          </div>
        </aside>
      </div>
    </section>
    <!-- products -->
    <PageSectionProductListSimple class="mb-24 xl:mt-24 mt-14" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const searchQuery = computed(() => route.query.q )
const query = ref({
  search: searchQuery.value
})
const {
  entries,
  loadMore,
  loading,
  canLoadMore,
  reset
} = await usePaginator('insights', {
  query,
  pageLimit: 8,
})

definePageMeta({
  title: 'pages.insights.index.title',
  description: 'pages.insights.index.description'
})
useSchemaOrg([
  defineWebPage({
    '@type': ['CollectionPage', 'SearchResultsPage'],
  }),
  defineWebPage({
    description: t('pages.insights.index.description'),
    name: t('pages.insights.index.title')
  })
])
</script>
