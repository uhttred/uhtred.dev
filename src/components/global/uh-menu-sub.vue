<template>
  <section
    id="uh-menu-sub"
    class="hidden sm:row-c"
  >
    <div class="row">
      <div
        class="col-span-full bdr-b-1 py-1"
        >
        <nav class="flex gap-x-8 md:gap-x-10 justify-center items-center">
          <NuxtLink
              v-for="(subNavItem, index) in subNavItems"
              :key="index"
              :to="localePath(subNavItem.route)"
              class="text-13 text-gray-500 dark:text-gray-400 hover:text-color-1"
              @click.native="on_select_content(subNavItem.route.params.slug)"
            >
              {{
                locale === 'pt'
                  ? subNavItem.pt_name
                  : subNavItem.name
              }}
            </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { on_select_content } = useGtagEvent()
// TODO: GA4 on topic interest
const subNavItems = [
  {
    name: 'Programming',
    pt_name: 'Programação',
    route: {
      name: 'insights-topics-slug',
      params: {
        slug: 'programming'
      }
    }
  },
  {
    name: 'Digital Business',
    pt_name: 'Negócios Digitais',
    route: {
      name: 'insights-topics-slug',
      params: {
        slug: 'digital-business'
      }
    }
  },
  {
    name: 'Marketing',
    pt_name: 'Marketing',
    route: {
      name: 'insights-topics-slug',
      params: {
        slug: 'marketing'
      }
    }
  },
  {
    name: 'Personal Finance',
    pt_name: 'Finanças Pessoais',
    route: {
      name: 'insights-topics-slug',
      params: {
        slug: 'personal-finance'
      }
    }
  }
]
</script>