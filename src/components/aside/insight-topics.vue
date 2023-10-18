<template>
  <div>
    <h3 class="text-20 text-color-1 font-bold">
      {{ $t('t014') }}
    </h3>
    <!--  -->
    <div class="flex flex-wrap mt-4 items-center">
      <ul class="list-none flex flex-wrap gap-2">
        <li
          v-for="topic in entries"
          :key="topic.slug"
        >
          <NuxtLink
            :to="localePath({
              name: 'insights-topics-slug',
              params: {
                slug: topic.slug
              }
            })"
          >
            <UhTag
              :tag="topic"
            />
          </NuxtLink>
        </li>
      </ul>
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
