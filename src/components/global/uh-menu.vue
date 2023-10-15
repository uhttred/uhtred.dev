<template>
  <header
    ref="menuContainer"
    id="uh-menu"
    class="row-c h-[54px]
      top-0 sticky bdr-b-1 z-40 bg-gray-10/50 dark:bg-gray-700/70" 
  >
    <!-- main bar -->
    <div class="row h-full">
      <div class="col-span-full h-full flex justify-between items-center">
        <!-- brand logo -->
        <div>
          <NuxtLink
            :to="localePath('index')"
            @click.native="showMobileMenu=false"
          >
            <img
              src="~/assets/image/brand/uhtredm-logo-black.svg"
              class="w-[90px] dark:hidden"
              alt="uhtred logo"
            >
            <img
              src="~/assets/image/brand/uhtredm-logo-white.svg"
              class="w-[90px] hidden dark:block"
              alt="uhtred logo"
            >
          </NuxtLink>
        </div>
        <!-- right items -->
        <div class="flex items-center gap-x-5">
          <!-- navbar -->
          <nav class="hidden gap-x-6 md:flex">
            <NuxtLink
              :to="localePath('insights')"
              :class="[
                'font-medium text-14 leading-none hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/insights'),
                  'text-gray-500 dark:text-gray-400': !route.path.includes('/insights')
                }
              ]"
            >
              {{ $t('Insights') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('series')"
              :class="[
                'font-medium text-14 leading-none hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/series'),
                  'text-gray-500 dark:text-gray-400': !route.path.includes('/series')
                }
              ]"
            >
              {{ $t('Series') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('store')"
              :class="[
                'font-medium text-14 leading-none hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/store'),
                  'text-gray-500 dark:text-gray-400': !route.path.includes('/store')
                }
              ]"
            >
              {{ $t('Store') }}
            </NuxtLink>
          </nav>
          <!-- uhtred avatar -->
          <!-- TODO: active author click -->
          <div
            @click="store.useSubNavBg2()"
            class="flex-shrink-0"
          >
            <img
              src="~/assets/image/uhtred-pofile.png"
              title="Uhtred M"
              alt="uhtred profile image"
              class="w-9 h-9 bdr-p rounded-full"
            >
          </div>
          <!-- search bar -->
          <div
            class="w-60 h-10 relative bdr-1 rounded-lg 
              justify-between items-center px-5 hidden lg:flex"
          >
            <input
              class="bg-transparent outline-none text-13 text-color-1 w-10/12
                appearance-none"
              type="text"
              name="search:insights"
              :placeholder="$t('Search for insights')"
              v-model="searchQuery"
              @keydown.enter="goSearch"
            >
            <button
              v-show="searchQuery.trim()"
              @click="goSearch"
            >
              <i class="icon-search text-16 text-color-1" />
            </button>
          </div>
          <!-- theme change -->
          <UhThemeToggle
            class="hidden md:block"
            :title="$t('pages.index.tagtitle.p1')"
          />
          <!-- internacionalization change -->
          <UhLocaleToggle
            class="hidden md:block"
            :title="$t('pages.index.tagtitle.p2')"
          />
          <!-- show mobile menu -->
          <div class="flex items-center md:hidden">
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
    <!-- mobile menu dropdown -->
    <div
      v-show="showMobileMenu"
      class="absolute row-c top-full bg-2 h-screen bdr-t-1 md:!hidden"
    >
      <div class="row">
        <div class="col-span-full">
          <!-- search bar -->
          <div
            class="w-full h-10 relative bdr-1 rounded-lg 
              flex justify-between items-center px-5 mt-5"
          >
            <input
              class="bg-transparent outline-none text-13 text-color-1 w-10/12
                appearance-none"
              type="text"
              name="search:insights"
              :placeholder="$t('Search for insights')"
              v-model="searchQuery"
              @keydown.enter="goSearch"
            >
            <button
              v-show="searchQuery.trim()"
              @click="goSearch"
            >
              <i class="icon-search text-16 text-color-1" />
            </button>
          </div>
          <!-- navbar -->
          <nav class="gap-y-8 flex flex-col mt-6">
            <NuxtLink
              :to="localePath('insights')"
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
            >
              {{ $t('Insights') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('series')"
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
            >
              {{ $t('Series') }}
            </NuxtLink>
            <NuxtLink
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              :to="localePath('store')"
            >
              {{ $t('Store') }}
            </NuxtLink>
          </nav>
          <!-- change locale -->
          <UhLocaleToggle
            class="mt-12"
            @click.native="showMobileMenu=false"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const searchQuery = ref('')
const showMobileMenu = ref(false)

// TODO: GA4 on search terms
const goSearch = () => {
  alert(searchQuery.value)
  searchQuery.value = ''
}
</script>

<style scoped lang="postcss">
#uh-menu {
  backdrop-filter: blur(12px);
}
</style>
