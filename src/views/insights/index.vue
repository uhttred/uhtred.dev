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
                class="bdr-b-2 last:border-b-0"
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
const displayStyle = ref('')
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
} = await usePaginator('insights', {
  query,
  pageLimit: 8,
})

const changeDisplayStyle = (style: string) =>{
  displayStyle.value = style
}

onBeforeRouteUpdate(route => {
  if (route.query.q && route.query.q !== query.value.search) {
    query.value.search = route.query.q
    reset()
  }
})

const pageTitle =  ref(t('pages.insights.index.title'))
if (query.value.search) {
  pageTitle.value = locale.value === 'pt'
    ? `${query.value.search} - Buscar por Insights | Uhtred M`
    : `${query.value.search} - Insight Search | Uhtred M`
}

useSeoMeta({
  title: pageTitle
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
    name: pageTitle.value //|| t('pages.insights.index.title')
  })
])
</script>
