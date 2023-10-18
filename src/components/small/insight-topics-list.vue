<template>
  <ul class="list-none flex flex-wrap gap-2">
    <li
      v-for="topic in topics"
      :key="topic.slug"
    >
      <NuxtLink
        :to="localePath({
          name: 'insights-topics-slug',
          params: {
            slug: topic.slug
          }
        })"
      >
        <UhTag
          :tag="topic"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps(['topics'])
</script>
