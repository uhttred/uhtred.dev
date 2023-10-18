<template>
  <div
    class="flex justify-between items-center bg-1 rounded-md bdr-1 w-full"
  >
    <input
      type="email"
      v-model="email"
      :placeholder="$t('pages.section.footer.p2')"
      class="rounded-tl-md rounded-bl-md bg-transparent text-14 font-medium
        py-3 px-4 outline-none text-color-1 w-[calc(100%-80px)]"
      @keydown.enter="subscribe"
    >
    <button
      class="text-13 text-color-2 hover:text-color-1 pr-4"
      @click="subscribe"
    >
      {{ $t('Subscribe') }}
    </button>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const { $toast } = useNuxtApp()


const subscribe = () => {
  if (email.value && !loading.value) {
    loading.value = true
    $fetch('newsletter/emails', {
      method: 'POST',
      body: {
        email: email.value
      }
    })
      .then((data) => {
        loading.value = false
        console.log(data)
        $toast.success(data?.detail || 'Success!', {
          timeout: 3500
        })
        email.value = ''
      })
      .catch((err) => {
        loading.value = false
        $toast.error(
          err.data?.detail ||
          err.data?.email[0] ||
          'Some error occurred, try later'
        )
      })
  }
}
</script>
