<template>
  <SectionNewsletterForBottom />
  <SectionMarqueeInsightsTitle class="bdr-b-1 bdr-t-1" />
  <footer class="row-c bg-2">
    <div class="row my-7">
      <div class="col-span-4 my-7">
        <!-- brand logo -->
        <NuxtLink
          :to="localePath('index')"
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
        <p class="text-color-2 text-14/7 mt-8 max-w-[284px]">
          {{ $t('t043') }}
        </p>
        <!-- social -->
        <div
          class="flex flex-wrap mt-5.5 gap-x-8 gap-y-5.5 max-w-[140px]
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
            :href="$config.public.socialLink.youtube"
            class="opacity-70 hover:opacity-100"
              title="GitHub"
            target="_blank"
            >
            <i class="icon-youtube text-18 text-color-2 hover:text-color-1" />
          </a>
          <a
            :href="$config.public.socialLink.linkedin"
            class="opacity-70 hover:opacity-100"
            target="_blank"
          >
            <!-- <IconLinkedinFill /> -->
            <i class="icon-linkedin text-18 text-color-2 hover:text-color-1" />
          </a>
        </div>
      </div>
      <!-- footer vas -->
      <div
        v-for="(ul, index) in ulGroups"
        :key="index"
        class="col-span-2 my-7"
      >
        <h2 class="text-18 font-bold text-color-1">
          {{ ul.title[locale] }}<span class="text-green-500">.</span>
        </h2>
        <ul class="mt-8">
          <li
            v-for="(link, ix) in ul.items"
            :key="ix"
            class="text-13 text-color-2 mb-5.5 last:mb-0 hover:text-color-1 hover:underline"
          >
            <NuxtLink
              v-if="!link.isExternal"
              :to="localePath(link.route)"
            >
              {{ link.text[locale] }}
            </NuxtLink>
            <a
              v-else
              :href="link.route"
              target="_blank"
              @click.native="onClick(link)"
            >
              {{ link.text[locale] }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-span-full bdr-t-1 justify-center py-3">
        <p class="text-13 text-color-3 text-center">
          Copyright &copy; {{ new Date().getFullYear() }} Uhtred M. {{ $t('t044') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { $config } = useNuxtApp()
const { on_join_group } = useGtagEvent()
const ulGroups = [
  // help center links
  {
    title: {
      pt: 'Ajuda',
      en: 'Help Center',
    },
    items: [
      {
        isExternal: false,
        route: 'help',
        text: {
          pt: 'Central de Ajuda',
          en: 'Help Center',
        }
      },
      {
        isExternal: false,
        route: 'help-about-us',
        text: {
          pt: 'Sobre Uhtred M',
          en: 'About Uhtred M',
        }
      },
      {
        isExternal: false,
        route: 'help-contact-us',
        text: {
          pt: 'Contato',
          en: 'Contact',
        }
      },
      {
        isExternal: false,
        route: 'help-privacy-policy',
        text: {
          pt: 'Privacidade & Dados',
          en: 'Data & Privacy Policy',
        }
      },
      {
        isExternal: false,
        route: 'help-terms',
        text: {
          pt: 'Termos de Uso',
          en: 'Terms of Use',
        }
      }
    ]
  },
  // community
  {
    title: {
      pt: 'Canais',
      en: 'Channels',
    },
    items: [
      {
        isExternal: true,
        route: $config.public.socialLink.telegramCommunity,
        ga_group_id: 'telegram',
        text: {
          pt: 'Telegram',
          en: 'Telegram',
        }
      },
      {
        isExternal: true,
        route: $config.public.socialLink.whatsappCommunity,
        ga_group_id: 'whatsapp',
        text: {
          pt: 'WhatsApp',
          en: 'WhatsApp',
        }
      },
      {
        isExternal: true,
        route: $config.public.socialLink.youtube,
        text: {
          pt: 'YouTube',
          en: 'YouTube',
        }
      }
    ]
  }
]

const onClick = (groupItem: object) => {
  if (groupItem.ga_group_id) {
    on_join_group(groupItem.ga_group_id)
  }
}
</script>
