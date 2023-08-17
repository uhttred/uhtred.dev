<template>
  <article class="flex flex-col xl:flex-row items-center pb-12">
    <div class="w-full lg:w-[14.875rem]" >
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: projectCase.slug
          }
        })"
      >
        <UhImage
          :image-src="projectCase?.banner?.url"
          :thumbnail-src="projectCase?.banner?.thumbnail_url"
          class="dark:hidden rounded-md bdr-2"
          alt="case banner"
        />
        <UhImage
          :image-src="projectCase?.banner_dark?.url"
          :thumbnail-src="projectCase?.banner_dark?.thumbnail_url"
          class="hidden dark:block bdr-1 rounded-md"
          alt="case banner"
        />
      </NuxtLink>
    </div>
    <div
      class="w-full lg:max-w-[22.9rem] mt-8 lg:mt-0 lg:ml-12"
    >
      <img
        :src="projectCase.brand_logo?.url"
        class="dark:hidden max-w-[80px]"
        alt="case client logo"
      >
      <img
        :src="projectCase.brand_logo_dark?.url"
        class="hidden dark:block max-w-[80px]"
        alt="case client logo dark"
      >
      <NuxtLink
        :to="localePath({
          name: 'cases-slug',
          params: {
            slug: projectCase.slug
          }
        })"
      >
        <h1 class="text-18/[34px] text-color-1 font-bold mt-4">
          {{
            locale === 'pt'
              ? projectCase.pt_title
              : projectCase.title
          }}
        </h1>
      </NuxtLink>
      <p class="text-14/[34px] text-color-3 font-normal mt-1 mb-4">
        {{
          locale === 'pt'
            ? projectCase.pt_description
            : projectCase.description
        }}
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
const { locale } = useI18n()
const { projectCase } = defineProps(['projectCase'])
</script>
