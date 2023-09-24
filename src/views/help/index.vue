<template>
  <div class="pt-5.5 pl-4">
    <UhMarkdown :content="pt_data" />
  </div>
</template>

<script setup lang="ts">
const pt_data = `
## Central de Ajuda

Aqui você encontrará respostas às perguntas mais frequentes, envie-nos as suas dúvidas para nos ajudar a melhorar os nossos serviços.

### Uhtred M.

Conheça o Projecto Uhtred M.

* [Sobre o Uhtred M.](/help)
* [Contato](/)


### Relações

Não deixe de ler os nossos Termos de Uso entre outros temas que regem a nossa relação.

* [Termos de Uso](/help)
* [Política de Privacidade e Dados](/help)
* [Política de Cookies](/help)
`
</script>
