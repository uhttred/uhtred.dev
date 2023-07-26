<template>
  <article class="row items-end">
    <div
      :class="[
        'col-span-full xl:col-span-5',
        {
          'xl:col-start-8 xl:order-last': reverseLayout,
        }
      ]"
    >
      <NuxtLink
        :to="localePath('index')"
      >
        <img :src="projectCase.banner" alt="case banner">
      </NuxtLink>
    </div>
    <div
      :class="[
        'col-span-full mt-12 lg:mt-0 xl:mb-14 xl:col-span-5',
        {
          'xl:col-start-7': !reverseLayout,
          'xl:col-start-2 xl:order-first': reverseLayout,
        }
      ]"
    >
      <img
        :src="projectCase.logo"
        alt="case client logo"
      >
      <h1 class="text-20/[34px] lg:text-22/[36px] text-gray-950 font-bold mt-10">
        {{ projectCase.title }}
      </h1>
      <p class="text-14/[34px] lg:text-18/[34px] text-gray-600 font-normal mt-4 mb-4">
        {{ projectCase.text }}
      </p>
      <NuxtLink
        :to="localePath('index')"
        class="text-14 text-gray-950 font-bold hover:underline"
      >
      {{ $t('Meet the case') }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  reverseLayout: {
    type: Boolean,
    default: false
  },
  projectCase: {
    type: Object
  }
})
</script>
