<template>
  <div class="row-c py-120px">
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('Get great Insights') }}
        </h2>
        <!--  -->
        <NuxtLink
          :to="localePath('index')"
          class="text-16 text-color-2 border-b-2 
            border-green-500 hover:text-color-1 pb-1 hidden lg:block"
        >
          {{ $t('See all Insights') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>