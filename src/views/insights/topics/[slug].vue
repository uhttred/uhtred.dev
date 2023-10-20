<template>
  <div>
    <!-- newsletter or ads -->
    <CardHorizontalAutoNewsletterOrAds
      class="mt-8"
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
    <!--  -->
    <div
      v-else
      class="w-full"
    >
      <h1 class="text-30 text-color-1 font-bold mt-6 lg:mt-8">
        <!-- {{
          locale === 'pt'
            ? `Insights sobre ${topic.pt_name || topic.name}`
            : `Insights about ${topic.name}`
        }} -->
        {{
          locale === 'pt'
            ? `${topic.pt_name || topic.name}, Insights`
            : `${topic.name}, Insights`
        }}<span class="text-green-brand">.</span>
      </h1>
      <!-- serach bar and applied topics -->
      <div class="py-4 lg:pt-5.5 sticky top-12 bg-1 z-10">
        <InputSearchBar
          v-model="query.search"
          :placeholder="
            locale === 'pt'
              ? `Buscar por insights sobre ${topic.pt_name || topic.name}`
              : `Search for insights about ${topic.name}`
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
        v-if="entries"
        :key="topic.slug"
        :insights="entries"
        :display-style="displayStyle"
      />
      <div class="row-c mb-8">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.params.slug)
  }
})

const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug)
const searchQuery = computed(() => route.query.q)
const displayStyle = ref('')

const changeDisplayStyle = (style: string) =>{
  displayStyle.value = style
}

const {
  data: topic,
  error,
  refresh,
  pending
} = await useFetch(`topics/${slug.value}`)

const query = ref({
  search: searchQuery.value,
  topics__in: topic.value ? topic.value.id : ''
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

const title = computed(() => {
  if (topic.value) {
    return locale.value === 'pt'
      ? `Insights sobre ${topic.value.pt_name || topic.value.name} - Insights | Uhtred M`
      : `Insights about ${topic.value.name} - Insights | Uhtred M` 
  }
  return 'Insights | Uhtred M'
})

const description = computed(() => {
  if (topic.value) {
    return locale.value === 'pt'
      ? `Descubra mais insights sobre ${topic.value.pt_name || topic.value.name} entre outros tópicos.`
      : `Discover more insights about ${topic.value.name} among other topics` 
  }
  return '...'
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  twitterTitle: title,
  ogDescription: description,
  twitterDescription: description
})

useSchemaOrg([
  defineWebPage({
    '@type': ['CollectionPage', 'SearchResultsPage'],
  }),
  defineWebPage({
    description: description,
    name: title
  })
])
</script>
