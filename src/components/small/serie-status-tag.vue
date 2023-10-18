<template>
  <span
    :class="[
      'text-10 leading-none text-gray-50 rounded-lg py-1 px-1.5',
      {
        'bg-blue-700': status === 'in_launch',
        'bg-green-brand': status === 'completed',
      }
    ]"
  >
    {{ $t(status) }}
    </span>
</template>

<script setup lang="ts">
defineProps(['status'])
</script>
