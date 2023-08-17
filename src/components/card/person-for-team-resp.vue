<template>
  <div v-if="pending || error">
    <UhSpinner
      v-show="pending"
      class="!text-18"
    />
    <button
      v-if="error"
      title="Error! Retry"
      @click="refresh"
    >
      <i class="icon-refresh-cw text-red-500" />
    </button>
  </div>
  <div v-else>
    <div class="bdr-2 rounded bg-2 overflow-hidden w-12 h-12">
      <UhImage
        :image-src="data?.avatar?.url"
        :thumbnail-src="data?.avatar?.thumbnail_url"
        alt="profile image"
      />
    </div>
    <div class="py-3">
      <a
        :href="data.website"
        target="_blank"
      >
        <h2 class="text-13 font-bold text-color-1 hover:underline">
          {{ data.name }}
        </h2>
      </a>
      <a
      :href="data.website"
        target="_blank"
      >
        <p class="text-color-3 font-normal text-12 mt-1 hover:underline">
          {{ data.headline }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { personId } = defineProps(['personId'])
const { data, pending, error, refresh } = await useFetch(`person/${personId}`)
</script>
