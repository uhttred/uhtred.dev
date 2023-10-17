<template>
  <section
    id="join-community-groups"
  >
    <div class="row-c">
      <div class="row py-12 items-center">
        <div class="col-span-full lg:col-span-5 xl:col-span-6">
          <div class="p-12 w-full bg-2 bdr-2 rounded-lg -join-chat-bg">
            <h1 class="text-gray-9x50 text-color-1 font-bold text-38">
              Join our Community in Telegram<span class="text-green-500">.</span>
            </h1>
            <p class="text-14/7 text-gray-500 mt-4">
              Get more involved with our community in Telegram,
              interact with others to get help and tips around digital business,
              programming, marketing and personal finance.
              In a well-defined topic groups.
            </p>
            <!-- -->
            <button
              class="text-14 text-color-1 underline decoration-green-brand mt-4"
            >
              Do you prefer WhatsApp?
            </button>
          </div>
        </div>
        <aside class="col-span-4 lg:col-start-7 mt-8 lg:mt-0 xl:col-start-8">
          <h2 class="text-24 font-bold text-color-1">
            What is included?
          </h2>
          <ul class="mt-8">
            <li
              v-for="(feature, index) in features"
              :key="index"
              class="text-16/7 text-color-3 mb-5.5 last:mb-0"
            >
              <span class="text-green-brand mr-2">•</span>{{ feature[locale] }}
            </li>
          </ul>
          <UhButton
            class="mt-8"
            text="Join now!"
          />
        </aside>
      </div>
    </div>
  </section>
</template>

<style>
.-join-chat-bg {
  background-image: url('/image/others/chat-texture.png');
  background-repeat: repeat;
  background-size: contain;
}
</style>

<script setup lang="ts">
const { locale } = useI18n()
const features = ref([
  {
    pt: 'Anuncios. Seja o primeiro a saber o que foi e será lançado.',
    en: ''
  },
  {
    pt: 'Interaja com a comunidade. Ajude, seja ajudado, receba e compartilha dicas.',
    en: ''
  },
  {
    pt: 'Interaja direitamente comigo e com a minha equipe.',
    en: ''
  },
  {
    pt: 'Cupons grátis de até 100% de descontos.',
    en: ''
  }
])
</script>
