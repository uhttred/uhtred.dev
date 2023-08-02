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
          <div class="flex-col flex items-center gap-y-4 mt-24 sticky top-24">
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
            class="flex flex-col items-center w-full max-w-[46.75rem] mt-14
              prose dark:prose-inverts
              prose-h1:text-40/[3.30rem] prose-headings:text-color-1
              prose-h2:text-32/[3rem] prose-h3:text-28/[2.75rem] prose-h4:text-24/[2.4rem]
              prose-h5:text-22/[2.4rem] prose-h6:text-20/[2.4rem]
              prose-p:text-color-2 prose-p:text-18/9
              prose-hr:border-gray-900/10 dark:prose-hr:border-gray-50/10
              prose-ul:list-none prose-li:text-18 prose-li:text-color-2
              prose-a:text-color-1 prose-a:decoration-green-500 prose-a:underline
              prose-strong:text-color-1
            "
          >
            <VueMarkdown
              :source="data"
              class="w-full"
            />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.prose li::before {
  @apply text-green-brand text-18;
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */ 
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render'
const data = ref('')
const loadData = () => {
  useFetch('http://localhost:8000/post1').then((r) => {
    data.value = r.data.value || ''
  })
}
loadData()
</script>
