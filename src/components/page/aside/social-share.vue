<template>
  <div
    class="flex-col flex gap-y-4"
  >
    <!-- social link: linkedin -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-950"
    >
      <a
        :href="`https://linkedin.com/shareArticle?mini=true&url=${url}`"
        target="_blank"
      >
        <IconLinkedinFill />
      </a>
    </div>
    <!-- social link: github -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-950"
    >
      <a
        href="#"
        target="_blank"
      >
        <IconGithubFill />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { urlPath } = defineProps(['urlPath'])
const url = computed(() => config.public.appBaseUrl + urlPath)
</script>
