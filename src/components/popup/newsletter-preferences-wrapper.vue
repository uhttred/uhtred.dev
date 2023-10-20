<template>
  <PopupNewsletterPreferences
    v-if="showPopup"
    @remove="showPopup=false"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const showPopup = ref(false)

if (route.query['newsletter-preferences'] === 'yes'
    && route.query['email']
    && route.query['sign']) {
  
  // shoupopup
  showPopup.value = true
}
</script>
