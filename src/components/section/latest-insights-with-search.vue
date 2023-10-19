<template>
  <section
    id="latest-insights-with-search"
    class="row-c pt-12"
  >
    <header class="row">
      <div class="col-span-full">
        <h1
          class="text-color-1 font-bold text-38 text-center"
        >
          {{ $t('Read the latest') }}<span class="text-green-500">.</span>
        </h1>
      </div>
      <!-- search bar -->
      <div
        class="col-span-full xl:col-span-8 xl:col-start-3 mt-5.5
          md:col-span-6 md:col-start-2 lg:col-start-3"
      >
        <InputSearchBar
          :placeholder="
            locale === 'pt'
              ? 'Buscar por insights'
              : 'Search for greatest insights'
          "
          @search="goSearch"
        />
      </div>
    </header>
    <!-- articles -->
    <div class="row mt-14 gap-y-14">
      <CardInsightFlex
        v-for="insight in entries"
        :key="insight.id"
        :insight="insight"
      />
      <!--  -->
      <div class="col-span-full flex flex-col items-center">
        <UhSpinner v-show="loading" />
        <button
          v-if="error && !loading"
          title="Error! Retry"
          @click="reset"
        >
          <i class="icon-refresh-cw text-red-500" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { push } = useRouter()
const { locale } = useI18n()
const { entries, loading, reset, error } = await usePaginator('insights', {
  pageLimit: 4
})
const goSearch = (query: string) => {
  push(localePath({
    name: 'insights',
    query: {
      q: query
    }
  }))
}
</script>
