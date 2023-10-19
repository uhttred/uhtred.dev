<template>
  <div>
    <header class="flex">
      <!-- title -->
      <h1 class="text-32 text-color-1 font-bold">
        {{ 
          locale === 'pt'
            ? `Insights de ${author.pt_name || author.name}`
            : `Insights by ${author.name}`
        }}
      </h1>
    </header>
    <!-- serach bar and view toggle -->
    <div class="py-4 lg:pt-5.5 sticky top-12 bg-1 z-10">
      <InputSearchBar
        v-model="query.search"
        :placeholder="
          locale === 'pt'
            ? `Buscar por insights de ${author.pt_name || serie.name}`
            : `Search insights by ${author.name}`
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
        v-if="error && !loading"
        title="Error! Retry"
        @click="reset"
      >
        <i class="icon-refresh-cw text-red-500" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['author'])
const route = useRoute()
const searchQuery = computed(() => route.query.q)
const displayStyle = ref('')

const changeDisplayStyle = (style: string) =>{
  displayStyle.value = style
}

const query = ref({
  search: searchQuery.value,
  author: props.author.id
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
</script>
