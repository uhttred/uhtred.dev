<template>
  <div>
    <div
      class="row-c relative before:block before:absolute before:bg-gray-100 dark:before:bg-gray-800
        before:h-[36.125rem] before:w-full before:-inset-1 before:-z-10"
    >
      <div class="row bdr-b-1 relative">
        <!-- share icons -->
        <div
          class="col-span-1 absolute h-full right-full hidden xl:block pb-14 mr-8"
        >
          <div class="flex-col flex gap-y-4 mt-40 sticky top-24">
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
        <div
          class="col-span-full flex flex-col items-center xl:col-span-8
            pt-16 lg:pt-14"
        >
          <section class="flex flex-col w-full">
            <div class="flex items-center mb-4 gap-x-3">
              <p class="text-13 text-color-3">
                12, September 2023 at 12:45
              </p>
              <span class="text-2 text-color-3">•</span>
              <p class="text-13 text-color-2">
                1.345.234 views
              </p>
            </div>
            <h1
              @click="loadData"
              class="font-bold text-32 lg:text-40/[3.75rem] max-w-[41.75rem] text-color-1"
            >
              5 Tech Trends That Drive Digital Acceleration in 2023
            </h1>
            <div class="flex flex-wrap mt-4 gap-2 items-center">
              <UhInsightTag
                v-for="tag in ['Python', 'Django', 'Ruby',]"
                :key="tag"
                :tag="tag"
              />
            </div>
            <!-- author -->
            <div class="mt-5.5 flex items-center gap-x-4">
              <div class="w-12 h-12 rounded-full bdr-2 bg-2 overflow-hidden">
                <img
                  src="/image/people/uhtred.png"
                  alt=""
                  class="w-full h-full object-cover"
                >
              </div>
              <div class="">
                <p class="text-14 text-color-1 font-bold">
                  Uhtred M.
                </p>
                <p class="text-14 text-color-2 mt-1">
                  Product Developer
                  <span class="text-color-3">/ Freelancer</span>
                </p>
              </div>
            </div>
            <!-- cover -->
            <div
              class="w-screen xl:w-full xl:h-[23rem] bg-2 xl:bdr-2 xl:rounded-md
                overflow-hidden mt-10 lg:mt-14"
            >
              <img
                src="https://websitehurdles.com/wp-content/uploads/2023/07/Ways-to-improve-python-coding-skills.webp"
                class="w-full h-full object-cover"
                alt=""
              >
            </div>
          </section>
          <!-- markdown conten -->
          <article
            class="flex flex-col items-center w-full my-14"
          >
            <UhMarkdown :content="data" />
          </article>
        </div>
        <!--  -->
        <aside class="col-span-3 col-start-10 hidden xl:block pb-14">
          <!-- sticky content -->
          <div class="sticky top-[90px]">
            <!-- content block -->
            <div class="mt-8">
              <!-- <h3 class="text-20 text-color-1 font-bold mb-5.5">
                Announcement
              </h3> -->
              <!--  -->
              <div class="w-full h-[14.875rem] rounded-md bg-2 bdr-2">
  
              </div>
            </div>
            <!-- content block -->
            <div class="mt-8">
              <h3 class="text-20 text-color-1 font-bold mb-5.5">
                More topics
              </h3>
              <!--  -->
              <div class="flex flex-wrap mt-4 gap-2 items-center">
                <UhInsightTag
                  v-for="tag in ['Python', 'Django', 'Ruby',]"
                  :key="tag"
                  :tag="tag"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <!-- scope -->
    <div class="row-c mt-14">
      <div class="row min-h-[14rem] bg-2 bdr-2 rounded-lg py-12 gap-y-8">
        
      </div>
    </div>
    <!-- rknow more cases -->
    <PageSectionGetMoreInsights class="py-24" />
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

const url = ref('https://raw.githubusercontent.com/txiocoder/dj-cloud-task/master/README.md')
url.value = route.query?.url || url.value
const loadData = () => {
  useFetch(url.value).then((r) => {
    data.value = r.data.value || ''
  })
}
loadData()
</script>
