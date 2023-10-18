<template>
  <div class="w-full flex justify-between items-center py-5">
    <div class="flex items-center">
      <i
        v-if="previousInsightRoute"
        class="icon-chevron-left text-color-1 text-16 mr-2"
      />
      <NuxtLink
        v-if="previousInsightRoute"
        :to="localePath(previousInsightRoute)"
        class="text-13 text-color-2 hover:underline hover:text-color-1"
      >
        Previous insight
      </NuxtLink>
    </div>
    <!--  -->
    <div
      class="row-c"
      v-if="error || loading"
    >
      <UhSpinner v-show="loading" />
      <button
        v-if="error && !loading"
        title="Error! Retry"
        @click="reset"
      >
        <i class="icon-refresh-cw text-red-500" />
      </button>
    </div>
    <!--  -->
    <div class="flex items-center">
      <NuxtLink
        v-if="nextInsightRoute"
        :to="localePath(nextInsightRoute)"
        class="text-13 text-color-2 hover:underline hover:text-color-1"
      >
        Next insight
      </NuxtLink>
      <i
        v-if="nextInsightRoute"
        class="icon-chevron-right text-color-1 text-16 ml-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['serieId', 'insightId'])
const { entries, reset, error, loading } = await usePaginator('serieitems', {
  query: {
    serie: props.serieId,
    order_by: 'number'
  }
})

const insightNumber = computed(() => {
  const item = entries.value.find((item) => item.insight.id === props.insightId)
  if (item) {
    return item.number
  }
  return null
})

const previousInsightRoute = computed(() => {
  if (insightNumber.value) {
    const item = entries.value.find(i => i.number === insightNumber.value - 1)
    if (item) {
      return {
        name: 'insights-slug',
        params: {
          slug: item.insight.slug
        }
      }
    }
  }
  return null
})

const nextInsightRoute = computed(() => {
  if (insightNumber.value) {
    const item = entries.value.find(i => i.number === insightNumber.value + 1)
    if (item) {
      return {
        name: 'insights-slug',
        params: {
          slug: item.insight.slug
        }
      }
    }
  }
  return null
})
</script>
