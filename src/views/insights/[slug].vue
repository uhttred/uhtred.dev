<template>
  <div>
    <div
      class="row-c relative before:block before:absolute
        before:bg-gray-100 xl:before:bg-transparent dark:before:bg-transparent
        before:h-[36.125rem] before:w-full before:-inset-1 before:-z-10"
    >
      <div class="row bdr-b-1 relative">
        <!-- share icons -->
        <div
          class="col-span-1 absolute h-full right-full hidden xl:block pb-14 mr-8"
        >
          <PageAsideSocialShare
            v-if="data"
            :url-path="route.path"
            :title="title"
            :description="description"
            class="mt-40 sticky top-24"
          />
        </div>
        <!-- content -->
        <div
          class="col-span-full flex flex-col items-center xl:col-span-8
            pt-16 lg:pt-14"
        >
          <section class="flex flex-col w-full">
            <div
              v-if="error || pending"
              class="flex flex-col items-center py-6"
            >
              <UhSpinner v-if="pending" />
              <p
                v-if="error && !pending"
                class="text-14 text-color-2 mb-8"
              >
                {{ $t('Error loading') }}.
                <button
                  class="hover:underline text-red-500"
                  @click="refresh"
                >
                {{ $t('Reload') }}
                </button>
              </p>
            </div>
            <template v-else>
              <div class="flex items-center mb-4 gap-x-3">
                <p class="text-13 text-color-3">
                  <span
                    v-if="data.show_updated_at"
                    class="text-color-3"
                  >
                    {{ $t('Updated') }}:
                  </span>
                  {{
                    data.show_updated_at
                      ? useDatetimeFormatString(data.updated_at).value
                      : useDatetimeFormatString(data.published_at).value
                  }}
                </p>
                <span class="text-13 text-color-3">•</span>
                <SmallInsightViewsCount
                  class="text-13 text-color-3"
                  :insight="data"
                />
              </div>
              <h1
                class="font-bold text-32 lg:text-40/[3.56rem] max-w-[41.75rem] text-color-1"
              >
                {{
                  locale === 'pt'
                    ? data.pt_title || data.title
                    : data.title
                }}
              </h1>
              <div class="flex flex-wrap mt-4 gap-2 items-center">
                <NuxtLink
                  v-for="tag in data.tags"
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
              <!-- author -->
              <div
                v-if="data.author"
                class="mt-5.5 flex items-center gap-x-4"
              >
                <div class="w-10 h-10 rounded-full bdr-2 bg-2 overflow-hidden">
                  <a
                    :href="data.author.website"
                    target="_blank"
                  >
                    <UhImage
                      :image-src="data.author.avatar?.url"
                      :thumbnail-src="data.author.thumbnail?.url"
                    />
                  </a>
                </div>
                <div>
                  <a
                    :href="data.author.website"
                    target="_blank"
                  >
                    <p class="text-14 text-color-1 font-bold hover:underline">
                      {{ data.author.name }}
                    </p>
                  </a>
                  <a
                    :href="data.author.website"
                    target="_blank"
                  >
                    <p class="text-13 text-color-2 mt-1 hover:underline">
                      {{ data.author.job_title }}
                      <span class="text-color-3">/ {{ data.author.company_name }}</span>
                    </p>
                  </a>
                </div>
              </div>
              <!-- cover and youtube-->
              <div
                v-if="data.youtube_src"
                class="w-full xl:w-full bg-2 xl:bdr-2 rounded-md
                  overflow-hidden mt-10 lg:mt-8"
              >
                <iframe
                  class="w-full xl:h-[23rem]"
                  :src="data.youtube_src"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
              <div
                v-else-if="data.cover"
                class="w-full xl:w-full xl:h-[23rem] bg-2 xl:bdr-2 rounded-md
                  overflow-hidden mt-10 lg:mt-8"
              >
                <UhImage
                  :image-src="data.cover?.url"
                  :thumbnail-src="data.cover?.thumbnail_url"
                  alt="insight cover"
                />
              </div>
              <!-- line no cover -->
              <div
                v-if="!data.cover && !data.youtube_src"
                class="linex-2 w-full mt-8"
              />
            </template>
          </section>
          <!-- markdown content -->
          <article
            v-if="!pending && !error"
            class="flex flex-col items-center w-full mb-4 mt-10"
          >
            <UhMarkdown
              v-if="locale === 'pt' && data && data.pt_content"
              :content="data.pt_content"
            />
            <UhMarkdown
              v-else-if="data"
              :content="data.content"
            />
          </article>
          <!-- comments -->
          <div class="w-full py-12 bdr-t-1">
            <DisqusComments
              v-if="data"
              :identifier="`/insights/${data.slug}`"
            />
          </div>
        </div>
        <!-- vertical line -->
        <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div>
        <!--  -->
        <aside class="col-span-3 col-start-10 hidden xl:block pb-14">
          <!-- sticky content -->
          <div class="sticky top-[90px]">
            <!-- content block -->
            <div class="mt-8">
              <!-- <h3 class="text-20 text-color-1 font-bold mb-5.5">
                Announcement
              </h3> -->
              <!--  -->
              <div
                class="max-h-[14.875rem] w-full max-w-full rounded-md bg-2 bdr-2"
              >
                <!-- Ad Slot Name: Insights Side Bar Right -->
                <Adsbygoogle
                  v-if="$config.public.adsense.showAds"
                  :ad-slot="$config.public.adsense.slot.topRightSidebar"
                  ad-format="display"
                  :ad-style="{display: 'inline-block', height: '238px', width: '238px'}"
                />
              </div>
            </div>
            <!--  -->
            <PageAsideNewsletter class="mt-8" />
            <!-- content block -->
            <PageAsideInsightsTopics class="mt-8" />
          </div>
        </aside>
      </div>
    </div>
    <!-- ads -->
    <!-- <div class="row-c mt-14">
      <div class="row min-h-[14rem] bg-2 bdr-2 rounded-lg py-12 gap-y-8">
        
      </div>
    </div> -->
    <!-- rknow more cases -->
    <PageSectionGetMoreInsights class="py-24" />
    <!-- products -->
    <PageSectionProductListSimple class="mb-24" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.params.slug)
  }
})

const route = useRoute()
const slug = computed(() => route.params.slug)
const { data, error, refresh, pending } = await useFetch(`insights/${slug.value}`)
const { locale } = useI18n()
const { $config } = useNuxtApp()

const title = computed(() => {
  if (data.value) {
    const t =  locale.value === 'pt'
      ? data.value.pt_title || data.value.title
      : data.value.title
    return `${t} | Uhtred M.`
  }
  return '404 Error - Insights | Uhtred M.'
})

const description = computed(() => {
  if (data.value) {
    return locale.value === 'pt'
      ? data.value.pt_description || data.value.description
      : data.value.description
  }
  return ''
})

const image = computed(() => {
  if (data.value) {
    return data.value.cover?.url || $config.public.defaultCoverUrl
  }
  return $config.public.defaultCoverUrl
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  twitterTitle: title,
  ogDescription: description,
  twitterDescription: description,
  twitterImage: image,
  ogImage: image,
  ogImageUrl: image
}, {
  mode: 'all'
})

if (data.value) {
  useSchemaOrg([
    defineArticle({
      '@type': 'BlogPosting',
      image: image.value,
      datePublished: data.value.created_at,
      dateModified: data.value.updated_at,
      author: [
        {
          name: data.value.author.name,
          url: data.value.author.website,
          image: data.value.author.avatar.url
        }
      ]
    })
  ])
}
</script>
