<template>
  <div class="row-c">
    <div class="row">
      <div class="col-span-full">
        <h1 class="text-34 text-color-1 font-bold mt-6 lg:mt-14">
          Products that complete you
        </h1>
      </div>
    </div>
    <!--  -->
    <div class="row py-20 gap-y-10 bdr-b-1">
      <CardProductBasic
        v-for="n in 8"
        :key="n"
        class="col-span-4"
      />
    </div>
    <!--  -->
    <PageSectionInsightsList class="py-16 lg:py-20" />
  </div>
</template>