<template>
  <header
    class="bdr-b-p pb-10 lg:pb-[120px] bg-primary"
  >
    <!--  -->
    <div
      class="w-full flex flex-col items-center
        pt-8 lg:pt-16 relative"
    >
      <div class="row relative">
        <div class="col-span-full lg:col-span-6">
          <p
            class="text-14 lg:text-16/5 font-bold text-gradient-3"
          >
            {{ $t('t001') }}
          </p>
          <h1
            class="text-color-1 font-bold
              text-[46px]/[58px] lg:text-5xl/[63px] mt-4"
          >
            {{ $t('t002') }}<span class="text-green-500">.</span>
          </h1>
          <!-- illustration -->
          <img
            class="absolute right-0 -top-8 lg:-top-20 opacity-40 lg:opacity-100
              dark:hidden"
            src="~/assets/illustration/texture-and-gradient.svg"
            alt="solar illustration uhtred"
          >
        </div>
      </div>
      <!--  -->
      <div class="row mt-8 lg:mt-16">
        <div class="col-span-full lg:col-span-6 flex items-end">
          <!-- uhtred image -->
          <div>
            <img
              src="~/assets/image/uhtred-pofile.png"
              alt="uhtred profile image"
              class="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] bdr-p rounded-md"
            >
          </div>
          <!-- text -->
          <div class="ml-4 lg:ml-5 mb-2">
            <p class="font-josefin font-bold text-14 lg:text-16 text-color-1">
              Uhtred Miller
            </p>
            <p class="font-normal text-12 lg:text-14 text-color-3">
              @uhtred.dev
            </p>
          </div>
        </div>
        <div
          class="col-span-full lg:col-span-6 flex justify-center
            lg:justify-end items-end mt-12 lg:mt-0"
        >
          <p
            class="text-12/6 font-normal text-color-3 text-center lg:text-right
              lg:w-[310px] lg:text-14/6"
          >
            {{ $t('t003') }}
            <NuxtLink
              :to="localePath('start')"
              class="text-color-1 underline"
            >
              {{ $t('Start your project') }}
            </NuxtLink>
            {{ $t('right now') }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>