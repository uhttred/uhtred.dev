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
            :title="locale === 'pt' ? data.pt_title || data.title : data.title"
            class="mt-40 sticky top-24"
          />
        </div>
        <!-- content -->
        <div
          class="col-span-full flex flex-col items-center xl:col-span-8
            pt-16 lg:pt-14"
        >
          <section class="flex flex-col w-full">
            <template v-if="error || pending">
              <UhSpinner v-if="pending" />
              <p
                v-if="error && !pending"
                class="text-14 text-color-2"
              >
                {{ $t('Error loading') }}.
                <button
                  class="hover:underline text-red-500"
                  @click="refresh"
                >
                {{ $t('Reload') }}
                </button>
              </p>
            </template>
            <template v-else>
              <div class="flex items-center mb-4 gap-x-3">
                <p class="text-13 text-color-3">
                  {{ data.created_at }}
                </p>
                <span class="text-2 text-color-3">•</span>
                <p class="text-13 text-color-2">
                  {{ data.visualisations }} views
                </p>
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
                <UhTag
                  v-for="tag in data.tags"
                  :key="tag"
                  :tag="tag"
                />
              </div>
              <!-- author -->
              <div
                v-if="data.author"
                class="mt-5.5 flex items-center gap-x-4"
              >
                <div class="w-12 h-12 rounded-full bdr-2 bg-2 overflow-hidden">
                  <a
                    :href="data.author.website"
                    target="_blank"
                  >
                    <img
                      :src="data.author.avatar.url"
                      alt=""
                      class="w-full h-full object-cover"
                    >
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
                    <p class="text-14 text-color-2 mt-1 hover:underline">
                      {{ data.author.job_title }}
                      <span class="text-color-3">/ {{ data.author.company_name }}</span>
                    </p>
                  </a>
                </div>
              </div>
              <!-- cover -->
              <div
                class="w-full xl:w-full xl:h-[23rem] bg-2 xl:bdr-2 rounded-md
                  overflow-hidden mt-10 lg:mt-12"
              >
                <img
                  :src="data.cover.url"
                  class="w-full h-full object-cover"
                  alt="insight cover"
                >
              </div>
            </template>
          </section>
          <!-- markdown conten -->
          <article
            class="flex flex-col items-center w-full my-14"
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
              <div class="w-full h-[14.875rem] rounded-md bg-2 bdr-2">
  
              </div>
            </div>
            <!-- content block -->
            <PageAsideInsightsTopics class="mt-8" />
          </div>
        </aside>
      </div>
    </div>
    <!-- ads -->
    <div class="row-c mt-14">
      <div class="row min-h-[14rem] bg-2 bdr-2 rounded-lg py-12 gap-y-8">
        
      </div>
    </div>
    <!-- rknow more cases -->
    <PageSectionGetMoreInsights class="py-24" />
    <!-- products -->
    <PageSectionProductListSimple class="mb-24" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug)
const { data, error, refresh, pending } = useFetch(`insights/${slug.value}`)

definePageMeta({
  validate: async (route) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.params.slug)
  }
})
</script>
