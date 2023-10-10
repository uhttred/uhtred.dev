<template>
  <div class="row-c">
    <section class="row">
      <!-- left container -->
      <div class="col-span-full xl:col-span-8 min-h-screen">
        <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-12">
          {{ $t('Cases') }}
        </h1>
        <!-- serach bar and applied topics -->
        <div class="py-4 lg:pt-8 sticky top-14 bg-1">
          <InputSearchBar
            v-model="query.search"
            @search="reset"
          />
          <!-- <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
            <p class="text-12 font-medium text-color-3">
              Applied clients:
            </p>
            <UhInsightTag
              v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve']"
              :key="tag"
              :tag="tag"
            />
          </div> -->
        </div>
        <!-- cases listing -->
        <div class="w-full flex flex-col items-center">
          <CardCase
            v-for="entry in entries"
            :key="entry.slug"
            class="first:mt-8 mt-12 bdr-b-2 last:border-b-0 w-full"
            :project-case="entry"
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
          <!-- content block -->
          <PageAsideInsightsTopics class="mt-8" />
        </div>
      </aside>
    </section>
    <!--  -->
    <PageSectionInsightsList class="py-16 lg:py-120px" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const query = ref({ search: '' })
const {
  entries,
  loadMore,
  loading,
  canLoadMore,
  reset
} = await usePaginator('cases', {
  query,
  pageLimit: 8,
})

await definePageMeta({
  title: 'pages.cases.index.title',
  description: 'pages.cases.index.description'
})
useSchemaOrg([
  defineWebPage({
    '@type': ['CollectionPage', 'SearchResultsPage'],
  }),
  defineWebPage({
    description: t('pages.cases.index.description'),
    name: t('pages.cases.index.title')
  })
])
</script>
