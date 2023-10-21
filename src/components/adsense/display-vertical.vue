<template>
  <div
    v-if="$config.public.adsense.showAds"
    class="w-full max-w-full"
  >
    <Adsbygoogle
      :ad-slot="$config.public.adsense.slot.dVertical"
      ad-format="auto"
      
    />
  </div>
</template>