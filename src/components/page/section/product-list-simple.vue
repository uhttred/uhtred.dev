<template>
  <div class="row-c">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-26 text-color-1 lg:text-28 font-bold">
          Products you may be interested
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('store')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          See all products
        </NuxtLink>
      </div>
    </div>
    <!--  -->
    <div class="row pt-20 gap-y-10">
      <CardProductBasic
        v-for="product in entries"
        :key="product.id"
        :product="product"
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
const { entries, loading, error, reset } = await usePaginator('products', {
  pageLimit: 3
})
</script>
