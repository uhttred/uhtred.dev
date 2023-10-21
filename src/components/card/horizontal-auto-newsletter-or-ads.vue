<template>
  <div
    v-if="!hideCard"
    class="w-full flex flex-wrap bg-2 bdr-2 rounded-md py-5 px-5.5 relative md:gap-x-14"
  >
    <p class="text-24/[40px] font-bold text-color-1 max-w-[300px]">
      {{ msg[locale] }}<span class="text-green-brand">.</span>
    </p>
    <form
      class="w-full mt-5 md:w-[240px] md:mt-0 flex flex-wrap justify-start gap-5"
      action="#"
      @submit.prevent="onSubscribe"
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
      <!-- <p class="text-11 text-color-3 -mt-3 text-center w-full">
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
      </p> -->
      <UhButton
        :text="$t('Subscribe')"
        type="submit"
        :pendind="pending"
      />
    </form>
    <!-- close button -->
    <button
      @click="hideCard='yes'"
      class="bg-[#000] rounded-full bdr-1 w-6 h-6 absolute -right-3 -top-3"
    >
      <i class="icon-x text-gray-50 text-16" />
    </button>
  </div>
  <AdsenseDisplayHorizontalFlex
    v-else
  />
</template>

<script setup lang="ts">
const { locale } = useI18n()
const hideCard = useCookie('hide-card-horizontal-auto-newsletter', {
  maxAge: 604800
})

const props = defineProps(['newsletterTitle'])

const msg = computed(() => {
  return props.newsletterTitle
    ? props.newsletterTitle
    : {
      pt: 'Receba atualizações do que mais te interessa',
      en: 'Get update from what matter you most'
    }
})

const email = ref('')
const {
  subscribe,
  pending,
  errorMessage
} = useNewsletterSubscription()

const onSubscribe = () => {
  const data = {
    email: email.value,
    name: ''
  }
  subscribe(data, {
    onSuccess () {
      email.value = ''
    }
  })
}
</script>
