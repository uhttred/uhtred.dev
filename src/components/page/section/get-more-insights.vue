<template>
  <section class="row-c">
    <div class="row">
      <div class="col-span-full flex flex-col items-center justify-center">
        <h1 class="text-color-1 font-bold text-32 text-center">
          Get more great
          <NuxtLink
            :to="localePath('cases')"
            class="text-green-500 hover:underline"
          >
            insights
          </NuxtLink>!
        </h1>
        <p class="text-16/8 text-color-3 mt-5.5 max-w-[40rem] text-center">
          Or get in touch with me if you want to share any insights
          about business, technology, freelancing, design, among others.
        </p>
      </div>
    </div>
    <!--  -->
    <div class="row mt-14 gap-y-10">
      <CardInsightBasic
        v-for="n in 3"
        :key="n"
        class="col-span-4"
      />
    </div>
  </section>
</template>
