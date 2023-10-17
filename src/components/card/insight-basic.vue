<template>
  <article>
    <div class="h-[9.875rem] bg-2 rounded-lg overflow-hidden bdr-2">
      <!-- image -->
      <NuxtLink
        :to="localePath({
          name: 'insights-slug',
          params: {
            slug: insight.slug
          }
        })"
      >
        <UhImage
          :image-src="insight.cover?.url || $config.public.defaultCoverUrl"
          :thumbnail-src="insight.cover?.thumbnail_url || $config.public.defaultCoverUrl"
          alt="insight cover"
        />
      </NuxtLink>
    </div>
    <NuxtLink
      :to="localePath({
        name: 'insights-slug',
        params: {
          slug: insight.slug
        }
      })"
    >
      <h1 class="text-18/9 font-medium text-color-1 mt-4 lg:mt-5.5 hover:underline">
        {{ 
          locale === 'pt'
            ? insight.pt_title || insight.title
            : insight.title
        }}
      </h1>
    </NuxtLink>
    <div class="flex flex-wrap mt-4 gap-2">
      <NuxtLink
        v-for="tag in insight.topics"
        :key="tag.slug"
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
    </div>
  </article>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { insight } = defineProps(['insight'])
</script>
