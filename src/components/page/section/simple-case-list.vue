<template>
  <section class="row-c py-120px">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('t006') }}
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('cases')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          {{ $t('See all cases') }}
        </NuxtLink>
      </div>
    </div>
    <!--  -->
    <CardCaseHFull
      v-for="project in projects"
      :key="project.id"
      class="mt-16 lg:mt-24"
      :reverse-layout="project.reverseLayout"
      :project="project"
    />
    <!--  -->
    <div class="row-c mt-8">
      <div class="row">
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
    </div>
  </section>
</template>

<script setup lang="ts">
const { entries, loading, error, reset } = await usePaginator('cases', {
  query: {
    featured: 'true'
  },
  pageLimit: 4
})
const projects = computed(() => {
  let reverse = false
  return entries.value.map(entry => {
    entry.reverseLayout = reverse
    reverse = !reverse
    return entry
  })
})
</script>
