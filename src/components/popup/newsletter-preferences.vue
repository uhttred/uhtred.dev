<template>
  <section
    class="relative z-40"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />

    <div
      class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
    >
      <!-- close button -->
      <button
        @click="removePopup"
        class="bg-[#000] rounded-full bdr-1 w-6 h-6 z-20 absolute right-3 top-3"
      >
        <i class="icon-x text-gray-50 text-16" />
      </button>
      <div class="row max-h-[90%] overflow-y-auto">
        <div
          class="relative bg-2 rounded-md md:rounded-lg shadow-xl py-10 px-4
            col-span-full sm:px-6 xl:col-start-2 xl:col-span-10 md:p-10 row-c"
        >
          <div
            v-if="emailError || pending"
            class="flex flex-col items-center py-6"
          >
            <UhSpinner v-if="pending" />
            <p
              v-if="emailError && !pending"
              class="text-14 text-color-2 mb-8"
            >
              {{ $t('Error loading') }}.
              <button
                class="hover:underline text-red-500"
                @click="refresh"
              >
                {{ $t('Reload') }}
              </button>
            </p>
          </div>
          <template v-else>
            <header class="max-w-[668px]">
              <h1 class="text-26 font-bold text-color-1 text-center">
                {{ $t('t045') }}<span class="text-green-brand">.</span>
              </h1>
              <p class="text-13/5 md:text-14/7 text-color-3 text-center mt-5">
                {{ $t('t046') }}
              </p>
            </header>
            <!-- idioma e topicos -->
            <div class="w-full mt-6">
              <!-- idioma -->
              <div class="w-full">
                <h2 class="text-16 font-semibold text-color-1">
                  {{ $t('t047') }}
                </h2>
                <p class="text-13 text-color-3 mt-1">
                  {{ $t('t048') }}
                </p>
                <div class="flex gap-x-4 mt-3">
                  <div
                    class="flex items-center mr-4"
                  >
                    <input
                      id="en-radio-selec"
                      type="radio"
                      v-model="preferred_language"
                      value="en"
                      name="preferred_language"
                      class="w-4 h-4 accent-green-brand"
                    >
                    <label
                      for="en-radio-selec"
                      class="ml-2 text-13 text-color-2 font-medium cursor-pointer hover:text-color-1"
                    >
                      English
                    </label>
                  </div>
                  <div
                    class="flex items-center mr-4"
                  >
                    <input
                      id="pt-radio-selec"
                      type="radio"
                      v-model="preferred_language"
                      value="pt"
                      name="preferred_language"
                      class="w-4 h-4 accent-green-brand"
                    >
                    <label
                      for="pt-radio-selec"
                      class="ml-2 text-13 text-color-2 font-medium cursor-pointer hover:text-color-1"
                    >
                      Portuguese
                    </label>
                  </div>
                </div>
              </div>
              <!-- topicos -->
              <div class="w-full mt-6">
                <h2 class="text-16 font-semibold text-color-1">
                  {{ $t('t049') }}
                </h2>
                <p class="text-13 text-color-3 mt-1">
                  {{ $t('t050') }}
                </p>
                <div
                  class="flex items-center mt-2"
                >
                  <input
                    id="subscribe_to_all"
                    v-model="subscribe_to_all"
                    type="checkbox"
                    name="subscribe_to_all"
                    class="w-4 h-4 accent-green-brand"
                  >
                  <label
                    for="subscribe_to_all"
                    class="ml-2 text-13 text-color-2 font-medium cursor-pointer hover:text-color-1"
                  >
                    {{ $t('t051') }}
                  </label>
                </div>
                <div
                  :class="[
                    'mt-4 flex flex-wrap gap-2 md:justify-center',
                    {'pointer-events-none opacity-50': subscribe_to_all}
                  ]"
                >
                  <button
                    v-for="topic in topics"
                    :key="topic.id"
                    @click="addOrRemoveTopic(topic)"
                  >
                    <span
                      :class="[
                          'text-12 hover:underline',
                          'font-semibold rounded-lg px-2 py-0.5',
                          {
                            'bdr-1 border-green-brand/40 dark:border-green-brand/40 text-color-1': selected_topics_id.includes(topic.id),
                            'bdr-1 text-color-3': !selected_topics_id.includes(topic.id)
                          }
                        ]"
                    >
                      {{
                        locale === 'pt'
                          ? topic.pt_name || topic.name
                          : topic.name
                      }}
                    </span>
                  </button>
                  <!--  -->
                  <div
                    v-if="error || loading"
                    class="flex flex-wrap mt-4 items-center"
                  >
                    <UhSpinner v-show="loading" />
                    <button
                      v-if="error && !loading"
                      title="Error! Retry"
                      @click="reset"
                    >
                      <i class="icon-refresh-cw text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- form -->
            <div class="row-c mt-6 bdr-t-1 bdr-b-1 py-4">
              <form
                class="flex flex-wrap justify-center gap-5"
                action="#"
                @submit.prevent="savePreferences"
              >
                <input
                  v-model="name"
                  class="inp-basic w-full sm:w-[152px]"
                  type="text"
                  :placeholder="$t('Your name (Optional)')"
                  name="name"
                  maxlength="45"
                >
                <input
                  v-model="email"
                  disabled
                  class="inp-basic w-full sm:w-[238px] pointer-events-none opacity-70"
                  type="email"
                  :placeholder="$t('Your e-mail')"
                  name="email"
                >
                <UhButton
                  :text="$t('Update Preferences')"
                  type="submit"
                  :pendind="updating"
                />
              </form>
            </div>
            <!-- delete email -->
            <div class="flex justify-center items-center mt-5">
              <i class="hidden md:inline-block icon-trash text-14 text-red-500 dark:text-red-700 mr-2" />
              <button
                @click="confirmUnsubscribe"
                class="text-center text-12 font-medium text-red-500 
                  dark:text-red-700 hover:underline"
              >
                {{ $t('t052') }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const $emit = defineEmits(['remove'])
const { locale } = useI18n()
const { $toast, $config } = useNuxtApp()
const route = useRoute()
const email = computed(() => route.query.email)
const sign = computed(() => route.query.sign)

// updating progress
const updating = ref(false)

// email fields
const subscribe_to_all = ref(false)
const preferred_language = ref(null)
const name = ref('')
const selected_topics_id = ref([])

const {
  data: emailObject,
  error: emailError,
  refresh,
  pending
} = await useFetch(`notify/emails/${sign.value}/verified`, {
  lazy: false,
  method: 'PATCH',
  query: {
    email: email.value
  }
})

if (route.query['email-confirmation'] && emailObject.value && emailObject.value.verified) {
  const msg = {
    pt: 'O seu email foi verificado com sucesso!',
    en: 'Your email has been successfully verified!'
  }
  $toast.success(msg[locale.value])
}

const removePopup = () => {
  if (!loading.value && !pending.value && !updating.value) {
    $emit('remove')
  }
}

const setDefaults = (data?: object) => {
  const dt = data || emailObject.value
  if (dt) {
    subscribe_to_all.value = dt.subscribe_to_all
    name.value = dt.name
    preferred_language.value = dt.preferred_language
    selected_topics_id.value = [...dt.subscribed_topics]
  }
}

const addOrRemoveTopic = (topic: object) => {
  if (!selected_topics_id.value.includes(topic.id)) {
    selected_topics_id.value.push(topic.id)
  } else {
    selected_topics_id.value = selected_topics_id.value.filter(id => id !== topic.id)
  }
}

const savePreferences = () => {
  updating.value = true
  $fetch(`notify/emails/${sign.value}`, {
    method: 'PUT',
    query: {
      email: email.value
    },
    body: {
      name: name.value,
      preferred_language: preferred_language.value,
      subscribe_to_all: subscribe_to_all.value,
      subscribed_topics: selected_topics_id.value
    }
  })
  .catch((err) => {
    updating.value = false
    $toast.error(err.data.detail || 'Error')
  })
  .then((data) => {
    updating.value = false
    if (data) {
      $toast.success('Success')
      setDefaults(data)
    }
  })
}

const confirmUnsubscribe = () => {
  const url = `${$config.public.apiBaseUrl}/notify/emails/${sign.value}/unsubscribe?email=${email.value}`
  const msg = {
    pt: 'Tem certeza de que deseja eliminar o seu email? Se eliminar o seu email você já não receberá nenhuma notificação.',
    en: 'Are you sure you want to delete your email? If you delete your email you will no longer receive any notifications.'
  }
  if (confirm(msg[locale.value])) {
    window.open(url, '_blank').focus()
  }
}

setDefaults()

const { entries: topics, loading, reset, error } = await usePaginator('topics', {
  query: {
    order_by: '-is_category'
  }
})
</script>
