<template>
  <div
    class="flex-col flex gap-y-4"
  >
    <!-- social link: linkedin -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
      <a
        :href="urlLinkedin"
        target="_blank"
        title="share with LinkedIn"
      >
        <!-- <IconLinkedinFill /> -->
        <i class="icon-linkedin text-color-1 block" />
      </a>
    </div>
    <!-- social link: twitter -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
      <a
        :href="urlTwitter"
        target="_blank"
        title="share with Twitter"
      >
        <i class="icon-twitter text-color-1 block" />
      </a>
    </div>
    <!-- social link: facebook -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
      <a
        :href="urlFacebook"
        target="_blank"
        title="share with Facebook"
      >
        <i class="icon-facebook text-color-1 block" />
      </a>
    </div>
    <!-- social link: facebook -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
      <a
        :href="urlTelegram"
        target="_blank"
        title="share with Telegram"
      >
        <i class="icon-send text-color-1 block" />
      </a>
    </div>
    <!-- social link: whatsapp -->
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
      <a
        :href="urlWhatsapp"
        target="_blank"
        title="share with WhatsApp"
      >
        <i class="icon-message-circle text-color-1 block" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { urlPath, title, description } = defineProps({
  urlPath: String,
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
const url = computed(() => config.public.appBaseUrl + urlPath)
const urlLinkedin = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url.value}`
})
const urlTwitter = computed(() => {
  return `http://twitter.com/share?text=${title}&url=${url.value}`
})
const urlFacebook = computed(() => {
  return `http://www.facebook.com/sharer.php?u=${url.value}&p[title]=${title}`
})
const urlTelegram = computed(() => {
  return `https://telegram.me/share/url?url=${url.value}`
})
const urlWhatsapp = computed(() => {
  return `https://api.whatsapp.com/send?text=${url.value}`
})
</script>
