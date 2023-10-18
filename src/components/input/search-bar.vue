<template>
  <div
    class="w-full h-12 relative bdr-1 rounded-lg flex
      justify-between items-center px-5.5"
  >
    <input
      class="bg-transparent outline-none text-14 text-color-1 font-medium w-10/12
        appearance-none"
      type="text"
      ref="input"
      :name="$attrs.name || 'search:insights'"
      :placeholder="$attrs.placeholder || $t('t015')"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.enter="$emit('search', $event.target.value)"
    >
    <button
      @click="$emit('search', $refs.input.value)"
    >
      <i
        class="icon-search text-18 text-color-1"
      />
    </button>
  </div>
</template>

<script setup>
defineProps([
  'modelValue'
])
defineEmits(['update:modelValue', 'search'])
</script>
