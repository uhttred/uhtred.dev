<template>
  <section class="row-c">
    <div class="row py-20 xl:py-[10rem]">
      <div class="col-span-full flex flex-col items-center text-center font-bold">
        <!-- quote -->
        <h2 class="text-color-1 text-[1.75rem]/[2.75rem] xl:text-[2.25rem]/[3.75rem] max-w-[882px]">
          <span class="text-green-500">"</span>The freelancer we’ve worked with so far.
          Uhtred understands our product and is able to add new features
          with a great focus on speed 
          to market.<span class="text-green-500">"</span>
        </h2>
        <!-- logo -->
        <img
          class="w-[80px] mt-10 lg:mt-12 lg:w-[100px] dark:hidden"
          src="/image/brand/logo-zaki.svg"
          alt=""
        >
        <img
          class="w-[80px] mt-10 lg:mt-12 lg:w-[100px] hidden dark:block"
          src="/image/brand/logo-zaki-light.svg"
          alt=""
        >
        <!-- person and job title -->
        <p class="text-14 text-color-1 mt-4 lg:mt-8 lg:text-18 font-normal">
          Zacarias Duarte <span class="text-color-3">/ CEO at ZAKI Digital, LDA</span>
        </p>
        <!--  -->
        <p class="max-w-[600px] text-12/5 lg:text-14/8 text-color-4 mt-5.5 lg:mt-4 font-normal">
          {{ $t('pages.section.bigquote.p1') }}
        </p>
      </div>
    </div>
  </section>
</template>