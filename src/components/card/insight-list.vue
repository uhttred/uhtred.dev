<template>
  <article
      class="w-full py-6"
    >
      <!-- author space -->
      <div class="flex items-center gap-x-4">
        <div class="w-9 h-9 rounded-full bdr-2 bg-2 overflow-hidden">
          <NuxtLink>
            <UhImage
              :image-src="insight?.author?.avatar?.url"
              :thumbnail-src="insight?.author?.avatar?.thumbnail_url"
              alt="author avatar"
            />
          </NuxtLink>
        </div>
        <div>
          <div class="flex items-center gap-x-2">
            <p class="text-13 text-color-1 font-bold hover:underline">
              <NuxtLink>
                {{
                  locale === 'pt'
                    ? insight.author.pt_name || insight.author.name
                    : insight.author.name
                }}
              </NuxtLink>
            </p>
            <!-- <span class="text-12 text-color-3">•</span>
            <p class="text-13 text-color-2">
              {{ useDatetimeFormatString(insight.published_at).value }}
              {{ insight.author.headline }}
            </p> -->
          </div>
          <p class="text-12 text-color-3 mt-0.5">
            {{ insight.author.headline }}
          </p>
        </div>
      </div>
      <!-- content and cover -->
      <div class="mt-5.5 gap-x-16 xl:gap-x-20 flex items-start">
        <div class="w-full xl:w-[31rem]">
          <h1 class="text-22/9 font-bold text-color-1 hover:underline">
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
          </h1>
          <p class="text-14/7 text-color-2 mt-3 font-normal">
            {{
              locale === 'pt'
                ? insight.pt_description || insight.description
                : insight.description
            }}
          </p>
          <ul class="list-none flex flex-wrap mt-4 gap-2">
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
        </div>
        <!-- cover -->
        <div
          v-if="insight.cover"
          class="hidden xl:block w-[9.5rem] h-[4.625rem] rounded bdr-2 overflow-hidden bg-2 shrink-0"
        >
          <NuxtLink
            :to="localePath({
              name: 'insights-slug',
              params: {
                slug: insight.slug
              }
            })"
          >
            <UhImage
              :image-src="insight.cover?.url"
              :thumbnail-src="insight.cover?.thumbnail_url"
            />
          </NuxtLink>
        </div>
      </div>
    </article>
</template>

<script setup lang="ts">
const { locale } = useI18n()
defineProps(['insight'])
</script>
