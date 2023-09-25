<template>
  <CookieControl
    :locale="locale"
  >
  <template #bar>
    <p
      v-if="locale === 'pt'"
      class="text-14 !text-gray-500 leading-6"
    >
      Nós utilizamos os nossos próprios cookies e de terceiros para que
      possamos lhe mostrar este site e compreender a forma como o utiliza, de
      forma a melhorarmos os serviços que oferecemos.
      Ao utilizar o site você concorda com o uso de cookies.
      Acesse nossa seção sobre
      <NuxtLink
        :to="localePath('help-cookie-policy')"
        class="underline decoration-green-brand text-gray-900"
      >
        cookies
      </NuxtLink>
      e
      <NuxtLink
        :to="localePath('help-privacy-policy')"
        class="underline decoration-green-brand text-gray-900"
      >
        políticas de privacidade e dados
      </NuxtLink>
      para mais informações.
    </p>
    <p
      v-else
      class="text-14 !text-gray-500 leading-6"
    >
      We use our own cookies and third-party cookies so that we can display this
      website correctly and better understand how this website is used, with a view to
      improving the services we offer.
      
      By using the website you agree to the use of cookies.
      Access our section about
      <NuxtLink
        :to="localePath('help-cookie-policy')"
        class="underline decoration-green-brand text-gray-900"
      >
        cookies
      </NuxtLink>
      and
      <NuxtLink
        :to="localePath('help-privacy-policy')"
        class="underline decoration-green-brand text-gray-900"
      >
        privacy and data policies
      </NuxtLink>
      for more information.
    </p>
  </template>
  </CookieControl>
</template>

<style lang="postcss">
.cookieControl__Bar {
  @apply bdr-2;
}
.cookieControl__Bar,
.cookieControl__Bar .cookieControl__BarButtons button {
  border-radius: 8px;
}
.cookieControl__Bar .cookieControl__BarButtons button:last-child {
  display: none;
}
</style>

<script setup lang="ts">
const { locale } = useI18n()
</script>
