<template>
  <section class="row-c bg-2 bdr-t-1">
    <div class="row py-8">
      <header
        class="col-span-full md:col-span-4 flex flex-col justify-between
          lg:col-span-6"
      >
        <h1
          class="text-center md:text-left font-bold text-34/[52px] text-color-1"
        >
          {{ $t('t040')}}<span class="text-green-500">.</span>
        </h1>
        <div class="mt-4 text-center md:text-left">
          <p class="text-14 font-medium text-color-1">
            {{ $t('t041')}}
          </p>
          <p class="text-13/6 font-normal text-color-3 mt-1">
            {{ $t('t042')}}
          </p>
        </div>
      </header>
      <!--  -->
      <div
        class="col-span-4 sm:col-start-2 md:col-start-auto
          md:pl-5 lg:pl-0 xl:col-start-8 mt-5"
      >
        <form
          class="flex flex-wrap justify-start gap-5"
          action="#"
          @submit.prevent="onSubscribe"
        >
          <input
            v-model="name"
            class="inp-basic w-full"
            type="text"
            :placeholder="$t('Your name (Optional)')"
            name="name"
            maxlength="45"
          >
          <input
            v-model="email"
            class="inp-basic w-full"
            type="email"
            :placeholder="$t('Your e-mail')"
            name="email"
          >
          <p
            v-if="errorMessage"
            class="text-11 text-red-500 -mt-3 text-center w-full"
          >
            {{ errorMessage }}
          </p>
          <p class="text-11 text-color-3 -mt-3 text-center w-full">
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
          <UhButton
            :text="$t('Subscribe')"
            type="submit"
            :pendind="pending"
          />
        </form>
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
