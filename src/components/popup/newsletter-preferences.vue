<template>
  <section
    class="relative z-40"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div
          class="relative transform row-c text-left sm:my-8 w-full"
        >
          <div class="row">
            <div
              class="bg-2 p-10 col-span-10 col-start-2 rounded-lg shadow-xl
                transition-all overflow-hidden row-c"
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
                    Newsletter Preferences<span class="text-green-brand">.</span>
                  </h1>
                  <p class="text-14/7 text-color-3 text-center mt-5">
                    Configure as suas preferências de notificações via email.
                    Selecione os tópicos que desejas receber notificações ou elimine o seu email
                    caso já não queiras receber nenhum email.
                  </p>
                </header>
                <!-- idioma e topicos -->
                <div class="w-full mt-6">
                  <!-- idioma -->
                  <div class="w-full">
                    <h2 class="text-16 font-semibold text-color-1">
                      Idioma de Notificações
                    </h2>
                    <p class="text-13 text-color-3 mt-1">
                      Deseja receber as notificações de email em qual idioma?
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
                      Tópicos de Insights
                    </h2>
                    <p class="text-13 text-color-3 mt-1">
                      Deseja receber atualizações sobre quais tópicos?
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
                        Quero receber todas as notificações.
                      </label>
                    </div>
                    <div
                      :class="[
                        'mt-4 flex flex-wrap gap-2 justify-center',
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
                  <i class="icon-trash text-16 text-red-400 dark:text-red-700 mr-2" />
                  <button
                    class="text-center text-13 font-medium text-red-400 
                      dark:text-red-700 hover:underline"
                  >
                    Apague o meu email, não quero receber nenhuma notificação!
                  </button>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { $toast } = useNuxtApp()
const route = useRoute()
const email = computed(() => route.query.email)
const sign = computed(() => route.query.sign)

const updating = ref(false)
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

const setDefaults = (data?: object) => {
  const dt = data || emailObject.value
  if (dt) {
    subscribe_to_all.value = dt.subscribe_to_all
    name.value = dt.name
    preferred_language.value = dt.preferred_language
    selected_topics_id.value = [...dt.subscribed_topics]
    //  
    // dt.subscribed_topics.forEach(t => {
    //   selected_topics_id.value.push(t.id)
    // })
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

setDefaults()

const { entries: topics, loading, reset, error } = await usePaginator('topics', {
  query: {
    order_by: '-is_category'
  }
})

</script>
