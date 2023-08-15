<template>
  <div
    ref="menuContainer"
    class="w-full flex flex-col items-center justify-center bg-p py-3m h-16
      top-0 sticky bdr-b-p lg:border-b-0 z-40 stuck:bg-red-500"
  >
    <div class="row h-full">
      <div class="col-span-full h-full flex justify-between items-center">
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
        <div class="flex h-full justify-end items-center gap-x-6 lg:gap-x-8">
          <!-- nav bar -->
          <nav class="gap-x-8 hidden lg:flex h-full items-center">
            <NuxtLink
              :to="localePath('cases')"
              :class="[
                'font-medium text-14 hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/cases'),
                  'text-color-3': !route.path.includes('/cases')
                }
              ]"
            >
              {{ $t('Cases') }}
            </NuxtLink>
            <button
              class="font-medium text-color-3 h-full -i-sv-dropdown
                text-14 hover:text-color-1 cursor-default"
              @mouseover="showServicesDropdown=true"
              @mouseout="showServicesDropdown=false"
            >
              {{ $t('Services') }}
            </button>
            <NuxtLink
              :to="localePath('insights')"
              :class="[
                'font-medium text-14 hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/insights'),
                  'text-color-3': !route.path.includes('/insights')
                }
              ]"
            >
            {{ $t('Insights') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('store')"
              :class="[
                'font-medium text-14 hover:text-color-1',
                {
                  'text-color-1': route.path.includes('/store'),
                  'text-color-3': !route.path.includes('/store')
                }
              ]"
            >
            {{ $t('Store') }}
            </NuxtLink>
          </nav>
          <!-- CTA -->
          <div class="hidden lg:block">
            <NuxtLink
              :to="localePath('start')"
              class="btn hover:bg-green-500 block h-10"
            >
              {{ $t('Start project') }}
            </NuxtLink>
          </div>
          <!-- profile and social  -->
          <div class="relative z-10 flex items-center">
            <button
              :title="$t('pages.index.tagtitle.p3')"
              @click="showSocialLink=!showSocialLink"
            >
              <img
                src="~/assets/image/uhtred-pofile.png"
                alt="uhtred profile image"
                class="w-8 lg:w-10 bdr-p rounded-full"
              >
            </button>
            <div
              v-show="showSocialLink"
              class="absolute top-full left-1/2 -translate-x-1/2 pt-2
                flex flex-col items-center gap-y-4"
            >
              <!-- social link: twitter -->
              <div
                  class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
                    justify-center items-center bg-white dark:bg-gray-950"
                >
                <a
                  :href="$config.public.socialLink.twitter"
                  target="_blank"
                >
                  <!-- <IcontwitterLine/> -->
                  <i class="block icon-twitter text-18 text-color-2 hover:text-color-1" />
                </a>
              </div>
              <!-- social link: linkedin -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
                  justify-center items-center bg-white dark:bg-gray-950"
              >
                <a
                  :href="$config.public.socialLink.linkedin"
                  target="_blank"
                >
                  <!-- <IconLinkedinFill /> -->
                  <i class="block icon-linkedin text-18 text-color-2 hover:text-color-1" />
                </a>
              </div>
              <!-- social link: instagram -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
                  justify-center items-center bg-white dark:bg-gray-950"
              >
                <a
                  :href="$config.public.socialLink.instagram"
                  target="_blank"
                >
                  <!-- <IconInstagramLine/> -->
                  <i class="block icon-instagram text-18 text-color-2 hover:text-color-1" />
                </a>
              </div>
              <!-- social link: dribble -->
              <!-- <div
                class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
                  justify-center items-center bg-white dark:bg-gray-950"
              >
                <a
                  :href="$config.public.socialLink.dribbble"
                  target="_blank"
                >
                  <IconDribbbleLine />
                </a>
              </div> -->
              <!-- social link: github -->
              <div
                class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
                  justify-center items-center bg-white dark:bg-gray-950"
              >
                <a
                  :href="$config.public.socialLink.github"
                  target="_blank"
                >
                  <!-- <IconGithubFill /> -->
                  <i class="block icon-github text-18 text-color-2 hover:text-color-1" />
                </a>
              </div>
              <!-- social link: close -->
              <button
                class="bdr-p rounded-full w-12 h-12 flex mn-social-icon
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
    <!-- services dropdown -->
    <div
      v-show="showServicesDropdown"
      class="row-c absolute bg-2 top-full w-full bdr-b-2 bdr-t-2"
      @mouseover="showServicesDropdown=true"
      @mouseout="showServicesDropdown=false"
    >
      <div class="row pt-10 pb-14">
        <div
          v-for="(group, i) in serviceGroup"
          :key="i"
          class="col-span-3"
        >
          <h5 class="font-bold text-13 text-color-1">
            {{ $t(group.title) }}
          </h5>
          <ul class="mt-8">
            <li
              v-for="(service, ii) in group.services"
              :key="ii"
              class="text-12 text-color-3 font-normal hover:text-color-1 mt-2 first:mt-0"
            >
              <NuxtLink
                :to="localePath('start')"
                @click.native="showServicesDropdown=false"
              >
                {{ $t(service) }}
              </NuxtLink>
            </li>
          </ul>
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
              :to="localePath('cases')"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              @click.native="showMobileMenu=false"
            >
              {{ $t('Cases') }}
            </NuxtLink>
            <!-- <NuxtLink
              :to="localePath('index')"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
              @click.native="showMobileMenu=false"
              >
              {{ $t('Services') }}
            </NuxtLink> -->
            <NuxtLink
              :to="localePath('insights')"
              @click.native="showMobileMenu=false"
              class="font-semibold text-color-1 text-24/27 active:text-color-2"
            >
              {{ $t('Insights') }}
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
          <UhLocaleToggle class="mt-12" />
          <!-- start project -->
          <NuxtLink
            :to="localePath('start')"
            class="btn active:bg-green-500 w-full mt-12 block text-center"
          >
            {{ $t('Start project') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.menu-is-sticky {
  backdrop-filter: blur(12px);
  @apply lg:border-b bg-gray-50/70 dark:bg-gray-900/70;
}

.menu-is-sticky .mn-social-icon {
  backdrop-filter: blur(12px);
  @apply bg-gray-50/70 dark:bg-gray-900/70;
}
</style>

<script setup lang="ts">
import _ from 'lodash'
const localePath = useLocalePath()
const showMobileMenu = ref(false)
const showSocialLink = ref(false)
const showServicesDropdown = ref(false)
const menuContainer = ref(null)
const route = useRoute()

const serviceGroup = [
  {
    title: 'Consulting and Ideation',
    services: [
      'Consulting',
      'Product Validation'
    ]
  },
  {
    title: 'Design',
    services: [
      'User Interface Design',
      'UI Style Guide',
      'Design System',
      'Drand Design'
    ]
  },
  {
    title: 'Development',
    services: [
      'Web Application',
      'Backend Services',
      'System Integration',
      'Automation'
    ]
  },
  {
    title: 'Management',
    services: [
      'Cloud Infrastructure Management',
      'CI/CD Automations'
    ]
  }
]

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
