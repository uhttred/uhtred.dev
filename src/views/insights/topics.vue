<template>
  <div>
    <UhMenuSub />
    <section class="row-c">
      <div class="row bdr-b-1">
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
        <aside class="col-span-3 col-start-10 hidden xl:block pb-12">
          <!-- sticky content -->
          <div class="sticky top-[72px]"><!--  -->
            <AsideProductSlides
              class="mt-8"
            />
            <!-- ADS -->
            <AdsenseDisplayVertical class="mt-8" />
            <!-- content block -->
            <!-- <AsideInsightTopics
              class="mt-8"
              :page-limit="10"
            /> -->
          </div>
        </aside>
      </div>
    </section>
    <!--  -->
    <Section4ProductSuggestion class="mt-14 mb-4" />
  </div>
</template>
