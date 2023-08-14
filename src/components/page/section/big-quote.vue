<template>
  <section class="row-c">
    <div class="row py-20 xl:py-[10rem]">
      <div class="col-span-full flex flex-col items-center text-center font-bold">
        <template v-if="pending || error">
          <UhSpinner v-show="pending" />
          <button
            v-if="error && !pending"
            title="Error! Retry"
            @click="refresh"
          >
            <i class="icon-refresh-cw text-red-500" />
          </button>
        </template>
        <template v-else>
          <!-- quote -->
          <h2 class="text-color-1 text-[1.75rem]/[2.75rem] xl:text-[2.25rem]/[3.75rem] max-w-[882px]">
            <span class="text-green-500">"</span>{{ locale === 'pt' ? data.pt_text || data.text : data.text }}<span class="text-green-500">"</span>
          </h2>
          <!-- logo -->
          <img
            class="w-[80px] mt-10 lg:mt-12 lg:w-[100px] dark:hidden"
            :src="data.brand_logo.url"
            alt="logo"
          >
          <img
            class="w-[80px] mt-10 lg:mt-12 lg:w-[100px] hidden dark:block"
            :src="data.brand_logo_dark.url"
            alt=""
          >
          <!-- person and job title -->
          <p class="text-14 text-color-1 mt-4 lg:mt-8 lg:text-18 font-normal">
            {{ data.author.name }} <span class="text-color-3">/ {{ data.author.headline }}</span>
          </p>
        </template>
        <!--  -->
        <p class="max-w-[600px] text-12/5 lg:text-14/8 text-color-4 mt-5.5 lg:mt-4 font-normal">
          {{ $t('pages.section.bigquote.p1') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { locale } = useI18n()
const quoteId = config.public.featuredQuoteId
const { data, refresh, error, pending } = useFetch(`quotes/${quoteId}`)
</script>
