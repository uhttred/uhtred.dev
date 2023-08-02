<template>
  <div>
    <div
      class="row-c relative before:block before:absolute before:bg-gray-100 dark:before:bg-gray-800
        before:h-[33.125rem] before:w-full before:-inset-1 before:-z-10"
    >
      <div class="row min-h-scree">
        <!-- share icons -->
        <div
          class="col-span-1 hidden xl:block"
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
            class="flex flex-col items-center w-full max-w-[46.75rem] mt-14"
          >
            <UhMarkdown :content="data" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import VueMarkdown from 'vue-markdown-render'
// import markdownEmoji from 'markdown-it-emoji'

const data = ref('')
const loadData = () => {
  useFetch('http://localhost:8000/post1').then((r) => {
    data.value = r.data.value || ''
  })
}
loadData()
</script>
