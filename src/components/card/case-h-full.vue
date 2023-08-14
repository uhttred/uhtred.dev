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
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: project.slug
          }
        })"
      >
        <img
          :src="project.banner.url"
          class="dark:hidden rounded-md bdr-2"
          alt="case banner"
        >
        <img
          :src="project.banner_dark.url"
          class="hidden dark:block bdr-1 rounded-md"
          alt="case banner"
        >
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
        :src="project.brand_logo.url"
        class="dark:hidden"
        alt="case client logo"
      >
      <img
        :src="project.brand_logo_dark.url"
        class="hidden dark:block"
        alt="case client logo dark"
      >
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: project.slug
          }
        })"
      >
        <h1 class="text-18/[34px] lg:text-20/[36px] text-color-1 font-bold mt-10">
          {{
            locale === 'pt'
              ? project.pt_title || project.title
              : project.title
          }}
        </h1>
      </NuxtLink>
      <p class="text-14/[34px] lg:text-16/[34px] text-color-3 font-normal mt-4 mb-4">
        {{
          locale === 'pt'
            ? project.pt_description || project.description
            : project.description
        }}
      </p>
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: project.slug
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
const { locale } = useI18n()
const { project, reverseLayout } = defineProps({
  reverseLayout: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object
  }
})
</script>
