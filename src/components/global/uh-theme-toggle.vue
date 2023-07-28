<template>
  <button
    title="Change color theme"
    @click="toggleTheme"
  >
    <IconMoon v-if="$colorMode.preference === 'dark'"/>
    <IconSun v-else-if="$colorMode.preference === 'light'"/>
    <template v-else-if="$colorMode.preference === 'system'">
      <IconMoon
        class="opacity-70"
        v-show="$colorMode.value === 'dark'"
      />
      <IconSun
      class="opacity-70"
        v-show="$colorMode.value === 'light'"
      />
    </template>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const toggleTheme = () => {
  if (colorMode.preference === 'system') {
    colorMode.preference = 'dark'
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'system'
  }

  nextTick(() => {
    if (colorMode.value === 'light') {
      document.querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#F8F9FA')
    } else if (colorMode.value === 'dark') {
      document.querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#101010')
    }
  })
}
</script>
