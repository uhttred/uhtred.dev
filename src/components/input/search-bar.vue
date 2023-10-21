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
      @keydown.enter="goSearch"
    >
    <button
      @click="goSearch"
    >
      <i
        class="icon-search text-18 text-color-1"
      />
    </button>
  </div>
</template>

<script setup>
const input = ref('')
const emit = defineEmits(['update:modelValue', 'search'])
const { on_search } = useGtagEvent()
defineProps([
  'modelValue'
])
const goSearch = () => {
  emit('search', input.value.value)
  on_search(input.value.value)
}
</script>
