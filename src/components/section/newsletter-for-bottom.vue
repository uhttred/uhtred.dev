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
          Get update from what matter you most<span class="text-green-500">.</span>
        </h1>
        <div class="mt-4 text-center md:text-left">
          <p class="text-14 font-medium text-color-1">
            Choose topics you wish to receive updates.
          </p>
          <p class="text-13/6 font-normal text-color-3 mt-1">
            You can choose the topics after subscription and e-mail validation.
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
          @submit.prevent="subscribe"
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
            v-if="message"
            class="text-11 text-red-500 -mt-3 text-center w-full"
          >
            {{ message }}
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
            :pendind="loading"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { $toast } = useNuxtApp()
const name = ref('')
const email = ref('')
const loading = ref(false)
const message = ref('')

const successMessage = {
  en: 'Success! Check your e-mail inbox to verify the subscribed e-mail. Then you can choose wich topic most metter you.',
  pt: 'Sucesso! Verifique sua caixa de e-mail para verificar o e-mail.'
}
const errorMessage = {
  en: 'Some error occurred, try later',
  pt: 'Algum erro ocorreu, tente novamente.'
}

const subscribe = () => {
  if (email.value && !loading.value) {
    loading.value = true
    message.value = ''
    $fetch('notify/emails', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value,
      }
    })
      .then((data) => {
        loading.value = false
        console.log(data)
        $toast.success(data?.detail || successMessage[locale.value], {
          timeout: 6000
        })
        email.value = ''
        name.value = ''
      })
      .catch((err) => {
        loading.value = false
        message.value = err.data?.detail ||
          err.data?.email[0] ||
          err.data?.name[0] ||
          errorMessage[locale.value]
      })
  }
}
</script>
