<template>
  <div class="w-9 h-9 rounded-full bdr-1 bg-2 overflow-hidden">
    <NuxtLink
      :to="localePath({
        name: 'authors-@username',
        params: {
          username: author.username
        }
      })"
    >
      <UhImage
        :image-src="author?.avatar?.url"
        :thumbnail-src="author?.avatar?.thumbnail_url"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const strAuthor = useCookie('active-author')

const author = computed(() => {
  if (strAuthor.value) {
    return strAuthor.value
  }
  return {
    username: 'uhtred.dev',
    avatar: {
      url: '/icon.png',
      thumbnail_url: '/icon.png'
    }
  }
})

</script>
