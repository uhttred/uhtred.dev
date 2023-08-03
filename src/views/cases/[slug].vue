<template>
  <div>
    <div
      class="row-c relative before:block before:absolute before:bg-gray-100 dark:before:bg-gray-800
        before:h-[33.125rem] before:w-full before:-inset-1 before:-z-10"
    >
      <div class="row bdr-b-1">
        <!-- share icons -->
        <div
          class="col-span-1 hidden xl:block pb-14"
        >
          <div class="flex-col flex gap-y-4 mt-24 sticky top-24">
            <!-- social link: linkedin -->
            <div
              class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
                justify-center items-center bg-white dark:bg-gray-950"
            >
              <a
                href="#"
                target="_blank"
              >
                <IconLinkedinFill />
              </a>
            </div>
            <!-- social link: github -->
            <div
              class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
                justify-center items-center bg-white dark:bg-gray-950"
            >
              <a
                href="#"
                target="_blank"
              >
                <IconGithubFill />
              </a>
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="col-span-full flex flex-col items-center xl:col-span-10 xl:col-start-2 pt-24">
          <section class="flex flex-col items-center w-full">
            <h1 @click="loadData" class="font-bold text-40/[3.75rem] max-w-[41.75rem] text-center text-color-1">
              More sales after a well-consolidated process
            </h1>
            <p class="text-18/8 text-color-2 text-center max-w-[41.75rem] font-normal mt-8">
              Find out how ZAKI became the first platform in Angola to sell subscriptions to digital services.
            </p>
            <!-- cover -->
            <div
              class="w-screen xl:w-[calc(100%+40px)] xl:h-[26.875rem] bg-2 xl:bdr-2 xl:rounded-md
                overflow-hidden mt-14 text-center"
            >
              <img
                src="https://www.threegirlsmedia.com/wp-content/uploads/2021/11/blog-scaled.jpg"
                class="w-full h-full object-cover"
                alt=""
              >
            </div>
          </section>
          <!-- markdown conten -->
          <article
            class="flex flex-col items-center w-full max-w-[46.75rem] my-14"
          >
            <UhMarkdown :content="data" />
          </article>
        </div>
      </div>
    </div>
    <!-- scope -->
    <div class="row-c my-14">
      <div class="row min-h-[14rem] bg-2 bdr-2 rounded-lg py-12">
        <div
          v-for="(g, i) in ssd"
          :key="i"
          class="col-span-full xl:col-span-3 first:ml-8"
        >
          <div>
            <h4 class="uppercase text-14 font-bold text-color-1">
              {{ g.title }}
            </h4>
            <ul class="mt-8">
              <li
                v-for="(t, ii) in g.items"
                :key="ii"
                class="text-14 text-color-3 mb-2"
              >
                {{ t }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- team and respo -->
    <section class="row-c">
      <div class="row">
        <div class="col-span-full">
          <h1 class="font-bold text-color-1 text-32">
            Core team and responsibilities
          </h1>
        </div>
      </div>
      <div class="row gap-y-8 mt-10 bdr-b-1 pb-14">
        <div
          v-for="(user, i) in team"
          :key="i"
          class="col-span-full xl:col-span-3 flex flex-col"
        >
          <div class="bdr-2 rounded bg-2 overflow-hidden w-12 h-12">
            <img
              :src="user.avatar"
              alt=""
              class="w-full h-full object-cover"
            >
          </div>
          <div class="py-3 hover:underline">
            <a
              href="#"
              target="_blank"
            >
              <h2 class="text-13 font-bold text-color-1">
                {{ user.name }}
              </h2>
            </a>
            <a
              href="#"
              target="_blank"
            >
              <p class="text-color-3 font-normal text-12 mt-1">
                {{ user.title }}
              </p>
            </a>
          </div>
          <div class="linex-2 w-1/6" />
          <ul>
            <li
              v-for="(r, index) in user.responsibilities"
              :key="index"
              class="text-12 font-normal text-color-2 mt-2"
            >
              {{ r }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- rknow more cases -->
    <PageSectionKnowMoreCases class="py-24" />
    <!-- products -->
    <PageSectionProductListSimple class="mb-24" />
  </div>
</template>

<script setup lang="ts">
const data = ref('')
const route = useRoute()

const ssd = [
  {
    title: 'Services Scope',
    items: [
      'UI/UX Design',
      'Responsive PWA',
      'Consulting & Research',
      'Backend System'
    ]
  },
  {
    title: 'Tech. and Techniques',
    items: [
      'Gitlab CI',
      'Google Cloud Platform',
      'Nuxt.js',
      'Django REST Framework'
    ]
  },
  {
    title: 'Year',
    items: [
      '2019 - Present'
    ]
  }
]

const team = [
  {
    avatar: '/image/people/uhtred.png',
    name: 'Uhtred M.',
    title: 'Product Developer',
    responsibilities: [
      'Software Architecture',
      'Product Development',
      'Management'
    ]
  },
  {
    avatar: '/image/people/uhtred.png',
    name: 'Eulalio Francisco',
    title: 'UI Designer',
    responsibilities: [
      'UI/UX Design',
      'UI Style Guide'
    ]
  },
  {
    avatar: '/image/people/justo-eliseu.png',
    name: 'Justo Eliseu',
    title: 'CEO at Wedo Brand',
    responsibilities: [
      'UI/UX Design',
      'UI Style Guide'
    ]
  },
  {
    avatar: '/image/people/justo-eliseu.png',
    name: 'Milton Bernardo',
    title: 'Frontend Developer at Mirantes SA',
    responsibilities: [
      'Frontend Development',
    ]
  }
]

const url = ref('https://raw.githubusercontent.com/txiocoder/django-proxypay/master/README.md')
url.value = route.query?.url || url.value
const loadData = () => {
  useFetch(url.value).then((r) => {
    data.value = r.data.value || ''
  })
}
loadData()
</script>
