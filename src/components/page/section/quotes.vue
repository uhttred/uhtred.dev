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
            v-for="n in 6"
            :key="n"
            class="swiper-slide w-[370px] cursor-grab"
          >
            <img
              class="max-w-[120px] lg:max-w-[140px]"
              src="/image/brand/logo-wedobrand.svg"
              alt=""
            >
            <p class="text-14/[30px] lg:text-16/7 text-color-3 mt-10">
              Uhtred Miller has an incredible remote culture. It really makes working together easy.
            </p>
            <div
              class="flex items-end mt-5.5"
            >
              <a
                href="https://www.linkedin.com/in/justo-eliseu-70b317178/"
                target="_blank"
                title="See Justo Eliseu on LinkedIn"
              >
                <img
                  class="dark:hidden rounded-lg border border-gray-950/10 w-10 xl:w-[60px] mr-4 xl:mr-7.5"
                  src="/image/people/justo-eliseu.png"
                  alt=""
                >
                <img
                  class="hidden dark:block rounded-lg border border-gray-950/10 w-10 xl:w-[60px] mr-4 xl:mr-7.5"
                  src="/image/people/justo-eliseu.png"
                  alt=""
                >
              </a>
              <a
                class="text-12 xl:text-16 font-medium text-color-1"
                href="https://www.linkedin.com/in/justo-eliseu-70b317178/"
                target="_blank"
                title="See Justo Eliseu on LinkedIn"
              >
                Justo Eliseu <span class="text-12 xl:text-14 font-normal text-color-4">/ CEO Wedo Brand</span>
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
          <i class="icon-chevron-left text-gray-700 text-26 hover:text-gray-950" />
        </button>
        <div class="flex items-center">
          <div
            v-for="(v, index) in 6"
            :key="index"
            :class="['rounded-full', {
              'w-2 h-2 ml-2 bg-gray-950': swiper && swiper.realIndex === index,
              'w-[6px] h-[6px] ml-2 bg-gray-950/40': !swiper || swiper.realIndex !== index}]
            "
          />
        </div>
        <button
          class=""
          @click="nextSlide"
        >
          <i class="icon-chevron-right text-gray-700 text-26 hover:text-gray-950" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

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
