<template>
  <section class="row-c">
    <div class="row mt-20 lg:mt-28 items-end border-b border-gray-950/10 pb-12 lg:pb-24">
      <!-- years of exp -->
      <div class="col-span-2 flex flex-col">
        <p
          class="text-[2.5rem] lg:text-[3rem] text-gray-950 font-bold"
        >
          7<span class="text-green-brand text-[1.875rem] lg:text-[2.5rem]">+</span>
        </p>
        <p class="text-20 text-gray-950 font-normal lg:font-bold mt-5.5">
          {{ $t('Years of experience') }} 
        </p>
      </div>
      <!-- years of exp -->
      <div class="col-span-2 col-start-3 flex flex-col">
        <p
          class="text-[2.5rem] lg:text-[3rem] text-gray-950 font-bold"
        >
          6<span class="text-green-brand text-[1.875rem] lg:text-[2.5rem]">+</span>
        </p>
        <p class="text-20 text-gray-950 font-normal lg:font-bold mt-5.5">
          {{ $t('Very happy clients') }} 
        </p>
      </div>
      <!--  -->
      <div
        class="col-span-full mt-12 lg:mt-0 lg:col-span-6 xl:col-start-7"
      >
        <!--  -->
        <p
          class="text-gray-500 font-normal text-13 lg:text-16"
        >
          {{ $t('A Maker and Perfectionist') }}
        </p>
        <!--  -->
        <p
          class="text-18/[2.125rem] lg:text-24/[2.25rem] text-gray-950 font-bold mt-5"
        >
          {{ $t('pages.section.about.p1') }}
        </p>
        <!--  -->
        <p
          class="text-14/[1.875rem] font-normal lg:text-16/[1.875rem] text-gray-500 mt-5"
        >
          {{ $t('pages.section.about.p2') }}
        </p>
      </div>
    </div>
  </section>
</template>
