<template>
  <div class="flex gap-x-5 justify-center items-center">
    <button
      :class="[
        'flex items-center hover:text-color-1',
        {
          'text-color-1': style === 'list',
          'text-color-3': style !== 'list',
        }
      ]"
      @click="changeStyle('list')"
    >
      <i
        class="icon-bar-chart-2 text-20 transform rotate-90 inline-block"
      />
      <span class="text-12 ml-2">
        List view
      </span>
    </button>
    <!--  -->
    <div class="linex-1 w-[30px]" />
    <!--  -->
    <button
      :class="[
        'flex items-center hover:text-color-1',
        {
          'text-color-1': style === 'grid',
          'text-color-3': style !== 'grid',
        }
      ]"
      @click="changeStyle('grid')"
    >
      <i
        class="icon-square text-18 inline-block"
      />
      <span class="text-12 ml-2">
        Grid view
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['display-style'])
const style = useCookie('insight-display-style', {
  maxAge: 604800 * 2
})

if (!style.value) {
  style.value = 'list'
}

const changeStyle = (name: string) => {
  style.value = name
  emit('display-style', style.value)
}

emit('display-style', style.value)
</script>