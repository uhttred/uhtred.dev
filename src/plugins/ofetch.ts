import { ofetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {

  const configFetch = (locale = 'en') => {
    globalThis.$fetch = ofetch.create({
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Accept-Language': locale
      },
      baseURL: nuxtApp.$config.public.apiBaseUrl,
    })
  }
  
  nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
    configFetch(newLocale)
  })

  nuxtApp.hook('app:created', () => {
    configFetch(nuxtApp.$i18n.locale.value)
  })
  
})
