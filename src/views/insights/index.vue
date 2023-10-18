<template>
  <div>
    <section class="row-c">
      <div class="row">
        <!-- left container -->
        <section class="col-span-full xl:col-span-8">
          <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-8">
            Insights<span class="text-green-brand">.</span>
          </h1>
          <!-- serach bar and view toggle -->
          <div class="py-4 lg:pt-5.5 sticky top-12 bg-1 z-10">
            <InputSearchBar
              v-model="query.search"
              :placeholder="
                locale === 'pt'
                  ? 'Buscar por insights'
                  : 'Search for greatest insights'
              "
              @search="reset"
            />
            <!--  -->
            <SmallInsightDisplayStyleToggle
              class="mt-3"
              @display-style="changeDisplayStyle"
            />
          </div>
          <!-- insights listing -->
          <div
            :class="{
              'w-full mt-6 flex flex-col items-center': displayStyle === 'list',
              'w-full mt-6 flex flex-wrap gap-x-5 lg:ml-20 xl:ml-0 mb-8': displayStyle === 'grid',
            }"
          >
            <template
              v-for="insight in entries"
              :key="insight.id"
            >

              <CardInsightList
                v-if="displayStyle === 'list'"
                :insight="insight"
                class="bdr-b-2 mb-5 last:border-b-0"
              />
              <CardInsightFlex
                v-if="displayStyle === 'grid'"
                :insight="insight"
                class="mb-8 last:mb-0 sm:w-[238px] md:w-[324px]"
              />
            </template>
          </div>
          <div class="row-c">
            <UhSpinner
              v-show="loading"
              class="mb-8"
            />
            <!--  -->
            <button
              v-if="canLoadMore && !loading"
              class="text-14 mb-8 text-color-1 underline decoration-green-brand underline-offset-2"
              @click="loadMore"
            >
              {{ $t('Load more') }}
            </button>
          </div>
        </section>
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
                <!-- <Adsbygoogle
                  v-if="$config.public.adsense.showAds"
                  :ad-slot="$config.public.adsense.slot.topRightSidebar"
                  ad-format="display"
                  :ad-style="{display: 'inline-block', height: '238px', width: '238px'}"
                /> -->
              </div>
            </div>
            <!--  -->
            <!-- <PageAsideNewsletter class="mt-8" /> -->
            <!-- content block -->
            <!-- <PageAsideInsightsTopics class="mt-8" /> -->
          </div>
        </aside>
      </div>
    </section>
    <!-- products -->
    <!-- <PageSectionProductListSimple class="mb-24 xl:mt-24 mt-14" /> -->
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const displayStyle = ref('')
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
  pageLimit: 3,
})

const changeDisplayStyle = (style: string) =>{
  displayStyle.value = style
}

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
