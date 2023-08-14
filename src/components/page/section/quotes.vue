<template>
  <section class="row-c">
    <div class="row border-b bdr-b-1 pb-20 xl:pb-24">
      <!-- title -->
      <div class="col-span-full">
        <h2 class="text-24 text-color-1 lg:text-26 font-bold">
          {{ $t('pages.section.quotes.p1') }}
        </h2>
      </div>
      <!-- swiper -->
      <div
        class="swiper-container col-span-full overflow-hidden mt-20 xl:mt-32"
      >
        <div class="swiper-wrapper flex md:justify-between">
          <div
            v-if="error || loading"
            class="swiper-slide flex justify-center items-center"
          >
            <UhSpinner v-show="loading" />
            <button
              v-if="error && !loading"
              title="Error! Retry"
              @click="reset"
            >
              <i class="icon-refresh-cw text-red-500" />
            </button>
          </div>
          <div
            v-for="quote in entries"
            :key="quote.id"
            class="swiper-slide w-[370px] cursor-grab"
          >
            <img
              v-if="quote.brand_logo"
              class="max-w-[120px] lg:max-w-[140px] dark:hidden"
              :src="quote.brand_logo.url"
              alt=""
            >
            <img
              v-if="quote.brand_logo_dark"
              class="max-w-[120px] lg:max-w-[140px] hidden dark:block"
              :src="quote.brand_logo_dark.url"
              alt=""
            >
            <p class="text-14/[30px] lg:text-16/7 text-color-3 mt-10">
              {{
                locale === 'pt'
                  ? quote.pt_text || quote.text
                  : quote.text
              }}
            </p>
            <div
              class="flex items-end mt-5.5"
            >
              <a
                :href="quote.author.website"
                target="_blank"
              >
                <img
                  class="rounded-lg border border-gray-950/10 xl:w-[40px] mr-4 xl:mr-7.5"
                  :src="quote.author.avatar.url"
                  alt="author avatar"
                >
              </a>
              <a
                class="text-12 xl:text-16 font-medium text-color-1"
                :href="quote.author.website"
                target="_blank"
              >
                {{ quote.author.name }} <span class="text-12 xl:text-14 font-normal text-color-4">/ {{ quote.author.headline }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- controls -->
      <div class="col-span-full flex justify-center gap-x-4 mt-16">
        <button
          class=""
          @click="prevSlide"
        >
          <i class="icon-chevron-left text-color-3 text-26 hover:text-color-1" />
        </button>
        <div class="flex items-center">
          <div
            v-for="(v, index) in 6"
            :key="index"
            :class="['rounded-full', {
              'w-2 h-2 ml-2 bg-1': swiper && swiper.realIndex === index,
              'w-[6px] h-[6px] ml-2 bg-1/40': !swiper || swiper.realIndex !== index}]
            "
          />
        </div>
        <button
          class=""
          @click="nextSlide"
        >
          <i class="icon-chevron-right text-color-3 text-26 hover:text-color-1" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const { locale } = useI18n()
const { entries, error, loading, reset } = await usePaginator('quotes', { pageLimit: 8 })

const swiper = ref(null)
const nextSlide = () => {
  swiper.value.slideNext(300)
}
const prevSlide = () => {
  swiper.value.slidePrev(300)
}
onMounted(() => {
  swiper.value = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    speed: 1300,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 53
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 86
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 66
      }
    }
  })
})
</script>
