<template>
  <section class="row-c">
    <div class="row">
      <div class="col-span-full flex flex-col items-center justify-center">
        <h1 class="text-color-1 font-bold text-32 text-center">
          Know more great
          <NuxtLink
            :to="localePath('cases')"
            class="text-green-500 hover:underline"
          >
            success cases</NuxtLink>!
        </h1>
        <p class="text-16/8 text-color-3 mt-5.5 max-w-[40rem] text-center">
          My team and I deliver the best solution for your particular case. <br>
          <NuxtLink
            :to="localePath('cases')"
            class="text-color-1 underline"
          >
            Discover all cases
          </NuxtLink>
          or
          <NuxtLink
            to="#"
            class="text-color-1 underline"
          >
            start your project
          </NuxtLink>
          today
        </p>
      </div>
    </div>
    <!--  -->
    <div class="row mt-14 gap-y-10">
      <div
        v-for="n in 3"
        :key="n"
        class="col-span-4"
      >
        <div class="w-full h-[9.875rem] bg-2 bdr-2 rounded-lg overflow-hidden">
          <img
            src=""
            alt=""
            class="w-full h-full object-cover hidden"
          >
        </div>
        <h3 class="text-18/9 font-medium text-color-1 mt-5.5">
          Muve: A space that don’t let you lose anything
        </h3>
      </div>
    </div>
  </section>
</template>