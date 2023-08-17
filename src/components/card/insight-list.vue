<template>
  <article
      class="w-full pb-8 mb-12"
    >
      <!-- author space -->
      <div class="flex items-center gap-x-4">
        <div class="w-9 h-9 rounded-full bdr-2 bg-2 overflow-hidden">
          <!-- <img
            :src="insight?.author?.avatar?.url"
            alt="author avatar"
            class="w-full h-full object-cover"
          > -->
          <UhImage
            :image-src="insight?.author?.avatar?.url"
            :thumbnail-src="insight?.author?.avatar?.thumbnail_url"
            alt="author avatar"
          />
        </div>
        <div>
          <div class="flex items-center gap-x-2">
            <h4 class="text-13 text-color-1 font-bold">
              {{ insight.author.name }}
            </h4>
            <span class="text-2 text-color-3">•</span>
            <p class="text-12 text-color-3">
              {{ useDatetimeFormatString(insight.created_at).value }}
            </p>
          </div>
          <p class="text-13 text-color-2 mt-0.5">
            {{ insight.author.headline }}
          </p>
        </div>
      </div>
      <!-- content and cover -->
      <div class="mt-5.5 gap-x-16 xl:gap-x-20 flex items-start">
        <div class="w-full xl:w-[31rem]">
          <NuxtLink
            :to="localePath({
              name: 'insights-slug',
              params: {
                slug: insight.slug
              }
            })"
          >
            <h2 class="text-22/9 font-bold text-color-1 hover:underline">
              {{
                locale === 'pt'
                  ? insight.pt_title || insight.title
                  : insight.title
              }}
            </h2>
          </NuxtLink>
          <p class="text-14/7 text-color-2 mt-3 font-normal">
            {{
                locale === 'pt'
                  ? insight.pt_description || insight.description
                  : insight.description
              }}
          </p>
          <div class="flex flex-wrap mt-4 gap-2">
            <UhTag
              v-for="tag in insight.tags"
              :key="tag"
              :tag="tag"
            />
          </div>
        </div>
        <!-- cover -->
        <div class="hidden xl:block w-[9.5rem] h-[4.625rem] rounded bdr-2 overflow-hidden bg-2 shrink-0">
          <NuxtLink
            :to="localePath({
              name: 'insights-slug',
              params: {
                slug: insight.slug
              }
            })"
          >
            <UhImage
              :image-src="insight?.cover?.url"
              :thumbnail-src="insight?.cover?.thumbnail_url"
            />
          </NuxtLink>
        </div>
      </div>
    </article>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { insight } = defineProps(['insight'])
</script>
