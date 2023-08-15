<template>
  <div class="row-c">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('t012') }}
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('insights')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          {{ $t('See all Insights') }}
        </NuxtLink>
      </div>
    </div>
    <!--  -->
    <div class="row pt-20 gap-y-10">
      <CardInsightBasic
        v-for="insight in entries"
        :key="insight.id"
        :insight="insight"
        class="col-span-4"
      />
      <!--  -->
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
</template>

<script setup lang="ts">
const { entries, loading, reset, error } = await usePaginator('insights', {
  pageLimit: 3
})
</script>
