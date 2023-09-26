<template>
  <div>
    <h3 class="text-20 text-color-1 font-bold mb-5.5">
      {{ $t('t014') }}
    </h3>
    <!--  -->
    <div class="flex flex-wrap mt-4 gap-2 items-center">
      <NuxtLink
        v-for="tag in entries"
        :key="tag.slug"
        :to="localePath({
          name: 'insights-topics-slug',
          params: {
            slug: tag.slug
          }
        })"
      >
        <UhTag
          :tag="tag"
        />
      </NuxtLink>
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
const { entries, loading, error, reset } = await usePaginator('tags/random', {
  pageLimit: 24
})
</script>
