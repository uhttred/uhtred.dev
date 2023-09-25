<template>
  <div class="pt-5.5 lg:pl-4 pb-12 min-h-[600px]">
    <UhMarkdown
      v-if="locale === 'pt'"
      :content="pt_data"
    />
    <UhMarkdown
      v-else
      :content="en_data"
    />
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

definePageMeta({
  title: 'pages.help.index.title',
  description: 'pages.help.index.description'
})
useSchemaOrg([
  defineWebPage({
    description: t('pages.help.index.description'),
    name: t('pages.help.index.title')
  })
])

const pt_data = `
## Central de Ajuda

Aqui você encontrará respostas às perguntas mais frequentes, envie-nos as suas dúvidas para nos ajudar a melhorar os nossos serviços.

### Uhtred M.

Conheça o Projecto Uhtred M.

* [Sobre o Uhtred M.](https://uhtred.dev/pt/help/about-us)
* [Contato](https://uhtred.dev/pt/help/contact-us)


### Relações

Não deixe de ler os nossos Termos de Uso, entre outros temas que regem a nossa relação.

* [Termos de Uso](https://uhtred.dev/pt/help/terms)
* [Política de Privacidade e Dados](https://uhtred.dev/pt/help/privacy-policy)
* [Política de Cookies](https://uhtred.dev/pt/help/cookie-policy)
`
const en_data = `
# Help Center

Here you will find answers to the most frequently asked questions, send us your questions to help us improve our services.

### Uhtred M.

Discover the Uhtred M Project.

- [About Uhtred M.](https://uhtred.dev/help/about-us)
- [Contact](https://uhtred.dev/help/contact-us)

## Relations

Be sure to read our Terms of Use, among other topics that govern our relationship.

- [Terms of use](https://uhtred.dev/help/terms)
- [Privacy and Data Policy](https://uhtred.dev/help/privacy-policy)
- [Cookies Policy](https://uhtred.dev/help/cookie-policy)
`
</script>
