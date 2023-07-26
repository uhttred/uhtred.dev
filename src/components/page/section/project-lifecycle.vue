<template>
  <section class="row-c bg-gray-50">
    <div class="row">
      <div class="col-span-full xl:col-span-5 mt-20 lg:mt-120px">
        <!--  -->
        <h2 class="text-24/[44px] lg:text-26 text-gray-950 font-bold">
          {{ $t('pages.section.processlife.p1') }}
        </h2>
        <p class="text-14/[30px] text-gray-600 mb-4 mt-5.5 lg:text-18/8 lg:mt-8">
          {{ $t('pages.section.processlife.p2') }}
        </p>
        <NuxtLink
          :to="localePath('index')"
          class="text-16 text-gray-950 border-b-2 font-bold
            border-green-500 hover:text-gray-700 pb-1"
        >
          {{ $t('Start your project today') }}
        </NuxtLink>
      </div>
      <!-- process -->
      <div class="col-span-full py-20 lg:py-0 xl:col-span-6 xl:col-start-7">
        <div
          v-for="(step, index) in process"
          :key="index"
          class="flex items-center py-5 pl-5.5 lg:py-12 border-l border-b last:border-b-0 border-gray-950/10"
        >
          <p class="text-green-500 font-bold text-18/[38px] lg:text-24">
            {{ index + 1 }}
          </p>
          <p class="ml-10 lg:ml-[50px] text-gray-950 font-bold text-18/[38px] lg:text-24">
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
