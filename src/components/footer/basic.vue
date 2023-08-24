<template>
  <footer class="row-c bg-2 pt-20 bdr-t-2">
    <div class="row pb-20 bdr-b-1 gap-y-14 xl:gap-y-0">
      <!-- logo and address -->
      <div class="col-span-full xl:col-span-2">
        <NuxtLink :to="localePath('index')">
          <img
            src="~/assets/image/uhtred-logo-menu.svg"
            class="w-[90px] lg:w-[100px] dark:hidden"
            alt="uhtred logo"
          >
          <img
            src="~/assets/image/uhtred-logo-menu-light.svg"
            class="w-[90px] lg:w-[100px] hidden dark:block"
            alt="uhtred logo"
          >
        </NuxtLink>
        <!--  -->
        <p class="text-14/6 text-color-3 mt-10">
          Talatona, Luanda, Angola
        </p>
        <a
          :href="`mailto:${$config.public.contact.email}`"
          class="text-14/6 text-color-3 hover:underline hover:text-color-1 mt-4 block"
        >
          {{ $config.public.contact.email }}
        </a>
      </div>
      <!-- social network -->
      <div class="col-span-full xl:col-span-3 xl:col-start-4">
        <h4 class="text-20/[14px] text-color-1 font-bold">
          {{ $t('Stay connected') }}
        </h4>
        <div
          class="flex flex-wrap mt-10 gap-x-8 gap-y-5.5 max-w-[140px]
            items-center"
        >
          <a
            :href="$config.public.socialLink.instagram"
            class="opacity-70 hover:opacity-100"
            title="Instagram"
            target="_blank"
          >
            <!-- <IconInstagramLine/> -->
            <i class="icon-instagram text-18 text-color-2 hover:text-color-1" />
          </a>
          <a
            :href="$config.public.socialLink.linkedin"
            class="opacity-70 hover:opacity-100"
            target="_blank"
          >
            <!-- <IconLinkedinFill /> -->
            <i class="icon-linkedin text-18 text-color-2 hover:text-color-1" />
          </a>
          <a
            :href="$config.public.socialLink.twitter"
            class="opacity-70 hover:opacity-100"
            target="_blank"
          >
            <!-- <IconLinkedinFill /> -->
            <i class="icon-twitter text-18 text-color-2 hover:text-color-1" />
          </a>
          <a
            :href="$config.public.socialLink.github"
            class="opacity-70 hover:opacity-100"
              title="GitHub"
            target="_blank"
            >
            <!-- <IconGithubFill /> -->
            <i class="icon-github text-18 text-color-2 hover:text-color-1" />
          </a>
          <a
            :href="$config.public.socialLink.youtube"
            class="opacity-70 hover:opacity-100"
              title="GitHub"
            target="_blank"
            >
            <!-- <IconGithubFill /> -->
            <i class="icon-youtube text-18 text-color-2 hover:text-color-1" />
          </a>
        </div>
      </div>
      <!-- social newsletter -->
      <div class="col-span-full xl:col-span-4 xl:col-start-9">
        <h4 class="text-20/[14px] text-color-1 font-bold xl:text-right">
          {{ $t('t013') }}
        </h4>
        <SmallNewsletterInput class="mt-10"/>
      </div>
    </div>
    <!-- copy row -->
    <div class="row">
      <div class="col-span-full flex items-center justify-between py-5">
        <div>
          <p class="text-12 lg:text-13 text-color-3">
            &copy; {{ new Date().getFullYear() }} Uhtred M., Ageu Mateus.
          </p>
        </div>
        <div class="flex items-center gap-x-5 opacity-40 pointer-events-none">
          <NuxtLink
            class="text-12 lg:text-13 text-color-3 hover:underline"
            :to="localePath('index')"
          >
            {{ $t('Privacy Policy') }}
          </NuxtLink>
          <NuxtLink
            class="text-12 lg:text-13 text-color-3 hover:underline"
            :to="localePath('index')"
          >
            {{ $t('Terms of Use') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>