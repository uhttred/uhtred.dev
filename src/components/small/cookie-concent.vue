<template>
  <CookieControl
    :locale="locale"
  />
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
