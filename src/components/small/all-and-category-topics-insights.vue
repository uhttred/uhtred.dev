<template>
  <section class="row mt-14 gap-y-8 bdr-b-1 pb-6">
    <header class="col-span-full mb-4">
      <h1
        class="text-color-1 font-bold text-28"
      >
        {{ t1.name[locale] }} & {{ t2.name[locale] }}<span class="text-green-500">.</span>
      </h1>
    </header>
    <CardInsightFlex
      v-for="insight in insights"
      :key="insight.id"
      :insight="insight"
    />
    <!--  -->
    <div class="col-span-full flex flex-col items-center">
      <UhSpinner v-show="insightLoading" />
      <button
        v-if="insightError && !insightLoading"
        title="Error! Retry"
        @click="insightReset"
      >
        <i class="icon-refresh-cw text-red-500" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const props = defineProps(['t1', 't2'])

// insights in programming and marketing
const {
    entries: insights,
    loading: insightLoading,
    reset: insightReset,
    error: insightError 
  } = await usePaginator('insights', {
  pageLimit: 4,
  query: {
    topics__in: `${props.t1.id},${props.t2.id}`
  }
})
</script>
