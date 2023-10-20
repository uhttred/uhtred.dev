<template>
  <div>
    <UhMenuSub />
    <!--  -->
    <section class="row-c">
      <div class="row bdr-b-1">
        <!-- sidebar container -->
        <aside class="col-span-4 sm:col-start-2 md:col-start-3 lg:col-start-1 lg:col-span-3 lg:pb-12">
          <!-- sticky content -->
          <div class="sticky top-[72px]">
            <!--  -->
            <div
              v-if="author"
              class="row-c mt-8 bdr-b-1 pb-6"
            >
              <div class="w-28 h-28 bg-2 rounded-lg bdr-2 overflow-hidden">
                <UhImage
                  :image-src="author.avatar?.url"
                  :thumbnail-src="author.avatar?.thumbnail_url"
                  :alt="`${author.name} avatar image`"
                />
              </div>
              <h3 class="text-color-1 text-18 font-bold mt-5.5 text-center">
                {{
                  locale === 'pt'
                    ? author.pt_name || author.name
                    : author.name
                }}
              </h3>
              <p class="text-12/6 text-color-3 text-center mt-1">
                {{ author.headline }}
              </p>
              <!-- numbers -->
              <div class="flex items-center gap-x-2.5 mt-2">
                <p class="text-12 text-color-3">
                  <span class="text-color-1">{{ author.count_insights }}</span> Insights
                </p>
                <p class="text-13 text-color-3">
                  •
                </p>
                <p class="text-12 text-color-3">
                  <span class="text-color-1">{{ author.count_series }}</span> Series
                </p>
              </div>
              <!-- social -->
              <div
                class="flex flex-wrap mt-5.5 gap-x-8 gap-y-5.5 max-w-[140px]
                  items-center"
              >
                <a
                  v-if="author.instagram"
                  :href="author.instagram"
                  class="opacity-70 hover:opacity-100"
                  title="Instagram"
                  target="_blank"
                >
                  <!-- <IconInstagramLine/> -->
                  <i class="icon-instagram text-18 text-color-2 hover:text-color-1" />
                </a>
                <a
                  v-if="author.website"
                  :href="author.website"
                  class="opacity-70 hover:opacity-100"
                  target="_blank"
                  >
                  <i class="icon-globe text-18 text-color-2 hover:text-color-1" />
                </a>
                <a
                  v-if="author.linkedin"
                  :href="author.linkedin"
                  class="opacity-70 hover:opacity-100"
                  target="_blank"
                >
                  <!-- <IconLinkedinFill /> -->
                  <i class="icon-linkedin text-18 text-color-2 hover:text-color-1" />
                </a>
              </div>
            </div>
            <!-- ADS -->
            <AdsenseDisplaySquare238x238
              class="hidden mt-8 lg:block"
            />
          </div>
        </aside>
        <!-- vertical line -->
        <div class="col-span-1 col-start-4 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div>
        <!-- left container -->
        <section class="col-span-full lg:col-span-7 xl:col-span-8">
          <!-- newsletter or ads -->
          <CardHorizontalAutoNewsletterOrAds
            class="mt-8"
          />
          <!-- navbar -->
          <nav class="w-full flex gap-x-6 pb-2 bdr-b-1 mt-6">
            <NuxtLink
              :to="localePath({
                name: 'authors-@username',
                params: {
                  username: username
                }
              })"
              class="text-13 text-color-3 hover:text-color-1 font-medium"
            >
              Insights
            </NuxtLink>
            <NuxtLink
              :to="localePath({
                name: 'authors-@username-series',
                params: {
                  username: username
                }
              })"
              class="text-13 text-color-3 hover:text-color-1 font-medium"
            >
              Series
            </NuxtLink>
          </nav>
          <!-- tag loading error -->
          <div
            v-if="error || pending"
            class="py-6 flex flex-col items-center"
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
          <section
            v-else
            class="mt-5.5"
          >
            <NuxtPage
              :author="author"
            />
          </section>
        </section>
      </div>
    </section>
    <!--  -->
    <SectionJoinCommunityGroup />
    <!-- line -->
    <!-- line -->
    <div class="row-c">
      <div class="row">
        <div class="linex-1 col-span-full" />
      </div>
    </div>
    <!-- products -->
    <PageSectionProductListSimple class="mt-14" />
    <!-- ads -->
    <AdsenseDisplayHorizontalFull class="mb-10" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^(?![0-9.])[A-z0-9.]{3,20}(?<![.])$/.test(route.params.username)
  }
})

const { $config } = useNuxtApp()
const { locale } = useI18n()
const route = useRoute()
const username = computed(() => route.params.username)

const {
  data: author,
  error,
  refresh,
  loading: pending
} = await useAPI(`authors/${username.value}`)
</script>
