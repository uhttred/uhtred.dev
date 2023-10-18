<template>
  <div class="w-full">
    <div class="flex gap-x-2">
      <p class="text-12 text-color-3">
        Serie
      </p>
      <SmallSerieStatusTag
        :status="serie.status"
      />
    </div>
    <h3
      class="text-18/7 font-bold text-color-1 mt-2 hover:underline"
    >
      <NuxtLink
          :to="localePath({
            name: 'series-slug',
            params: {
              slug: serie.slug
            }
          })"
        >
          {{
            locale === 'pt'
              ? serie.pt_title || serie.title
              : serie.title
          }}
        </NuxtLink>
    </h3>
    <ul class="mt-5">
      <li
        v-for="insight in insights"
        :key="insight.slug"
        :class="[
          'text-13 mb-3 last:mb-0 hover:underline',
          {
            'text-color-3': insight.id !== activeInsight.id,
            'text-color-2 underline': insight.id === activeInsight.id
          }
        ]"
      >
        <NuxtLink
          :to="localePath({
            name: 'insights-slug',
            params: {
              slug: insight.slug
            }
          })"
        >
          {{
            locale === 'pt'
              ? insight.pt_title || insight.title
              : insight.title
          }}
        </NuxtLink>
      </li>
      <!--  -->
      <li>
        <button
          v-if="canLoadMore && !loading"
          @click="loadMore"
          class="text-13 text-color-1 underline decoration-green-brand"
        >
          {{ $t('Load more') }}
        </button>
        <UhSpinner v-show="loading" />
        <button
          v-if="error && !loading"
          title="Error! Retry"
          @click="reset"
        >
          <i class="icon-refresh-cw text-red-500" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  'serie',
  'activeInsight',
  'pageLimit'
])
const { locale } = useI18n()
const {
  entries: insights,
  error,
  loading,
  reset,
  canLoadMore,
  loadMore
} = await usePaginator('insights', {
  pageLimit: props.pageLimit || 8,
  query: {
    series__in: props.serie.id,
    order_by: 'serieitem__number',
    'minimal-fields': 'yes'
  }
})
</script>
