<template>
  <section class="row-c">
    <div class="row bdr-t-1 bdr-b-1">
      <section class="col-span-full xl:col-span-8">
        <header class="my-14">
          <h1 class="text-color-1 font-bold text-38">
            Insight series<span class="text-green-500">.</span>
          </h1>
          <p class="text-16/7 text-color-2 mt-4">
            With series of insights you get more deep and valuable content.
          </p>
        </header>
        <!-- series -->
        <CardSerieList
          v-for="serie in entries"
          class="mb-12"
          :key="serie.id"
          :serie="serie"
        />
        <!--  -->
        <div class="w-full flex flex-col items-center">
          <UhSpinner v-show="loading" />
          <button
            v-if="error && !loading"
            title="Error! Retry"
            @click="reset"
          >
            <i class="icon-refresh-cw text-red-500" />
          </button>
        </div>
      </section>
      <!-- vertical line -->
      <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
        <div class="liney-1" />
      </div>
      <aside class="col-span-3 col-start-10 hidden xl:block pb-14">
        <!-- sticky content -->
        <div class="sticky top-20">
          <!-- content block -->
          <div>
            <!--  -->
            <AdsenseDisplayVertical
              class="mt-14 mb-8"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
const { entries, loading, reset, error } = await usePaginator('series', {
  pageLimit: 4
})
</script>
