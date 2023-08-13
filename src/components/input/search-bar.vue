<template>
  <div
    class="w-full h-12 relative bdr-1 rounded-lg flex
      justify-between items-center px-5.5"
  >
    <input
      class="bg-transparent outline-none text-14 text-color-1 font-medium w-10/12
        appearance-none"
      type="text"
      name="search:cases"
      placeholder="Search for cases"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.enter="$emit('search')"
    >
    <button
      @click="$emit('search')"
    >
      <i
        class="icon-search text-18 text-color-1"
      />
    </button>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue', 'search'])
</script>
