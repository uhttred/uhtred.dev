<template>
  <button
    :class="['btn', {'-pending pointer-events-none': pendind}]"
  >
    <span v-if="!pendind">
      {{ text }}
    </span>
    <i v-else class="icon-loader inline-block -spin text-gray-50 text-22" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: {
    default: ''
  },
  pendind: {
    type: Boolean,
    default: false
  }
})
</script>
