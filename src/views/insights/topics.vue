<template>
  <div>
    <section class="row-c">
      <div class="row">
        <!-- left container -->
        <div class="col-span-full xl:col-span-8">
          <!--  -->
          <NuxtPage />
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
            <!--  -->
            <PageAsideNewsletter class="mt-8" />
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
