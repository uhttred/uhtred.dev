<template>
  <article>
    <div class="w-full h-[21.375rem] bg-2 rounded-lg overflow-hidden bdr-2">
      <!-- image -->
      <a
        :href="product.buy_at"
        target="_blank"
      >
        <UhImage
          :image-src="product?.cover?.url"
          :thumbnail-src="product?.cover?.thumbnail_url"
          alt="product cover"
        />
      </a>
    </div>
    <a
      :href="product.buy_at"
      target="_blank"
    >
      <h1 class="text-18/9 font-medium text-color-1 mt-4 lg:mt-5.5 hover:underline">
        {{ product.name }}
        <span class="text-color-3 px-2">•</span>
        <span class=" text-green-500 text-16">$ {{ product.price }}</span>
      </h1>
    </a>
    <div class="flex flex-wrap mt-4 gap-2">
      <UhTag
        v-for="tag in product.tags"
        :key="tag.id"
        :tag="tag"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
const { product } = defineProps(['product'])
</script>
