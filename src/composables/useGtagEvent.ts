
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
    console.log('GTAG EVENT:', 'select_content', {content_id, content_type})
  }

  const on_search = (search_term: string) => {
    gtag('event', 'search', { search_term })
    console.log('GTAG EVENT:', 'search', search_term)
  }

  const on_join_group = (group_id: string) => {
    gtag('event', 'join_group', { group_id })
    console.log('GTAG EVENT:', 'join_group', group_id)
  }

  type ShareParams = {
    method: string,
    content_type: 'insight' | 'serie',
    item_id: string
  }
  const on_share = (params: ShareParams) => {
    gtag('event', 'share', params)
    console.log('GTAG EVENT:', 'share', params)
  }

  return {
    on_select_content,
    on_search,
    on_share,
    on_join_group
  }
} 
