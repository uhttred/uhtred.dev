import Toast from 'vue-toastification'
import * as T from 'vue-toastification/dist/index.mjs'
// import { useToast } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    toastClassName: 'nn-toast',
    position: 'top-center',
    timeout: 2984,
    closeOnClick: false,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: false,
    icon: false,
    rtl: false
  })
  const { useToast } = T
  return {
    provide: {
      toast: useToast()
    }
  }
})
