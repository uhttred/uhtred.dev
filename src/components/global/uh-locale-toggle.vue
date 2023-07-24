<template>
  <button
    class="text-14/5 text-color-3 hover:underline uppercase"
    title="Change language to PT"
    @click="toggleLocale"
  >
    {{ locale }}
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  if (locale.value === 'en') {
    setLocale('pt')
  } else {
    setLocale('en')
  }
}
</script>
