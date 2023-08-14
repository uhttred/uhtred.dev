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
        <img
          :src="insight.cover.url"
          alt="insight cover"
          class="w-full h-full object-cover"
        >
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
      <UhTag
        v-for="tag in insight.tags"
        :key="tag.id"
        :tag="tag"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { insight } = defineProps(['insight'])
</script>
