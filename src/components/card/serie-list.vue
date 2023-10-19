<template>
  <article>
    <header class="flex flex-col-reverse">
      <h2
        class="text-24/9 md:text-28/[44px] max-w-1 font-semibold text-color-1 mt-2 hover:underline"
      >
        <NuxtLink
          :to="localePath({
            name: 'series-slug',
            params: {
              slug: serie.slug
            }
          })"
        >
          {{ 
            locale === 'pt'
              ? serie.pt_title || serie.title
              : serie.title
          }}
        </NuxtLink>
      </h2>
      <div class="flex items-center gap-x-2.5">
        <SmallSerieStatusTag
          :status="serie.status"
        />
        <p class="text-13 text-color-3">
          {{ serie.count_insights }} Insights
        </p>
        <p class="text-13 text-color-3">
          •
        </p>
        <p class="text-13 text-color-3">
          {{ useCompactNumberFormat(serie.count_insights_views).value }} {{ $t('Reads') }}
        </p>
      </div>
    </header>
    <ul class="flex flex-wrap mt-2.5 gap-1 list-none">
      <li
        v-for="tag in serie.topics"
        :key="tag.slug"
      >
        <NuxtLink
          :to="localePath({
            name: 'insights-topics-slug',
            params: {
              slug: tag.slug
            }
          })"
        >
          <UhTag
            :tag="tag"
          />
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const { locale } = useI18n()
defineProps(['serie'])
</script>
