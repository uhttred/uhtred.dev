<template>
  <article>
    <div class="w-full h-[21.375rem] bg-2 rounded-lg overflow-hidden bdr-2">
      <!-- image -->
      <NuxtLink to="/">
        <img
          src=""
          alt=""
          class="hidden w-full h-full object-cover"
        >
      </NuxtLink>
    </div>
    <NuxtLink
      to="/"
    >
      <h1 class="text-18/9 font-medium text-color-1 mt-4 lg:mt-5.5 hover:underline">
        Behavioral Design - Key Points for a Persuasive Design
        <span class="text-color-3 px-2">•</span>
        <span class=" text-green-500 text-16">$ 14.99</span>
      </h1>
    </NuxtLink>
    <div class="flex flex-wrap mt-4 gap-2">
      <UhInsightTag
        v-for="tag in ['e-Book', 'Design']"
        :key="tag"
        :tag="tag"
      />
    </div>
  </article>
</template>
