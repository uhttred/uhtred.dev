<template>
  <div
    :class="{
      'w-full mt-6 flex flex-col items-center': displayStyle === 'list',
      'w-full mt-6 flex flex-wrap gap-x-5 lg:ml-20 xl:ml-0 mb-8': displayStyle === 'grid',
    }"
  >
    <template
      v-for="insight in insights"
      :key="insight.id"
    >

      <CardInsightList
        v-if="displayStyle === 'list'"
        :insight="insight"
        class="bdr-b-2 last:border-b-0"
      />
      <CardInsightFlex
        v-if="displayStyle === 'grid'"
        :insight="insight"
        class="mb-8 last:mb-0 sm:w-[238px] md:w-[324px]"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps(['displayStyle', 'insights'])
</script>
