<template>
  <div>
    <UhMenuSub />
    <!--  -->
    <section class="row-c">
      <div class="row bdr-b-1 relative">
        <!-- share icons -->
        <div
          class="col-span-1 absolute h-full right-full hidden xl:block pb-14 mr-8"
        >
          <PageAsideSocialShare
            v-if="serie"
            :url-path="route.path"
            :title="title"
            :description="description"
            :item-id="serie.slug"
            content-type="serie"
            class="mt-40 sticky top-24"
          />
        </div>
        <!-- left container -->
        <section class="col-span-full xl:col-span-8">
          <!-- newsletter or ads -->
          <CardHorizontalAutoNewsletterOrAds
            class="mt-8"
            :newsletter-title="
              serie && serie.status === 'in_launch'
                ? {
                    en: 'This serie is In Launch, get latest updates',
                    pt: 'Esta série está em lançamento, receba as atualizações'
                  }
                : null
            "
          />
          <!-- tag loading error -->
          <div
            v-if="error || pending"
            class="py-6 flex flex-col items-center"
          >
            <UhSpinner v-if="pending" />
            <p
              v-if="error && !pending"
              class="text-14 text-color-2 mb-8"
            >
              {{ $t('Error loading') }}.
              <button
                class="hover:underline text-red-500"
                @click="refresh"
              >
              {{ $t('Reload') }}
              </button>
            </p>
          </div>
          <div v-else>
            <header class="flex flex-col-reverse mt-6 xl:mt-8">
              <!-- title -->
              <h1 class="text-28 md:text-40/[58px] text-color-1 font-bold mt-1">
                {{ 
                  locale === 'pt'
                    ? serie.pt_title || serie.title
                    : serie.title
                }}
              </h1>
              <div class="flex items-center gap-x-2.5">
                <SmallSerieStatusTag
                  :status="serie.status"
                />
                <p class="text-13 text-color-3">
                  {{ serie.count_insights }} Insights
                </p>
                <p class="text-13 text-color-3">
                  •
                </p>
                <p class="text-13 text-color-3">
                  {{ useCompactNumberFormat(serie.count_insights_views).value }} {{ $t('Reads') }}
                </p>
              </div>
            </header>
            <!--  -->
            <p class="text-14/6 text-color-3 mt-3">
              {{ 
                  locale === 'pt'
                    ? serie.pt_description || serie.description
                    : serie.description
                }}
            </p>
            <!-- serach bar and view toggle -->
            <div class="py-4 lg:pt-5.5 sticky top-12 bg-1 z-10">
              <InputSearchBar
                v-model="query.search"
                :placeholder="
                  locale === 'pt'
                    ? `Buscar por insights em ${serie.pt_title || serie.title}`
                    : `Search for insights in ${serie.title}`
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
            <SmallInsightListingWrapperFor8cols
              :insights="entries"
              :display-style="displayStyle"
            />
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
                v-if="insightsError && !loading"
                title="Error! Retry"
                @click="reset"
              >
                <i class="icon-refresh-cw text-red-500" />
              </button>
            </div>
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
    <Section4ProductSuggestion class="mt-14 mb-4" />
    <!-- all topics -->
    <SectionAllAndCategoryTopics />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.params.slug)
  }
})

const { locale } = useI18n()
const { $config } = useNuxtApp()
const route = useRoute()
const displayStyle = ref('')
const searchQuery = computed(() => route.query.q)

const changeDisplayStyle = (style: string) =>{
  displayStyle.value = style
}

const slug = computed(() => route.params.slug)
const { data: serie, error, refresh, pending } = await useFetch(`series/${slug.value}`)

const query = ref({
  search: searchQuery.value,
  series__in: serie.value.id
})

const {
  entries,
  loadMore,
  loading,
  canLoadMore,
  reset,
  error: insightsError
} = await usePaginator('insights', {
  query,
  pageLimit: 8,
})

const title = computed(() => {
  if (serie.value) {
    const t =  locale.value === 'pt'
      ? serie.value.pt_title || serie.value.title
      : serie.value.title
    return `${t} | Uhtred M`
  }
  return '404 Error - Series | Uhtred M'
})

const description = computed(() => {
  if (serie.value) {
    return locale.value === 'pt'
      ? serie.value.pt_description || serie.value.description
      : serie.value.description
  }
  return ''
})

const image = computed(() => {
  if (serie.value) {
    return serie.value?.cover?.url || $config.public.defaultCoverUrl
  }
  return $config.public.defaultCoverUrl
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  twitterTitle: title,
  ogDescription: description,
  twitterDescription: description,
  twitterImage: image,
  ogImage: image,
  ogImageUrl: image
})

if (serie.value) {
  useSchemaOrg([
    defineArticle({
      '@type': 'BlogPosting',
      image: image.value,
      datePublished: serie.value.created_at,
      dateModified: serie.value.updated_at,
      author: [
        {
          name: serie.value.author.name,
          url: serie.value.author.website,
          image: serie.value.author.avatar?.url
        }
      ]
    })
  ])
}
</script>
