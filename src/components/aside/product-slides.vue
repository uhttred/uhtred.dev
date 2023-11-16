<template>
  <div>
    <h3 class="text-20 text-color-1 font-bold mb-4">
      {{ $t('Featured product') }}
    </h3>
    <!--  -->
    <div class="w-full">
      <CardProductBasic
        v-for="product in entries"
        :key="product.id"
        :product="product"
        class="w-full"
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
const { entries, loading, error, reset } = await usePaginator('products/random', {
  pageLimit: 1
})
</script>
