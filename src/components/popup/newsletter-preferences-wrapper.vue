<template>
  <PopupNewsletterPreferences
    v-if="showPopup"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const showPopup = ref(false)

if (route.query['newsletter-preferences'] === 'yes'
    && route.query['email-confirmation'] === 'yes'
    && route.query['email']
    && route.query['sign']) {
  
  // shoupopup
  showPopup.value = true
}
</script>
