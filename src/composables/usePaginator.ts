type UsePaginatorOptions = {
  pageLimit?: MaybeRef<number>,
  entries?: MaybeRef<object[]>,
  query?: MaybeRef<object>
}

type PaginatorData = {
  total?: number,
  entries?: object[],
  count?: number,
  init?: number,
  name?: string,
  is_empty?: boolean,
  page_size?: number,
  order?: {
    by: string,
    direction: 'asc' | 'desc'
  },
  previous?: null | {
    init: number,
    limit: number
  },
  next?: null | {
    init: number,
    limit: number
  }
}

export const usePaginator = async (path: string, options?: UsePaginatorOptions) => {

  const loading = ref(true)
  const error = ref(false)
  const entries = ref(options?.entries ?? [])
  const query = ref(options?.query ?? {})
  const pageLimit = ref(options?.pageLimit ?? 10)
  const paginator: Ref<PaginatorData> = ref({})

  const canLoadMore = computed(() => {
    return paginator.value.next ? true : false
  })

  const updatePaginator = (data: PaginatorData, reset: boolean = false) => {
    entries.value = reset
      ? data?.entries ?? []
      : entries.value.concat(data?.entries ?? [])
    paginator.value = {
      ...data
    }
  }

  const loadMore = async () => {
    if (paginator.value.next && !loading.value) {
      loading.value = true
      const { data, status } = await useFetch(path, {
        query: {
          ...query.value,
          ...paginator.value.next
        }
      })
      loading.value = false
      if (status.value === 'success') {
        updatePaginator(data.value as PaginatorData)
      }
    }
  }

  const paginatorFetch = async () => {
    loading.value = true
    const { data, status } = await useFetch(path, {
      query: {
        ...query.value,
        init: 0,
        limit: pageLimit.value
      }
    })
    loading.value = false
    if (status.value === 'success') {
      updatePaginator(data.value as PaginatorData, true)
    } else {
      error.value = true
    }
  }

  await paginatorFetch()
  
  return {
    entries,
    paginator,
    loading,
    loadMore,
    canLoadMore,
    error,
    reset: paginatorFetch
  }
}
