<template>
  <article class="pt-5.5 lg:pl-4 pb-12">
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
const { locale } = useI18n()
const pt_data = `
# Sobre Uhtred M.

Uhtred M. é um website pessoal de Uhtred Miller (pseudónimo de Ageu Mateus) mantido por Uhtred Miller e a sua equipa. O website foi desenvolvido pensando em três principais objetivos.

- A criação de um local para expor todos os [projetos](https://uhtred.dev/pt/cases) (também conhecidos como [casos de sucesso](https://uhtred.dev/pt/cases)) desenvolvidos pelo Uhtred e a sua equipa ou projetos em que ele teve uma forte atuação. A fim de abrir portas para próximos projetos;
- Um local para compartilhar vários [insights](https://uhtred.dev/pt/insights) (escritos pelo Uhtred e os seus parceiros) que possam complementar profissionais ou estudantes das áreas de **negócio**, **programação**, **finanças**, **investimento**, **freelancing**, **trabalho remoto**, **design** e muito mais;
- Disponibilizar alguns [produtos digitais](https://uhtred.dev/pt/store) que possam complementar outros profissionais ou estudantes.

## Contacto & Suporte

Saiba mais sobre o nosso suporte e como entrar em contacto connosco na secção de [Contacto & Suporte](https://uhtred.dev/pt/help/contact-us)
`
const en_data = `
# About Uhtred M.

Uhtred M. is a personal website of Uhtred Miller (pseudonym of Ageu Mateus) maintained by Uhtred Miller and his team. The website was developed with three main objectives in mind.

- The creation of a place to display all the [projects](https://uhtred.dev/cases) (also known as [success cases](https://uhtred.dev/cases)) developed by Uhtred and his team or projects in which he had a strong role. In order to open doors for future projects;
- A place to share various [insights](https://uhtred.dev/insights) (written by Uhtred and his partners) that can complement professionals or students in the areas of **business**, **programming**, **finance**, **investment**, **freelancing**, **remote work**, **design** and much more;
- Provide some [digital products](https://uhtred.dev/store) that can complement other professionals or students.

## Contact & Support

Find out more about our support and how to contact us in the [Contact & Support](https://uhtred.dev/help/contact-us) section
`
</script>
