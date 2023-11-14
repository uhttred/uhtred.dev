<template>
  <article>
    <div
      class="h-[20.25rem] sm:h-[14.875rem] md:h-[20.25rem] lg:h-[14.875rem]
        w-full bg-2 rounded-lg overflow-hidden bdr-2"
    >
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
    <div class="flex flex-col mt-2 gap-1">
      <h1 class="text-16/7 font-normal text-color-1 hover:underline">
        <a
          :href="product.buy_at"
          target="_blank"
        >
          {{
            locale === 'pt'
              ? product.pt_name || product.name
              : product.name
          }}
        </a>
      </h1>
      <p>
        <a
          v-if="product.see_prices"
          class="text-green-500 font-medium text-13"
          :href="product.buy_at"
          target="_blank"
        >
          {{ $t('See prices') }}
        </a>
        <a
          v-else
          class="text-green-500 font-medium text-13"
          :href="product.buy_at"
          target="_blank"
        >
          $ {{ product.price || '0 free' }}
        </a>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps(['product'])
const { locale } = useI18n()
</script>
