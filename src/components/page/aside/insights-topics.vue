<template>
  <div>
    <h3 class="text-20 text-color-1 font-bold mb-5.5">
      Insights topics
    </h3>
    <!--  -->
    <div class="flex flex-wrap mt-4 gap-2 items-center">
      <UhTag
        v-for="tag in entries"
        :key="tag.slug"
        :tag="tag"
      />
      <UhSpinner v-show="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { entries, loading } = await usePaginator('tags')
</script>
