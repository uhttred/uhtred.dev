<template>
  <div class="row-c">
    <div class="row">
      <div class="col-span-full">
        <h1 class="text-34 text-color-1 font-bold mt-6 lg:mt-14">
          Products that complete you
        </h1>
      </div>
    </div>
    <!--  -->
    <div class="row py-20 gap-y-10 bdr-b-1">
      <CardProductBasic
        v-for="product in entries"
        :key="product.uid"
        :product="product"
        class="col-span-4"
      />
      <!--  -->
      <div
        v-if="loading || canLoadMore"
        class="col-span-full flex flex-col items-center"
      >
        <UhSpinner v-show="loading" />
        <button
          v-if="canLoadMore"
          class="text-14 text-color-2 hover:underline hover:text-color-1"
          @click="loadMore"
        >
          Carregar mais
        </button>
      </div>
    </div>
    <!--  -->
    <PageSectionInsightsList class="py-16 lg:py-20" />
  </div>
</template>

<script setup lang="ts">
const { entries, loading, loadMore, canLoadMore } = await usePaginator('products')
</script>
