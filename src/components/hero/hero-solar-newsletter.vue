<template>
  <section
    id="hero-solar-newsletter"
    class="bdr-b-p bg-2 row-c pb-12"
  >
    <!-- hi -->
    <div class="row mt-10">
      <div class="col-span-full flex justify-center">
        <h1
          class="text-13 lg:text-14 font-bold text-gradient-2 text-center"
        >
          Hi, I’m Uhtred Miller. Entrepreneur & Full-stack Web Developer
      </h1>
      </div>
    </div>
    <!--  -->
    <div class="row relative mt-2">
      <div class="col-span-full flex justify-center">
        <p
          class="text-color-1 font-bold text-center
          text-[30px]/[48px] sm:text-[32px]/[48px] md:text-[40px]/[58px] max-w-[700px] z-10"
        >
          I help programmers start and maintain their own digital
          businesses as a second or first source of income<span class="text-green-500">.</span>
        </p>
        <!-- illustration -->
        <img
          class="absolute right-0 -top-8 lg:-top-20 opacity-30
            dark:hidden"
          src="~/assets/illustration/texture-and-gradient.svg"
          alt="solar illustration uhtred"
        >
      </div>
    </div>
    <!-- newsletter -->
    <div class="row mt-8 z-10">
      <div class="col-span-full flex flex-col items-center justify-center">
        <h2 class="font-bold text-16/7 text-color-1 text-center">
          Subscribe to my newsletter and don’t lose anything!   
        </h2>
        <form
          class="mt-5.5 flex flex-wrap justify-center gap-5"
          action="#"
          @submit.prevent="subscribe"
        >
          <input
            v-model="name"
            class="inp-basic w-full sm:w-[152px]"
            type="text"
            placeholder="Your name (Optional)"
            name="name"
          >
          <input
            v-model="email"
            class="inp-basic w-full sm:w-[238px]"
            type="email"
            placeholder="Your e-mail"
            name="email"
          >
          <button
            class="btn"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p
          v-if="errorMessage"
          class="text-11 text-red-500 mt-3 text-center"
        >
          {{ errorMessage }}
        </p>
        <p class="text-11 text-color-3 mt-3 text-center">
          By subscribing to our newsletter you agree with our
          <NuxtLink
            :to="localePath('help-terms')"
            class="text-color-2 hover:underline"
          >
            Terms
          </NuxtLink>
          and
          <NuxtLink
            :to="localePath('help-privacy-policy')"
            class="text-color-2 hover:underline"
          >
            Privacy Policy</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const errorMessage = ref('')
const subscribe = () => {
  alert(email.value)
}
</script>
