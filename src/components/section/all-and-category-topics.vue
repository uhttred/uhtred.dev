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
          {{ $t('t038') }}<span class="text-green-500">.</span>
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
    <!--  -->
    <ClientOnly>
      <SmallAllAndCategoryTopicsInsights
        class="row mt-14 gap-y-8 bdr-b-1 pb-6"
        :t1="t1"
        :t2="t2"
      />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
const { $config } = useNuxtApp()

const topicsOptions = [
  {
    name: {
      pt: 'Negócios Digitas',
      en: 'Digital Business'
    },
    id: $config.public.topic.businessId
  },
  {
    name: {
      pt: 'Marketing',
      en: 'Marketing'
    },
    id: $config.public.topic.marketingId
  },
  {
    name: {
      pt: 'Finanças Pessoais',
      en: 'Personal Finance'
    },
    id: $config.public.topic.financeId
  },
  {
    name: {
      pt: 'Programação',
      en: 'Programing'
    },
    id: $config.public.topic.programmingId
  }
]

const t1 = topicsOptions.splice(Math.floor(Math.random()*topicsOptions.length), 1)[0]
const t2 = topicsOptions.splice(Math.floor(Math.random()*topicsOptions.length), 1)[0]

// topics
const {
    entries: topics,
    loading: topicLoading,
    reset: topicReset,
    error: topicError 
  } = await usePaginator('topics/random', {
  pageLimit: 40
})
</script>
