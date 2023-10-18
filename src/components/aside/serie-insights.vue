<template>
  <div class="w-full">
    <ul>
      <li
        v-for="insight in insights"
        :key="insight.slug"
        :class="[
          'text-13 mb-3 last:mb-0 hover:underline',
          {
            'text-color-3': insight.id !== activeInsight.id,
            'text-color-1': insight.id === activeInsight.id
          }
        ]"
      >
        <NuxtLink
          :to="localePath({
            name: 'insights-slug',
            params: {
              slug: insight.slug
            }
          })"
        >
          {{
            locale === 'pt'
              ? insight.pt_title || insight.title
              : insight.title
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  'serie',
  'activeInsight'
])
const { locale } = useI18n()
const { entries: insights } = await usePaginator('insights', {
  pageLimit: 10,
  query: {
    series__in: props.serie.id
  }
})
</script>
