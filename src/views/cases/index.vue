<template>
  <div class="row-c">
    <section class="row">
      <!-- left container -->
      <div class="col-span-full xl:col-span-8 min-h-screen">
        <h1 class="text-40 text-color-1 font-bold mt-6 lg:mt-12">
          {{ $t('Cases') }}
        </h1>
        <!-- serach bar and applied topics -->
        <div class="py-4 lg:pt-8 sticky top-14 bg-1">
          <InputSearchBar />
          <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
            <p class="text-12 font-medium text-color-3">
              Applied clients:
            </p>
            <UhInsightTag
              v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve']"
              :key="tag"
              :tag="tag"
            />
          </div>
        </div>
        <!-- cases listing -->
        <div class="w-full flex flex-col items-center">
          <CardCase
            v-for="entry in entries"
            :key="entry.slug"
            class="first:mt-8 mt-12 bdr-b-2 last:border-b-0 w-full"
            :project-case="entry"
          />
          <UhSpinner
            v-show="loading"
            class="mt-8"
          />
          <!--  -->
          <button
            v-if="canLoadMore && !loading"
            class="text-14 mt-8 text-color-1 hover:underline"
            @click="loadMore"
          >
            load more cases
          </button>
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
          <div class="mt-8">
            <h3 class="text-20 text-color-1 font-bold mb-5.5">
              Clients
            </h3>
            <!--  -->
            <div class="flex flex-wrap mt-4 gap-2 items-center">
              <UhInsightTag
                v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve']"
                :key="tag"
                :tag="tag"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
    <!--  -->
    <PageSectionInsightsList class="py-16 lg:py-120px" />
  </div>
</template>

<script setup lang="ts">
const {
  entries,
  loadMore,
  loading,
  canLoadMore
} = await usePaginator('cases', {
  pageLimit: 8
})
</script>
