<template>
  <section class="row-c bg-2 bdr-t-2 bdr-b-2">
    <div class="row">
      <div class="col-span-full xl:col-span-5 mt-20 lg:mt-120px">
        <!--  -->
        <h2 class="text-24/[44px] lg:text-26 text-color-1 font-bold">
          {{ $t('t007') }}
        </h2>
        <p class="text-14/[30px] text-color-2 mb-4 mt-5.5 lg:text-18/8 lg:mt-8">
          {{ $t('t008') }}
        </p>
        <NuxtLink
          :to="localePath('start')"
          class="text-14 text-color-1 border-b-2 font-medium
            border-green-500 hover:text-color-2 pb-1"
        >
          {{ $t('t009') }}
        </NuxtLink>
      </div>
      <!-- process -->
      <div class="col-span-full py-20 lg:py-0 xl:col-span-6 xl:col-start-7">
        <div
          v-for="(step, index) in process"
          :key="index"
          class="flex items-center py-5 pl-5.5 lg:py-12 bdr-l-1 bdr-b-1 last:border-b-0"
        >
          <p class="text-green-500 font-bold text-18/[38px] lg:text-20">
            {{ index + 1 }}
          </p>
          <p class="ml-10 lg:ml-[50px] text-color-1 font-bold text-18/[38px] lg:text-24">
            {{ $t(step) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    process: [
      'Ideation & Validation',
      'Design',
      'Development',
      'Maintain, Support & Management',
      'Scale',
    ]
  })
}
</script>
