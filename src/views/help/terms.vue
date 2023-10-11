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
  title: 'pages.help.terms.title',
  description: 'pages.help.terms.description'
})
useSchemaOrg([
  defineWebPage({
    description: t('pages.help.terms.description'),
    name: t('pages.help.terms.title')
  })
])

const pt_data = `
# Termos de uso

_Última atualização: 10/10/2023_

Bem-vindo ao Uhtred M. (referido como "Site" ou "Site"). Por favor, leia estes Termos de Uso (“Termos”) cuidadosamente antes de usar este site. Ao acessar ou usar este Site, você concorda em cumprir e ficar vinculado a estes Termos. Se você não concorda com estes Termos, por favor não use este Site.

1. **Aceitação dos Termos:** Ao acessar ou usar o site Uhtred M., você concorda em ficar legalmente vinculado a estes Termos. Se você não concordar com estes Termos, evite usar o Site.

2. **Uso do Site:**
- Este site destina-se apenas a fins pessoais e informativos.
- Você pode usar o site para navegar, acessar artigos, visualizar trabalhos apresentados e entrar em contato com Uhtred M. para solicitações de serviço.
- Você pode assinar nossa newsletter voluntariamente, fornecendo seu endereço de e-mail.
- Você não pode usar o Site para fins ilegais, maliciosos ou prejudiciais.

3. **Artigos e Conteúdo:**
- Os artigos publicados neste Site têm caráter meramente informativo e não constituem aconselhamento profissional. O programador e os parceiros fornecem conteúdo a seu critério e nem sempre refletem as informações mais atuais.
- Os visitantes são incentivados a verificar as informações de forma independente e a procurar aconselhamento profissional conforme necessário.

4. **Produtos Digitais:**
- O Site poderá oferecer produtos digitais para venda, mas a compra desses produtos será concretizada em plataformas ou sites externos. Não nos responsabilizamos por transações ou questões relacionadas a plataformas externas.
- Quaisquer termos e condições relacionados com a compra de produtos digitais estão sujeitos às políticas das respetivas plataformas externas.

5. **Privacidade e Cookies:**
- Nós respeitamos sua privacidade. As informações coletadas neste Site, como seu endereço de e-mail para assinatura de boletins informativos, serão tratadas de acordo com nossa Política de Privacidade. Também podemos usar Google Signals dentro do Google Analytics para coleta de dados.
- Este site utiliza cookies para melhorar a experiência do usuário. Ao utilizar o Site, você concorda com o uso de cookies de acordo com nossa Política de Cookies.

6. **Assinatura do boletim informativo (newsletter):**
- Ao assinar nossa newsletter, você concorda em receber nossas atualizações por e-mail. Você pode cancelar a inscrição a qualquer momento seguindo as instruções fornecidas em nossos e-mails.

7. **Propriedade Intelectual:**
- Todo o conteúdo, incluindo artigos, imagens e trabalhos apresentados, neste site é propriedade intelectual de Uhtred M. e não pode ser reproduzido, distribuído ou usado sem permissão explícita.

8. **Limitação de Responsabilidade:**
- Não oferecemos garantias ou representações sobre a exatidão ou integridade do conteúdo deste site.
- Não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso deste Site ou do conteúdo aqui fornecido.

9. **Alterações nos Termos:**
- Poderemos atualizar estes Termos a qualquer momento. Por favor, verifique esta página periodicamente para mudanças. O uso continuado do Site após quaisquer modificações indica sua aceitação dos Termos atualizados.

10. **Informações de contato:**
- Para qualquer dúvida ou preocupação em relação a estes Termos de Uso, acesse a página de [detalhes de contato](https://uhtred.dev/pt/help/contact-us).

Obrigado por visitar Uhtred M. Aproveite sua experiência em nosso site e tenha certeza de que aderimos aos princípios do Google Signals para coleta de dados e privacidade de acordo com nossa Política de Privacidade e Dados. Para garantir a conformidade com as políticas mais recentes do Google, consulte a documentação oficial do Google e procure aconselhamento jurídico, se necessário.
`
const en_data = `
# Terms of Use

_Last Updated: 10/10/2023_

Welcome to Uhtred M. (referred to as "Website" or "Site"). Please read these Terms of Use ("Terms") carefully before using this website. By accessing or using this Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use this Website.

1. **Acceptance of Terms:** By accessing or using the Uhtred M. Website, you agree to be legally bound by these Terms. If you do not agree to these Terms, please refrain from using the Website.

2. **Use of the Website:**
- This Website is intended for personal and informational purposes only.
- You may use the Website to browse, access articles, view showcased work, and contact Uhtred M. for service requests.
- You may subscribe to our newsletter voluntarily by providing your email address.
- You may not use the Website for any unlawful, malicious, or harmful purposes.

3. **Articles and Content:**
- The articles published on this Website are for informational purposes only and do not constitute professional advice. The programmer and partners provide content at their discretion, and it may not always reflect the most current information.
- Visitors are encouraged to verify information independently and seek professional advice as needed.

4. **Digital Products:**
- The Website may offer digital products for sale, but the purchase of these products will be completed on external platforms or websites. We are not responsible for transactions or issues related to external platforms.
- Any terms and conditions related to the purchase of digital products are subject to the policies of the respective external platforms.

5. **Privacy and Cookies:**
- We respect your privacy. Information collected on this Website, such as your email address for newsletter subscriptions, will be handled in accordance with our Privacy Policy. We may also use Google Signals within Google Analytics for data collection.
- This Website uses cookies to enhance user experience. By using the Website, you consent to the use of cookies in accordance with our Cookie Policy.

6. **Newsletter Subscription:**
- By subscribing to our newsletter, you consent to receive email updates from us. You can unsubscribe at any time by following the instructions provided in our emails.

7. **Intellectual Property:**
- All content, including articles, images, and showcased work, on this Website is the intellectual property of Uhtred M and may not be reproduced, distributed, or used without explicit permission.

8. **Limitation of Liability:**
- We make no warranties or representations about the accuracy or completeness of the content on this Website.
- We are not liable for any direct or indirect damages arising from your use of this Website or the content provided herein.

9. **Changes to Terms:**
- We may update these Terms at any time. Please check this page periodically for changes. Your continued use of the Website after any modifications indicates your acceptance of the updated Terms.

10. **Contact Information:**
- For any questions or concerns regarding these Terms of Use, please go to [contact details](https://uhtred.dev/help/contact-us) page.

Thank you for visiting Uhtred M. Enjoy your experience on our Website, and rest assured that we adhere to Google Signals principles for data collection and privacy in accordance with our Privacy and Data Policy. To ensure compliance with the latest Google policies, please consult Google's official documentation and seek legal advice if necessary.
`
</script>
