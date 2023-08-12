type UsePaginatorOptions = {
  pageLimit?: MaybeRef<number>,
  entries?: MaybeRef<object[]>,
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

  const loading = ref(false)
  const entries = ref(options?.entries ?? [])
  const pageLimit = ref(options?.pageLimit ?? 10)
  const paginator: Ref<PaginatorData> = ref({})

  const canLoadMore = computed(() => {
    return paginator.value.next ? true : false
  })

  const updatePaginator = (data: PaginatorData) => {
    entries.value = entries.value.concat(data?.entries ?? [])
    paginator.value = {
      ...data
    }
  }

  const loadMore = async () => {
    if (paginator.value.next && !loading.value) {
      loading.value = true
      const { data, status } = await useFetch(path, {
        query: {
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
        init: 0,
        limit: pageLimit.value
      }
    })
    loading.value = false
    if (status.value === 'success') {
      updatePaginator(data.value as PaginatorData)
    }
  }

  await paginatorFetch()

  return {
    entries,
    paginator,
    loading,
    loadMore,
    canLoadMore
  }
}
