import { AxiosRequestConfig } from "axios"
import { errorResponse, okResponse } from '~/utils/parsers'

interface Options extends AxiosRequestConfig {}

export const useAPI = async (path: string, opts?: Options) => {

  const { $api } = useNuxtApp()

  const data = ref(null)
  const error = ref(false)
  const errorMessage: Ref<{
    message?: string,
    messages?: Array<string>
  }> = ref({})
  const loading = ref(false)

  const refresh = async () => {
    try {
      loading.value = true
      error.value = false
      const r = okResponse(
        await $api({
          ...opts,
          url: path
        }),
        'data'
      )
      loading.value = false
      if (r.$ok) {
        error.value = false
        data.value = r.data
      }
    } catch (err) {
      loading.value = false
      error.value = true
      errorMessage.value = errorResponse(err)
    }
  }

  await refresh()

  return {
    data,
    error,
    loading,
    errorMessage,
    refresh
  }
}
