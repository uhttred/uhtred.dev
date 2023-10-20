<template>
  <div>
    <UhMenuSub />
    <!--  -->
    <div class="row-c">
      <div class="row bdr-b-1 relative">
        <!-- share icons -->
        <div
          class="col-span-1 absolute h-full right-full hidden xl:block pb-14 mr-8"
        >
          <PageAsideSocialShare
            v-if="insight"
            :url-path="route.path"
            :title="title"
            :description="description"
            class="mt-40 sticky top-24"
          />
        </div>
        <!-- content -->
        <div
          class="col-span-full flex flex-col items-center xl:col-span-8"
        >
          <!-- newsletter or ads -->
          <CardHorizontalAutoNewsletterOrAds
            class="mt-6 lg:mt-8"
          />
          <!--  -->
          <section class="flex flex-col w-full mt-6 lg:mt-8">
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
                    v-if="insight.show_updated_at"
                    class="text-color-3"
                  >
                    {{ $t('Updated') }}:
                  </span>
                  {{
                    insight.show_updated_at
                      ? useDatetimeFormatString(insight.updated_at).value
                      : useDatetimeFormatString(insight.published_at).value
                  }}
                </p>
                <span class="text-13 text-color-3">•</span>
                <SmallInsightViewsCount
                  class="text-13 text-color-3"
                  :insight="insight"
                />
              </div>
              <h1
                class="font-bold text-32 lg:text-40/[3.56rem] max-w-[41.75rem] text-color-1"
              >
                {{
                  locale === 'pt'
                    ? insight.pt_title || insight.title
                    : insight.title
                }}
              </h1>
              <!--  -->
              <p
                v-if="insight.serie"
                class="text-13/6 text-color-3 mt-2"
              >
                <i class="icon-star mr-1" />
                In serie
                <NuxtLink
                  class="text-color-2 hover:underline"
                >
                  {{
                    locale === 'pt'
                      ? insight.serie.pt_title || insight.serie.title
                      : insight.serie.title
                  }}
                </NuxtLink>
              </p>
              <SmallInsightTopicsList
                class="mt-3"
                :topics="insight.topics"
              />
              <!-- author -->
              <div
                v-if="insight.author"
                class="mt-5.5 flex items-center gap-x-4"
              >
                <div class="w-10 h-10 rounded-full bdr-2 bg-2 overflow-hidden">
                  <NuxtLink
                    :to="localePath({
                      name: 'authors-@username',
                      params: {
                        username: insight.author.username
                      }
                    })"
                  >
                    <UhImage
                      :image-src="insight.author.avatar?.url"
                      :thumbnail-src="insight.author.avatar?.thumbnail_url"
                    />
                  </NuxtLink>
                </div>
                <div>
                  <p class="text-14 text-color-1 font-semibold hover:underline">
                    <NuxtLink
                      :to="localePath({
                        name: 'authors-@username',
                        params: {
                          username: insight.author.username
                        }
                      })"
                    >
                      {{ insight.author.name }}
                    </NuxtLink>
                  </p>
                  <p class="text-13 text-color-2 mt-1 hover:underline">
                    {{ insight.author.headline }}
                  </p>
                </div>
              </div>
              <!-- cover and youtube-->
              <div
                v-if="insight.youtube_src"
                class="w-full xl:w-full bg-2 xl:bdr-2 rounded-md
                  overflow-hidden mt-10 lg:mt-8"
              >
                <iframe
                  class="w-full xl:h-[23rem]"
                  :src="insight.youtube_src"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
              <div
                v-else-if="insight.cover"
                class="w-full xl:w-full xl:h-[23rem] bg-2 xl:bdr-2 rounded-md
                  overflow-hidden mt-10 lg:mt-8"
              >
                <UhImage
                  :image-src="insight.cover?.url"
                  :thumbnail-src="insight.cover?.thumbnail_url"
                  alt="insight cover"
                />
              </div>
              <!-- line no cover -->
              <div
                v-if="!insight.cover && !insight.youtube_src"
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
              v-if="locale === 'pt' && insight && insight.pt_content"
              :content="insight.pt_content"
            />
            <UhMarkdown
              v-else-if="insight"
              :content="insight.content"
            />
          </article>
          <!-- serie navigation -->
          <SmallSerieNavigationForInsightDetail
            v-if="insight && insight.serie"
            :insight-id="insight.id"
            :serie-id="insight.serie.id"
            class="bdr-t-1"
          />
          <!-- comments -->
          <div class="w-full py-10 bdr-t-1">
            <DisqusComments
              v-if="insight"
              :identifier="`/insights/${insight.slug}`"
            />
          </div>
        </div>
        <!-- vertical line -->
        <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div>
        <!--  -->
        <aside class="col-span-3 col-start-10 hidden xl:block pb-12">
          <!-- sticky content -->
          <div class="sticky top-[72px]">
            <!-- ADS -->
            <AdsenseDisplaySquare238x238
              v-if="insight && insight.serie"
              class="mt-8"
            />
            <AdsenseDisplayVertical
              v-else
              class="mt-8"
            />
            <!-- serie insights -->
            <AsideSerieInsights
              v-if="insight && insight.serie"
              class="mt-8"
              :serie="insight.serie"
              :active-insight="insight"
            />
            <!-- insight topics -->
            <AsideInsightTopics
              v-else
              class="mt-8"
              :page-limit="8"
            />
          </div>
        </aside>
      </div>
    </div>
    <!-- ads -->
    <AdsenseDisplayHorizontalFull class="my-14" />
    <!--  -->
    <div class="row-c">
      <div class="row">
        <div class="col-span-full linex-1" />
      </div>
    </div>
    <SectionJoinCommunityGroup />
    <div class="row-c">
      <div class="row">
        <div class="col-span-full linex-1" />
      </div>
    </div>
    <!--  -->
    <!-- <SectionAllAndCategoryTopics /> -->
    <!-- rknow more cases -->
    <!-- <PageSectionGetMoreInsights class="py-24" /> -->
    <!-- products -->
    <PageSectionProductListSimple class="my-14" />
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

const {
  data: insight,
  error,
  refresh,
  loading: pending
} = await useAPI(`insights/${slug.value}`)

const { locale } = useI18n()
const { $config } = useNuxtApp()

const title = computed(() => {
  if (insight.value) {
    const t =  locale.value === 'pt'
      ? insight.value.pt_title || insight.value.title
      : insight.value.title
    return `${t} | Uhtred M`
  }
  return '404 Error - Insights | Uhtred M'
})

const description = computed(() => {
  if (insight.value) {
    return locale.value === 'pt'
      ? insight.value.pt_description || insight.value.description
      : insight.value.description
  }
  return ''
})

const image = computed(() => {
  if (insight.value) {
    return insight.value.cover?.url || $config.public.defaultCoverUrl
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
})

if (insight.value) {
  useSchemaOrg([
    defineArticle({
      '@type': 'BlogPosting',
      image: image.value,
      datePublished: insight.value.published_at,
      dateModified: insight.value.updated_at,
      author: [
        {
          name: insight.value.author.name,
          url: insight.value.author.website,
          image: insight.value.author.avatar?.url
        }
      ]
    })
  ])
}
</script>
