<template>
  <section
    id="all-and-category-topics"
    class="row-c"
  >
    <div class="row bdr-t-1 pt-20">
      <!--  -->
      <header class="col-span-full flex flex-col items-center">
        <h1
          class="text-color-1 font-bold text-34 text-center max-w-[490px]"
        >
          Read from topics that most matters you<span class="text-green-500">.</span>
        </h1>
        <ul class="flex flex-wrap gap-2 mt-5.5 justify-center items-center max-w-[640px]">
          <li
            v-for="tag in topics"
            :key="tag.slug"
          >
            <NuxtLink
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
          </li>
        </ul>
        <!--  -->
        <div class="mt-5.5">
          <UhSpinner v-show="topicLoading" />
          <button
            v-if="topicError && !topicLoading"
            title="Error! Retry"
            @click="topicReset"
          >
            <i class="icon-refresh-cw text-red-500" />
          </button>
        </div>
      </header>
    </div>
    <!-- Programing & Marketing -->
    <section class="row mt-14 gap-y-8 bdr-b-1 pb-6">
      <header class="col-span-full mb-4">
        <h1
          class="text-color-1 font-bold text-28"
        >
          Programing & Marketing<span class="text-green-500">.</span>
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
  </section>
</template>

<script setup lang="ts">
// topics
const {
    entries: topics,
    loading: topicLoading,
    reset: topicReset,
    error: topicError 
  } = await usePaginator('topics/random', {
  pageLimit: 40
})
// insights in programming and marketing
const {
    entries: insights,
    loading: insightLoading,
    reset: insightReset,
    error: insightError 
  } = await usePaginator('insights?topics__in=4,2', {
  pageLimit: 4
})
</script>