<template>
  <div>
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
      <h1 class="text-34 text-color-1 font-bold mt-6 lg:mt-12">
        <!-- {{
          locale === 'pt'
            ? `Insights sobre ${tag.pt_name || tag.name}`
            : `Insights about ${tag.name}`
        }} -->
        {{
          locale === 'pt'
            ? `${tag.pt_name || tag.name}, ${$t('Insights')}`
            : `${tag.name}, ${$t('Insights')}`
        }}
      </h1>
      <!-- serach bar and applied topics -->
      <div class="py-4 lg:pt-8 sticky top-14 bg-1">
        <InputSearchBar
          v-model="query.search"
          :placeholder="
            locale === 'pt'
              ? `Buscar por insights sobre ${tag.pt_name || tag.name}`
              : `Search for insights about ${tag.name}`
          "
          @search="reset"
        />
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
const searchQuery = computed(() => route.query.q )

const {
  data: tag,
  error,
  refresh,
  pending
} = await useFetch(`tags/${slug.value}`)

const query = ref({
  search: searchQuery.value,
  tags__in: tag.value ? tag.value.id : ''
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
  if (tag.value) {
    return locale.value === 'pt'
      ? `Receba insights sobre ${tag.value.pt_name || tag.value.name} - Insights | Uhtred M.`
      : `Get insights about ${tag.value.name} - Insights | Uhtred M.` 
  }
  return 'Insights | Uhtred M.'
})

const description = computed(() => {
  if (tag.value) {
    return locale.value === 'pt'
      ? `Descubra mais insights sobre ${tag.value.pt_name || tag.value.name} entre outros tópicos.`
      : `Discover more insights about ${tag.value.name} among other topics` 
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
}, {
  mode: 'all'
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