<template>
  <div
    ref="div"
    class="w-full h-full max-w-full overflow-hidden"
  >
    <!-- thumbnail -->
    <img
      ref="thumbnail"
      :src="thumbnailSrc || dataURL"
      class="filter blur w-full h-full object-cover"
      v-bind="$attrs"
    >
    <!-- principal -->
    <img
      ref="image"
      :src="dataURL"
      v-bind="$attrs"
      :class="['filter blur hidden w-full h-full object-cover', imageClass]"
    >
  </div>
</template>

<script setup lang="ts">
const { imageSrc, thumbnailSrc, imageClass } = defineProps(['imageSrc', 'thumbnailSrc', 'imageClass'])
const div = ref(null)
const image = ref(null)
const thumbnail = ref(null)

const dataURL = computed(() => {
  if (process.client) {
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 500
    return canvas.toDataURL()
  }
  return ''
})

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    image.value.onload = () => {
      delete image.value.onload
      image.value.classList.remove('hidden')
      if (thumbnail.value) {
        thumbnail.value.remove()
      }
      //
      setTimeout(() => {
        image.value.classList.remove('blur')
      }, 120)
    }
    if (entry.isIntersecting) {
      image.value.src = imageSrc
      observer.disconnect()
    }
  })
  observer.observe(div.value)
  onBeforeUnmount(() => {
    observer.disconnect()
  })
})
</script>
