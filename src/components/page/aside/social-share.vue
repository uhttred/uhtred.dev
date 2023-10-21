<template>
  <div
    class="flex-col flex gap-y-4"
  >
    <!-- social link: linkedin -->
    <a
      :href="urlLinkedin"
      target="_blank"
      title="share with LinkedIn"
      @click.native="onShare('linkedin')"
    >
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
        <!-- <IconLinkedinFill /> -->
        <i class="icon-linkedin text-color-1 block" />
      </div>
    </a>
    <!-- social link: twitter -->
    <a
      :href="urlTwitter"
      target="_blank"
      title="share with Twitter"
      @click.native="onShare('twitter')"
    >
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
        <i class="icon-twitter text-color-1 block" />
      </div>
    </a>
    <!-- social link: facebook -->
    <a
      :href="urlFacebook"
      target="_blank"
      title="share with Facebook"
      @click.native="onShare('facebook')"
    >
    <div
      class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
        justify-center items-center bg-white dark:bg-gray-800"
    >
        <i class="icon-facebook text-color-1 block" />
      </div>
    </a>
    <!-- social link: facebook -->
    <a
      :href="urlTelegram"
      target="_blank"
      title="share with Telegram"
      @click.native="onShare('telegram')"
    >
      <div
        class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
          justify-center items-center bg-white dark:bg-gray-800"
      >
        <i class="icon-send text-color-1 block" />
      </div>
    </a>
    <!-- social link: whatsapp -->
    <a
      :href="urlWhatsapp"
      target="_blank"
      title="share with WhatsApp"
      @click.native="onShare('whatsapp')"
    >
      <div
        class="bdr-p rounded-full w-10 h-10 flex mn-social-icon
          justify-center items-center bg-white dark:bg-gray-800"
      >
        <i class="icon-message-circle text-color-1 block" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { on_share } = useGtagEvent()

const props = defineProps({
  urlPath: String,
  contentType: {
    type: String,
    default: 'insight'
  },
  itemId: String,
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

const url = computed(() => config.public.appBaseUrl + props.urlPath)

const urlLinkedin = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url.value}`
})
const urlTwitter = computed(() => {
  return `http://twitter.com/share?text=${props.title}&url=${url.value}`
})
const urlFacebook = computed(() => {
  return `http://www.facebook.com/sharer.php?u=${url.value}&p[title]=${props.title}`
})
const urlTelegram = computed(() => {
  return `https://telegram.me/share/url?url=${url.value}`
})
const urlWhatsapp = computed(() => {
  return `https://api.whatsapp.com/send?text=${url.value}`
})

const onShare = (method: string) => {
  on_share({
    method,
    content_type: props.contentType,
    item_id: props.itemId
  })
}
</script>
