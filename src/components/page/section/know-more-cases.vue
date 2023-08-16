<template>
  <section class="row-c">
    <div class="row">
      <div class="col-span-full flex flex-col items-center justify-center">
        <h1 class="text-color-1 font-bold text-32 text-center">
          {{ $t('Know more great') }}
          <NuxtLink
            :to="localePath('cases')"
            class="text-green-500 hover:underline"
          >
            {{ $t('success cases') }}</NuxtLink>!
        </h1>
        <p class="text-16/8 text-color-3 mt-5.5 max-w-[40rem] text-center">
          {{ $t('t019')}}<br>
          <NuxtLink
            :to="localePath('cases')"
            class="text-color-1 underline"
          >
            {{ $t('Discover all cases') }}
          </NuxtLink>
          {{ $t('or') }}
          <NuxtLink
            :to="localePath('start')"
            class="text-color-1 underline"
          >
            {{ $t('start your project') }}
          </NuxtLink>
          {{ $t('today') }}
        </p>
      </div>
    </div>
    <!--  -->
    <div class="row mt-14 gap-y-10">
      <div
        v-for="entry in entries"
        :key="entry.slug"
        class="col-span-4"
      >
        <div class="w-full h-[9.875rem] bg-2 bdr-2 rounded-lg overflow-hidden">
          <NuxtLink
            :to="localePath({
              name: 'cases-slug',
              params: {
                slug: entry.slug
              }
            })"
          >
            <img
              :src="entry.cover?.url"
              alt="case cover"
              class="w-full h-full object-cover"
            >
          </NuxtLink>
        </div>
        <NuxtLink
          :to="localePath({
            name: 'cases-slug',
            params: {
              slug: entry.slug
            }
          })"
        >
          <h3 class="text-18/9 hover:underline font-medium text-color-1 mt-5.5">
            {{ 
              locale === 'pt'
                ? entry.pt_title
                : entry.title
            }}
          </h3>
        </NuxtLink>
      </div>
      <!--  -->
      <div class="col-span-full flex flex-col items-center">
        <UhSpinner v-if="loading" />
        <button
          v-if="error && !loading"
          title="Error! Retry"
          @click="reset"
        >
          <i class="icon-refresh-cw text-red-500" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { entries, loading, error, reset } = await usePaginator('cases', { pageLimit: 3 })
const { locale } = useI18n()
</script>
