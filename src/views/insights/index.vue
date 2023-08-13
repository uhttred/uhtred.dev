<template>
  <div>
    <section class="row-c">
      <div class="row">
        <!-- left container -->
        <div class="col-span-full xl:col-span-8 min-h-screen">
          <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-12">
            {{ $t('Insights') }}
          </h1>
          <!-- serach bar and applied topics -->
          <div class="py-4 lg:pt-8 sticky top-14 bg-1">
            <InputSearchBar />
            <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
              <p class="text-12 font-medium text-color-3">
                Applied topics:
              </p>
              <UhInsightTag
                v-for="tag in ['Django', 'Python', 'Ruby',]"
                :key="tag"
                :tag="tag"
              />
            </div>
          </div>
          <!-- insights listing -->
          <div class="w-full mt-14">
            
            <article
              v-for="insight in insights"
              :key="insight.id"
              class="w-full bdr-b-2 pb-8 mb-12 last:mb-0 last:border-b-0"
            >
              <!-- author space -->
              <div class="flex items-center gap-x-4">
                <div class="w-9 h-9 rounded-full bdr-2 bg-2 overflow-hidden">
                  <img
                    :src="insight.author.avatar"
                    alt=""
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <div class="flex items-center gap-x-2">
                    <h4 class="text-13 text-color-1 font-bold">
                      {{ insight.author.name }}
                    </h4>
                    <span class="text-2 text-color-3">•</span>
                    <p class="text-12 text-color-3">
                      {{ insight.date }}
                    </p>
                  </div>
                  <p class="text-13 text-color-2 mt-0.5">
                    {{ insight.author.title }}
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
                        slug: 'asdasd-asd'
                      }
                    })"
                  >
                    <h2 class="text-22/9 font-bold text-color-1 hover:underline">
                      {{ insight.title }}
                    </h2>
                  </NuxtLink>
                  <p class="text-14/7 text-color-2 mt-3 font-normal">
                    {{ insight.description }}
                  </p>
                  <div class="flex flex-wrap mt-4 gap-2">
                    <UhInsightTag
                      v-for="tag in insight.topics"
                      :key="tag"
                      :tag="tag"
                    />
                  </div>
                </div>
                <!-- cover -->
                <div class="hidden xl:block w-[9.5rem] h-[4.625rem] rounded bdr-2 overflow-hidden bg-2 shrink-0">
                  <img
                    src=""
                    alt=""
                    class="hidden w-full h-full object-cover"
                  >
                </div>
              </div>
            </article>
  
          </div>
        </div>
        <!-- vertical line -->
        <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div>
        <!-- sidebar container -->
        <aside class="col-span-3 col-start-10 hidden xl:block">
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
    </section>
    <!-- products -->
    <PageSectionProductListSimple class="mb-24 xl:mt-24 mt-14" />
  </div>
</template>

<script setup lang="ts">
const insights = [
  {
    id: 1,
    title: 'Power Automate - All The HTTP Connectors And What They Do',
    description: `Due to strict data security regulations, banks can’t use real 
      working apps to demonstrate all their features to potential clients. 
      That’s why UBS wanted to develop demo versions of its various apps that would...`,
    date: '12, September 2023 at 14:55',
    topics: [
      'Django', 'Python', 'REST'
    ],
    author: {
      name: 'Uhtred M.',
      avatar: '/image/people/uhtred.png',
      title: 'Product Developer / Freelancer'
    }
  },
  {
    id: 1,
    title: 'Taming Badly Typed External Libraries - How Zod Boosts Type Safety',
    description: `Due to strict data security regulations, banks can’t use real 
      working apps to demonstrate all their features to potential clients. 
      That’s why UBS wanted to develop demo versions of its various apps that would...`,
    date: '12, September 2023 at 14:55',
    topics: [
      'Design', 'Marketing Digital', 'Negocios'
    ],
    author: {
      name: 'Justo Eliseu',
      avatar: '/image/people/justo-eliseu.png',
      title: 'CEO at Wedo Brand'
    }
  }
]
</script>
