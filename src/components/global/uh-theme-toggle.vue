<template>
  <button
    title="Change color theme"
    @click="toggleTheme"
  >
    <IconMoon v-show="$colorMode.preference === 'dark'"/>
    <IconSun v-show="$colorMode.preference === 'light'"/>
    <template v-if="$colorMode.preference === 'system'">
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
}
</script>
