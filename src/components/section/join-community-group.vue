<template>
  <section
    id="join-community-groups"
  >
    <div class="row-c">
      <div class="row py-12 items-center">
        <div class="col-span-full lg:col-span-5 xl:col-span-6">
          <div class="p-12 w-full bg-2 bdr-2 rounded-lg -join-chat-bg">
            <h1 class="text-gray-9x50 text-color-1 font-bold text-28 md:text-38">
              {{ $t('t034') }}<span class="text-green-500">.</span>
            </h1>
            <p class="text-14/7 text-gray-500 mt-4">
              {{ $t('t035') }}
            </p>
            <!-- -->
            <a
              v-if="$config.public.socialLink.whatsappCommunity"
              class="inline-block text-14 text-color-1 underline decoration-green-brand mt-4"
              :href="$config.public.socialLink.whatsappCommunity"
              target="_blank"
              @click.native="on_join_group('whatsapp')"
            >
              {{ $t('t036') }}
            </a>
          </div>
        </div>
        <aside class="col-span-4 lg:col-start-7 mt-8 lg:mt-0 xl:col-start-8">
          <h2 class="text-24 font-bold text-color-1">
            {{ $t('t037')}}
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
          <a
              v-if="$config.public.socialLink.telegramCommunity"
              class="btn-link mt-8"
              :href="$config.public.socialLink.telegramCommunity"
              target="_blank"
              @click.native="on_join_group('telegram')"
            >
            {{ $t('Join now!') }}
          </a>
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
const { on_join_group } = useGtagEvent()
const features = ref([
  {
    pt: 'Anúncios. Seja o primeiro a saber o que foi e será lançado.',
    en: 'Announcement. Be the first to know what has been and will be released.'
  },
  {
    pt: 'Interaja com a comunidade. Ajude, seja ajudado, receba e compartilha dicas.',
    en: 'Interact with the community. Help, be helped, receive and share tips.'
  },
  {
    pt: 'Interaja diretamente comigo e com a minha equipe.',
    en: 'Interact directly with me and my team.'
  },
  {
    pt: 'Cupons grátis de até 100% de descontos.',
    en: 'Free coupons for up to 100% discounts.'
  }
])
</script>
