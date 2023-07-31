<template>
  <div class="row-c">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('pages.section.il.p1') }}
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('insights')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          {{ $t('See all Insights') }}
        </NuxtLink>
      </div>
    </div>
    <!--  -->
    <div class="row pt-20 gap-y-10">
      <CardInsightBasic
        v-for="n in 3"
        :key="n"
        class="col-span-4"
      />
    </div>
  </div>
</template>