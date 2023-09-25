<template>
  <article class="pt-5.5 lg:pl-4 pb-12 min-h-[600px]">
    <UhMarkdown
      v-if="locale === 'pt'"
      :content="pt_data"
    />
    <UhMarkdown
      v-else
      :content="en_data"
    />
  </article>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

definePageMeta({
  title: 'pages.help.contact-us.title',
  description: 'pages.help.contact-us.description'
})
useSchemaOrg([
  defineWebPage({
    description: t('pages.help.contact-us.description'),
    name: t('pages.help.contact-us.title')
  })
])

const pt_data = `
# Contacto & Suporte

### Como falar connosco?

Podes saber mais sobre como funciona o Uhtred M. Se tiver perguntas sobre o funcionamento, política, termos e entre outros aspetos, podes entrar em contacto connosco conforme descrito abaixo.

[support@uhtred.dev](mailto:support@uhtred.dev)
`
const en_data = `
# Contact & Support

### How to talk to us?

You can find out more about how Uhtred M works. If you have questions about operation, policy, terms and other aspects, you can contact us as described below.

[support@uhtred.dev](mailto:support@uhtred.dev)
`
</script>
