<template>
  <section
    id="insight-title-slide"
    class="relative bg-2 w-full overflow-hidden py-1"
  >
    <marquee
      class="flex gap-x-5.5 justify-center items-center"
      :pause-on-hover="true"
      :duration="40"
      :pause="error"
    >
      <div
        v-if="error || loading"
        class="flex justify-center items-center"
      >
        <UhSpinner v-show="loading" />
        <button
          v-if="error && !loading"
          title="Error! Retry"
          @click="reset"
        >
          <i class="icon-refresh-cw text-red-500" />
        </button>
      </div>
      <p
        v-for="insight in entries"
        :key="insight.id"  
        class="text-12 font-medium text-color-3"
      >
        <span class="mx-2.5">
          •
        </span>
        <NuxtLink
          :to="
            localePath({
              name: 'insights-slug',
              params: {
                slug: insight.slug
              }
            })
          "
          class="hover:text-color-1 mx-2.5 inline-block"
        >
          {{
            locale === 'pt'
              ? insight.pt_title || insight.title
              : insight.title
          }}
        </NuxtLink>
      </p>
    </marquee>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { entries, error, loading, reset } = await usePaginator('insights/featured?minimal-fields=yes', {
  pageLimit: 8
})
</script>
