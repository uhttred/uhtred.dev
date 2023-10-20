<template>
  <p>
    {{ views }} {{ $t('Reads') }}
  </p>
</template>

<script setup lang="ts">
const { insight } = defineProps(['insight'])
const { $api } = useNuxtApp()
const views = useCompactNumberFormat(insight.visualisations)
if (process.client) {
  const insightViewCookieKey = `insight-${insight.id}-views-count`
  const viewed = useCookie(insightViewCookieKey, {
    maxAge: 3600 * 6
  })
  //
  if (viewed.value !== 'viewed') {
    $api.patch(`insights/${insight.slug}/visualisations`).then((r)=> {
      if (r.status === 200) {
        viewed.value = 'viewed'
      }
    })
  }
}
</script>
