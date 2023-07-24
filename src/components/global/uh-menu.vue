<template>
  <div
    class="w-full flex flex-col items-center bg-white dark:bg-gray-950 py-4
      top-0 sticky bdr-b-p lg:py-8"
  >
    <div class="row">
      <div class="col-span-full flex justify-between items-center">
        <!-- logo -->
        <div>
          <NuxtLink :to="localePath('index')">
            <img
              src="~/assets/image/uhtred-logo-menu.svg"
              class="w-[90px] lg:w-auto dark:hidden"
              alt="uhtred logo"
            >
            <img
              src="~/assets/image/uhtred-logo-menu-light.svg"
              class="w-[90px] lg:w-auto hidden dark:block"
              alt="uhtred logo"
            >
          </NuxtLink>
        </div>
        <!-- navgation container -->
        <div class="flex justify-end items-center gap-x-6 lg:gap-x-8">
          <!-- nav bar -->
          <nav class="gap-x-8 hidden lg:flex">
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
              Cases
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
              Services
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
              Insights
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
              Store
            </NuxtLink>
          </nav>
          <!-- CTA -->
          <div class="hidden lg:block">
            <button class="btn">
              Start project
            </button>
          </div>
          <!-- profile and social  -->
          <div class="cursor-pointer">
            <img
              src="~/assets/image/uhtred-pofile.png"
              alt="uhtred profile image"
              class="w-10 lg:w-[46px] bdr-p rounded-full"
            >
          </div>
          <!-- theme change -->
          <UhThemeToggle class="hidden lg:block" />
          <!--  -->
          <UhLocaleToggle class="hidden lg:block"/>
          <!-- show mobile menu -->
          <div class="flex items-center lg:hidden">
            <button
              v-show="!showMobileMenu"
              @click="showMobileMenu=true"
            >
              <IconMenu />
            </button>
            <button
              v-show="showMobileMenu"
              @click="showMobileMenu=false"
            >
              <IconX />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <!-- <div class="absolute top-full h-">

    </div> -->
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const showMobileMenu = ref(false)
</script>
