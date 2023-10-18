<template>
  <div
    class="max-h-[14.875rem] w-full max-w-full rounded-md bg-2 bdr-2"
  >
    <!-- Ad Slot Name: Insights Side Bar Right -->
    <Adsbygoogle
      v-if="$config.public.adsense.showAds"
      :ad-slot="$config.public.adsense.slot.topRightSidebar"
      ad-format="display"
      :ad-style="{display: 'inline-block', height: '238px', width: '238px'}"
    />
  </div>
</template>
