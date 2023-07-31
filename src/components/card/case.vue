<template>
  <article class="flex items-center pb-12">
    <div class="w-[14.875rem]" >
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: projectCase.slug
          }
        })"
      >
        <img
          :src="projectCase.banner"
          class="dark:hidden rounded-md bdr-2"
          alt="case banner"
        >
        <img
          :src="projectCase.bannerDark"
          class="hidden dark:block bdr-1 rounded-md"
          alt="case banner"
        >
      </NuxtLink>
    </div>
    <div
      class="w-full max-w-[22.9rem] ml-12"
    >
      <img
        :src="projectCase.logo"
        class="dark:hidden max-w-[80px]"
        alt="case client logo"
      >
      <img
        :src="projectCase.logoDark"
        class="hidden dark:block max-w-[80px]"
        alt="case client logo dark"
      >
      <h1 class="text-18/[34px] text-color-1 font-bold mt-4">
        {{ projectCase.title }}
      </h1>
      <p class="text-14/[34px] text-color-3 font-normal mt-1 mb-4">
        {{ projectCase.text }}
      </p>
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: projectCase.slug
          }
        })"
        class="text-14 text-color-1 font-medium hover:underline"
      >
      {{ $t('Meet the case') }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  projectCase: {
    type: Object
  }
})
</script>
