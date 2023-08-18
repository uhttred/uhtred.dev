<template>
  <div>
    <div
      class="row-c relative before:block before:absolute before:bg-gray-100 dark:before:bg-gray-800
        before:h-[36.125rem] before:bdr-b-2 before:w-full before:-inset-1 before:-z-10"
    >
      <div class="row bdr-b-1">
        <!-- share icons -->
        <div
          class="col-span-1 hidden xl:block pb-14"
        >
          <PageAsideSocialShare
            v-if="data"
            :url-path="route.path"
            :title="title"
            :description="description"
            class="mt-24 sticky top-24"
          />
        </div>
        <!-- content -->
        <div
          class="col-span-full flex flex-col items-center xl:col-span-10
            xl:col-start-2 pt-16 lg:pt-24"
        >
          <section class="flex flex-col items-center w-full">
            <template
              v-if="error || pending"
            >
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
              <h1
                class="font-bold text-32 lg:text-40/[3.75rem]
                  max-w-[41.75rem] text-center text-color-1"
              >
                {{ 
                  locale === 'pt'
                    ? data.pt_title ?? data.title
                    : data.title
                }}
              </h1>
              <p
                class="text-16/7 lg:text-18/8 text-color-2
                  text-center max-w-[41.75rem] font-normal mt-8"
              >
                {{ 
                  locale === 'pt'
                    ? data.pt_description ?? data.description
                    : data.title
                }}
              </p>
              <!-- cover -->
              <div
                class="w-screen xl:w-[calc(100%+40px)] xl:h-[26.875rem] bg-2 xl:bdr-2 xl:rounded-md
                  overflow-hidden mt-10 lg:mt-14 text-center"
              >
                <UhImage
                  :image-src="data?.cover?.url"
                  :thumbnail-src="data?.cover?.thumbnail_url"
                  alt="case cover"
                />
              </div>
            </template>
          </section>
          <!-- markdown conten -->
          <article
            v-if="!pending && !error"
            class="flex flex-col items-center w-full max-w-[46.75rem] my-14"
          >
            <UhMarkdown
              v-if="locale === 'pt' && data.pt_content"
              :content="data.pt_content"
            />
            <UhMarkdown
              v-else
              :content="data.content"
            />
          </article>
        </div>
      </div>
    </div>
    <!-- scope -->
    <div
      v-if="data?.data?.list_groups"
      class="row-c my-14"
    >
      <div class="row min-h-[14rem] bg-2 bdr-2 rounded-lg py-12 gap-y-8">
        <div
          v-for="(group, i) in data.data.list_groups"
          :key="i"
          class="col-span-full xl:col-span-3 pl-8 xl:pl-0 xl:first:pl-8"
        >
          <div>
            <h4 class="uppercase text-14 font-bold text-color-1">
              {{ 
                locale === 'pt'
                  ? group.pt_title ?? group.title
                  : group.title
              }}
            </h4>
            <ul class="mt-8">
              <li
                v-for="(item, ii) in group.items"
                :key="ii"
                class="text-14 text-color-3 mb-2"
              >
                {{ 
                  locale === 'pt'
                    ? item.pt_name ?? item.name
                    : item.name
                }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- team and respo -->
    <section
      v-if="data?.data?.team_responsibilities"
      class="row-c"
    >
      <div class="row">
        <div class="col-span-full">
          <h1 class="font-bold text-color-1 text-32">
            {{ $t('t020') }}
          </h1>
        </div>
      </div>
      <div class="row gap-y-10 mt-10 bdr-b-1 pb-14">
        <div
          v-for="(author, i) in data.data.team_responsibilities"
          :key="i"
          class="col-span-full xl:col-span-3 flex flex-col"
        >
          <CardPersonForTeamResp
            :person-id="author.person_id"
          />
          <div class="linex-2 w-1/6" />
          <ul>
            <li
              v-for="(responsability, ii) in author.responsibilities"
              :key="ii"
              class="text-12 font-normal text-color-2 mt-2"
            >
              {{ 
                locale === 'pt'
                  ? responsability.pt_name ?? responsability.name
                  : responsability.name
              }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- rknow more cases -->
    <PageSectionKnowMoreCases class="py-24" />
    <!-- products -->
    <PageSectionProductListSimple class="mb-24" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug)
const { data, error, refresh, pending } = useFetch(`cases/${slug.value}`)

definePageMeta({
  validate: async (route) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.params.slug)
  }
})

const title = computed(() => {
  if (data.value) {
    const t = locale.value === 'pt'
      ? data.value.pt_title || data.value.title
      : data.value.title
    return `${t} - ${locale.value === 'pt' ? 'Casos' : 'Cases'} | Uhtred M.`
  }
  return `404 Error - ${locale.value === 'pt' ? 'Casos' : 'Cases'} | Uhtred M.`
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
    return data.value.cover?.url
  }
  return '/icon.png'
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

useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    image: image.value,
    datePublished: data.value.created_at,
    dateModified: data.value.updated_at
  })
])
</script>
