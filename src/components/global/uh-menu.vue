<template>
  <div
    ref="menuContainer"
    class="w-full flex flex-col items-center bg-white dark:bg-gray-950 py-4
      top-0 sticky bdr-b-p lg:border-b-0 z-40 stuck:bg-red-500"
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
              {{ $t('Cases') }}
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
            {{ $t('Services') }}
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
            {{ $t('Insights') }}
            </NuxtLink>
            <NuxtLink
              class="font-semibold text-color-3 text-14 xl:text-16 hover:text-color-1"
              :to="localePath('index')"
            >
            {{ $t('Store') }}
            </NuxtLink>
          </nav>
          <!-- CTA -->
          <div class="hidden lg:block">
            <button class="btn hover:bg-green-500">
              {{ $t('Start project') }}
            </button>
          </div>
          <!-- profile and social  -->
          <div class="cursor-pointer relative z-10">
            <button
              :title="$t('pages.index.tagtitle.p3')"
              @click="showSocialLink=!showSocialLink"
            >
              <img
                src="~/assets/image/uhtred-pofile.png"
                alt="uhtred profile image"
                class="w-10 lg:w-[46px] bdr-p rounded-full"
              >
            </button>
            <div
              v-show="showSocialLink"
              class="absolute top-full left-1/2 -translate-x-1/2 pt-2
                flex flex-col items-center gap-y-4"
            >
              <!-- social link: linkedin -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex
                  justify-center items-center bg-white dark:bg-gray-950"
              >
              <a
                  :href="$config.public.socialLink.linkedin"
                  target="_blank"
                >
                  <IconLinkedinFill />
                </a>
              </div>
              <!-- social link: instagram -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex
                  justify-center items-center bg-white dark:bg-gray-950"
              >
              <a
                  :href="$config.public.socialLink.instagram"
                  target="_blank"
                >
                  <IconInstagramLine/>
                </a>
              </div>
              <!-- social link: dribble -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex
                  justify-center items-center bg-white dark:bg-gray-950"
              >
              <a
                  :href="$config.public.socialLink.dribbble"
                  target="_blank"
                >
                  <IconDribbbleLine />
                </a>
              </div>
              <!-- social link: github -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex
                  justify-center items-center bg-white dark:bg-gray-950"
              >
                <a
                  :href="$config.public.socialLink.github"
                  target="_blank"
                >
                  <IconGithubFill />
                </a>
              </div>
              <!-- social link: close -->
              <button
                class="bdr-p rounded-full w-12 h-12 flex
                  justify-center items-center bg-white dark:bg-gray-950"
                @click="showSocialLink=false"
              >
                <IconX />
              </button>
            </div>
          </div>
          <!-- theme change -->
          <UhThemeToggle
            class="hidden lg:block"
            :title="$t('pages.index.tagtitle.p1')"
          />
          <!-- theme change mobile -->
          <UhThemeToggle v-if="showMobileMenu" />
          <!--  -->
          <UhLocaleToggle
            class="hidden lg:block"
            :title="$t('pages.index.tagtitle.p2')"
          />
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
    <div
      v-show="showMobileMenu"
      class="absolute w-full top-full bg-white dark:bg-gray-950 h-screen bdr-t-1
      flex flex-col items-center"
    >
      <div class="row">
        <div class="col-span-full">
          <nav class="gap-y-8 flex flex-col mt-12">
            <NuxtLink
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              :to="localePath('index')"
            >
              {{ $t('Cases') }}
            </NuxtLink>
            <NuxtLink
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              :to="localePath('index')"
            >
              {{ $t('Services') }}
            </NuxtLink>
            <NuxtLink
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              :to="localePath('index')"
            >
              {{ $t('Insights') }}
            </NuxtLink>
            <NuxtLink
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              :to="localePath('index')"
            >
              {{ $t('Store') }}
            </NuxtLink>
          </nav>
          <!-- change locale -->
          <UhLocaleToggle class="mt-12" />
          <!-- start project -->
          <button class="btn active:bg-green-500 w-full mt-12">
            {{ $t('Start project') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.menu-is-sticky {
  @apply lg:border-b
}
</style>

<script setup lang="ts">
import _ from 'lodash'
const localePath = useLocalePath()
const showMobileMenu = ref(false)
const showSocialLink = ref(false)
const menuContainer = ref(null)

onMounted(() => {
  if (menuContainer.value) {
    const element = menuContainer.value as HTMLElement
    document.addEventListener(
      "scroll",
      _.throttle(e => {
        element.classList.toggle(
          "menu-is-sticky",
          element.offsetTop > 1
        );
      }, 200)
    );
  }
})
</script>
