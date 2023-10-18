<template>
  <main>
    <UhMenuSub class="bg-2"/>
    <HeroSolarNewsletter />
    <SectionMarqueeInsightsTitle class="bdr-b-1" />
    <SectionLatestInsightsWithSearch />
    <SectionSeriesWithAsideAds />
    <SectionJoinCommunityGroup />
    <SectionAllAndCategoryTopics />
    <SectionAuthorInFocus />
    <AdsenseDisplayHorizontalFull class="mb-10" />
  </main>
</template>

<script setup lang="ts">
useSchemaOrg([
  defineWebSite({
    name: 'Uhtred M.',
    potentialAction: [
      defineSearchAction({
        target: '/insights?q={search_term_string}'
      })
    ]
  })
])
</script>
 