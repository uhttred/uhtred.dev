<template>
  <div>
    <h3 class="text-20 text-color-1 font-bold">
      {{ $t('t014') }}
    </h3>
    <!--  -->
    <div class="flex flex-wrap mt-4 items-center">
      <SmallInsightTopicsList :topics="entries" />
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
</template>

<script setup lang="ts">
const props = defineProps({
  pageLimit: {
    type: Number,
    default: 28
  }
})
const { entries, loading, error, reset } = await usePaginator('topics/random', {
  pageLimit: props.pageLimit
})
</script>
