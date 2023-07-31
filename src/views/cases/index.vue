<template>
  <div class="row-c">
    <section class="row">
      <!-- left container -->
      <div class="col-span-full xl:col-span-8 min-h-screen">
        <h1 class="text-40 text-color-1 font-bold mt-12">
          {{ $t('Cases') }}
        </h1>
        <!-- serach bar and applied topics -->
        <div class="py-8 sticky top-14">
          <InputSearchBar />
          <div class="flex flex-wrap mt-4 gap-2 justify-center items-center">
            <p class="text-12 font-medium text-color-3">
              Applied clients:
            </p>
            <UhInsightTag
              v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve',]"
              :key="tag"
              :tag="tag"
            />
          </div>
        </div>
      </div>
      <!-- vertical line -->
      <div class="col-span-1 col-start-9 hidden xl:flex justify-center">
        <div class="liney-1" />
      </div>
      <!-- sidebar container -->
      <aside class="col-span-3 col-start-10 hidden xl:block">
        <!-- sticky content -->
        <div class="sticky top-20">
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
                v-for="tag in ['ZAKI Digital, LDA', 'Wedo Brand', 'Muve',]"
                :key="tag"
                :tag="tag"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>