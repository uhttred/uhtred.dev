import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {

  const api = axios.create({
    baseURL: nuxtApp.$config.public.apiBaseUrl,
    timeout: 60 * 5,
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Accept-Language': nuxtApp.$i18n.locale.value
      }
    }
  })

  nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
    api.defaults.headers.common['Accept-Language'] = newLocale
  })

  return {
    provide: {
      api
    }
  }
})
