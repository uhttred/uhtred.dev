export default defineEventHandler(async () => {
  const [
    insights,
    cases
  ] = await Promise.all([
    $fetch('/insights', { params: { limit: 100 }}),
    $fetch('/cases', { params: { limit: 100 }})
  ])
  const enInsights = insights.entries.map((p) => {
    return {
      loc: `/insights/${p.slug}`,
      lastmod: p.updated_at,
      changefreq: 'daily'
    }
  })
  const ptInsights = insights.entries.map((p) => {
    return {
      loc: `/pt/insights/${p.slug}`,
      lastmod: p.updated_at,
      changefreq: 'daily'
    }
  })
  const enCases = cases.entries.map((p) => {
    return {
      loc: `/cases/${p.slug}`,
      lastmod: p.updated_at,
      changefreq: 'daily'
    }
  })
  const ptCases = cases.entries.map((p) => {
    return {
      loc: `/pt/cases/${p.slug}`,
      lastmod: p.updated_at,
      changefreq: 'daily'
    }
  })
  return [
    ...ptCases,
    ...ptInsights,
    ...enCases,
    ...enInsights]
})
