<template>
  <p>
    {{ views }} views
  </p>
</template>

<script setup lang="ts">
const { insight } = defineProps(['insight'])
const views = useCompactNumberFormat(insight.visualisations)
if (process.client) {
  const insightViewCookieKey = `insight-${insight.id}-views-count`
  const viewed = useCookie(insightViewCookieKey, {
    maxAge: 3600 * 6
  })
  //
  if (viewed.value !== 'viewed') {
    $fetch(`insights/${insight.slug}/visualisations`, {
      method: 'PATCH'
    }).then(r => {
      viewed.value = 'viewed'
    })
  }
}
</script>
