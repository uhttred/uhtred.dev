<template>
  <span
    class="text-11 text-color-3 hover:text-color-1 cursor-pointer 
      font-bold bdr-2 rounded-lg px-2 py-0.5"
  >
    {{
      locale === 'pt'
        ? tag.pt_name ??  tag.name
        : tag.name
    }}
  </span>
</template>

<script setup lang="ts">
const { locale } = useI18n()
defineProps({
  tag: Object
})
</script>