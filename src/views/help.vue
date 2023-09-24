<template>
  <div>
    <!--  -->
    <section class="row-c">
      <div class="row">
        <!-- sidebar -->
        <aside class="col-span-3 bdr-r-1 hidden xl:block">
          <!-- sticky content -->
          <div class="sticky top-16">
            <div class="w-full bdr-b-1 py-4">
              <NuxtLink
                :to="localePath('help')"
                class="inline-block"
              >
                <h2 class="font-bold text-18 text-color-1">
                  Help Center
                </h2>
              </NuxtLink>
            </div>
            <!-- content block -->
            <div class="mt-8">
              <!-- <h3 class="text-20 text-color-1 font-bold mb-5.5">
                Announcement
              </h3> -->
              <!--  -->
              <nav class="w-full rounded-md bg- bdr-">
                <div
                  v-for="(group, index) in navgroups"
                  :key="index"
                  class="mb-6 last:mb-0"
                >
                  <h4 class="text-16 font-medium text-color-1">
                    {{ group.title }}
                  </h4>
                  <ul class="mt-3">
                    <nuxt-link
                      v-for="(item, i) in group.items"
                      :key="i"
                      :to="localePath(item.to)"
                    >
                      <li class="text-14 text-color-2 hover:underline py-0.5">
                        {{ item.title }}
                      </li>
                    </nuxt-link>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </aside>
        <!-- vertical line -->
        <!-- <div class="col-span-1 col-start-4 hidden xl:flex justify-center">
          <div class="liney-1" />
        </div> -->
        <!-- page contents -->
        <div class="col-span-full xl:col-span-9 min-h-screen">
          <NuxtPage />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const navgroups = [
  {
    title: 'Uhtred M.',
    items: [
      {
        title: 'Sobre',
        to: '/help/about'
      },
      {
        title: 'Contato',
        to: '/help/contact-us'
      }
    ]
  },
  {
    title: 'Relationships',
    items: [
      {
        title: 'Terms of Use',
        to: '/help/terms'
      },
      {
        title: 'Privacidade & Dados',
        to: '/help/privacy-policy'
      },
      {
        title: 'Cookies',
        to: 'help-cookie-policy'
      }
    ]
  }
]
</script>
