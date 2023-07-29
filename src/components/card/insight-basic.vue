<template>
  <article>
    <div class="h-[9.875rem] bg-2 rounded-lg overflow-hidden bdr-2">
      <!-- image -->
      <NuxtLink to="/">

      </NuxtLink>
    </div>
    <NuxtLink
      to="/"
    >
      <h1 class="text-18/9 font-medium text-color-1 mt-4 lg:mt-5.5 hover:underline">
        5 Tech Trends That Drive Digital Acceleration in 2023
      </h1>
    </NuxtLink>
    <div class="flex flex-wrap mt-4 gap-2">
      <UhInsightTag
        v-for="tag in ['Technology', 'Python', 'Ruby']"
        :key="tag"
        :tag="tag"
      />
    </div>
  </article>
</template>