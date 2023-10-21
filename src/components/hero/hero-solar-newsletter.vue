<template>
  <section
    id="hero-solar-newsletter"
    class="bdr-b-p bg-2 row-c pb-12"
  >
    <!-- hi -->
    <div class="row mt-5 md:mt-10">
      <div class="col-span-full flex justify-center">
        <h1
          class="text-13 lg:text-14 font-bold text-gradient-2 text-center"
        >
          {{ $t('t029')}}
        </h1>
      </div>
    </div>
    <!--  -->
    <div class="row relative mt-2">
      <div class="col-span-full flex justify-center">
        <p
          class="text-color-1 font-bold text-center
          text-[26px]/[40px] sm:text-[32px]/[48px] md:text-[40px]/[58px] max-w-[700px] z-10"
        >
          {{ $t('t030')}}<span class="text-green-500">.</span>
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
          {{ $t('t031')}}  
        </h2>
        <form
          class="mt-5.5 flex flex-wrap justify-center gap-5"
          action="#"
          @submit.prevent="onSubscribe"
        >
          <input
            v-model="name"
            class="inp-basic w-full sm:w-[152px]"
            type="text"
            :placeholder="$t('Your name (Optional)')"
            name="name"
            maxlength="45"
          >
          <input
            v-model="email"
            class="inp-basic w-full sm:w-[238px]"
            type="email"
            :placeholder="$t('Your e-mail')"
            name="email"
          >
          <UhButton
            :text="$t('Subscribe')"
            type="submit"
            :pendind="pending"
          />
        </form>
        <p
          v-if="errorMessage"
          class="text-11 text-red-500 mt-3 text-center"
        >
          {{ errorMessage }}
        </p>
        <p class="text-11 text-color-3 mt-3 text-center">
          {{ $t('t032') }}
          <NuxtLink
            :to="localePath('help-terms')"
            class="text-color-2 hover:underline"
          >
          {{ $t('Terms of Use') }}
          </NuxtLink>
          &
          <NuxtLink
            :to="localePath('help-privacy-policy')"
            class="text-color-2 hover:underline"
          >
          {{ $t('Privacy Policy') }}</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')

const {
  subscribe,
  pending,
  errorMessage
} = useNewsletterSubscription()

const onSubscribe = () => {
  const data = {
    email: email.value,
    name: name.value
  }
  subscribe(data, {
    onSuccess () {
      name.value = ''
      email.value = ''
    }
  })
}
</script>
