<template>
  <div
    v-if="$config.public.adsense.showAds"
    class="h-[100px] w-full"
  >
    <Adsbygoogle
      class="md:block"
      :ad-slot="$config.public.adsense.slot.dHorizontal668px"
      :ad-style="{display: 'inline-block', height: '100px', width: '668px'}"
    />
    <Adsbygoogle
      class="md:hidden"
      :ad-slot="$config.public.adsense.slot.mobileFull"
      ad-format="auto"
      :ad-style="{display: 'inline-block', height: '100px', width: 'auto'}"
    />
  </div>
</template>
