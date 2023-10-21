import { errorResponse } from '@/utils/parsers'


export const useNewsletterSubscription = () => {
  
  const { on_join_group } = useGtagEvent()
  const { $toast } = useNuxtApp()
  const { locale } = useI18n()
  const pending = ref(false)
  const errorMessage = ref('')

  const successMessage = {
    en: 'Success! Check your inbox to verify the email ({email}). You can then define the topics that interest you to receive updates.',
    pt: 'Sucesso! Acesse a sua caixa de e-mail ({email}) para verificar o e-mail. Depois você poderá definir os tópicos do seu interesse para receber atualizações.'
  }

  type subscribeOptions = {
    onSuccess?: Function
  }
  type subscribeData= {
    email: string,
    name: string
  }

  const subscribe = (body: subscribeData, options: subscribeOptions = {}) => {
    if (body.email && !pending.value) {
      pending.value = true
      errorMessage.value = ''
      // API Call
      $fetch('/notify/emails', {
        method: 'POST',
        body
      })
      .then(() => {
        pending.value = false
        on_join_group('newsletter')
        $toast.success(successMessage[locale.value].replace('{email}', body.email), {
          timeout: 15000
        })
        if (typeof options.onSuccess === 'function') {
          options.onSuccess()
        }
      })
      .catch((err) => {
        pending.value = false
        errorMessage.value = errorResponse(err, ['email', 'name']).message
        if (!errorMessage.value) {
          $toast.error('Error')
        }
      })
    }
  }

  return {
    subscribe,
    pending,
    errorMessage
  }
}