
export const useGtagEvent = () => {
  
  const gtag = useGtag()

  const on_select_content = (
      content_id: string,
      content_type: string = 'insight_topic'
    ) => {
    gtag('event', 'select_content', {
      content_id,
      content_type
    })
  }

  const on_search = (search_term: string) => {
    gtag('event', 'search', { search_term })
  }

  const on_join_group = (group_id: string) => {
    gtag('event', 'join_group', { group_id })

    if (group_id === 'whatsapp' || group_id === 'telegram') {
      gtag('event', 'community_join', { group_id })
      gtag('event', `join_${group_id}`, { group_id })
    } else if (group_id === 'newsletter') {
      gtag('event', 'newsletter_sbt', { group_id })
    } else if (group_id === 'verified_newsletter') {
      gtag('event', 'newsletter_vsb', { group_id })
    }
  }

  type ShareParams = {
    method: string,
    content_type: 'insight' | 'serie',
    item_id: string
  }
  const on_share = (params: ShareParams) => {
    gtag('event', 'share', params)
  }

  return {
    on_select_content,
    on_search,
    on_share,
    on_join_group
  }
} 
