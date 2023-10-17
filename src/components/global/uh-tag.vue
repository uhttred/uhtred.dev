<template>
  <span
    :class="[
        'text-11 hover:text-color-1',
        'font-semibold rounded-lg px-2 py-0.5',
        {
          'bdr-1 border-green-brand/20 dark:border-green-brand/[10%] text-color-1': tag.is_category,
          'bdr-1 text-color-3': !tag.is_category,
        }
      ]"
  >
    {{
      locale === 'pt'
        ? tag.pt_name || tag.name
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