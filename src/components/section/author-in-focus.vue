<template>
  <section class="row-c pt-20 pb-14">
    <div class="row">
      <header class="col-span-full flex justify-center">
        <h1
          class="text-color-1 font-bold text-38 text-center"
        >
          {{ $t('t039') }}<span class="text-green-500">.</span>
        </h1>
      </header>
    </div>
    <!--  -->
    <div class="mt-14">
      <div
        v-for="(part, index) in parts"
        :key="index"
        class="row pt-8 pb-8 bdr-t-2 gap-y-8 first:border-t-0 first:pt-0"
      >
        <article
          v-for="author in part"
          :key="author.uid"
          class="flex flex-col items-center col-span-full md:col-span-4 xl:bdr-r-2 last:border-r-0"
        >
          <div class="w-24 h-24 rounded-full bdr-2 bg-2 overflow-hidden">
            <NuxtLink
              :to="localePath({
                name: 'authors-@username',
                params: {
                  username: author.username
                }
              })"
            >
              <UhImage
                :image-src="author?.avatar?.url"
                :thumbnail-src="author?.avatar?.thumbnail_url"
                alt="author avatar"
              />
            </NuxtLink>
          </div>
          <h2 class="font-bold text-16 text-color-1 mt-5.5 hover:underline">
            <NuxtLink
              :to="localePath({
                name: 'authors-@username',
                params: {
                  username: author.username
                }
              })"
            >
              {{
                locale === 'pt'
                  ? author.pt_name || author.name
                  : author.name
              }}
            </NuxtLink>
          </h2>
          <p class="text-13 text-color-3 mt-1">
            {{ author.headline }}
          </p>
          <!--  -->
          <div class="flex items-center gap-x-2.5 mt-2">
            <p class="text-14 text-color-3">
              <span class="font-medium text-color-1">
                {{ author.count_insights }}
              </span>
              Insights
            </p>
            <p class="text-13 text-color-3">
              •
            </p>
            <p class="text-14 text-color-3">
              <span class="font-medium text-color-1">
                {{ author.count_series }}
              </span>
              {{ $t('Series') }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { entries, loading, reset, error } = await usePaginator('authors', {
  pageLimit: 6
})

const parts = computed(() => {
  if (entries.value && entries.value.length > 3) {
    const p1 = entries.value.slice(0, 3)
    const p2 = entries.value.slice(3, 6)
    return [p1, p2]
  }
  return [entries.value]
})

</script>
