<template>
  <article
    class="col-span-4 sm:col-span-3 md:col-span-4 lg:col-span-3"
  >
    <header>
      <div class="max-h-[9.875rem] bg-2 rounded-lg overflow-hidden bdr-2">
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
      <h2
        class="text-18/9 font-semibold text-color-1 mt-4 lg:mt-5 hover:underline
          sm:text-16/7 md:text-18/9 lg:text-16/7"
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
      </h2>
    </header>
    <!-- topics -->
    <ul class="flex flex-wrap mt-2 gap-1 list-none">
      <li
        v-for="tag in insight.topics"
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
defineProps(['insight'])
</script>
