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
  title: 'pages.help.privacy-policy.title',
  description: 'pages.help.privacy-policy.description'
})
useSchemaOrg([
  defineWebPage({
description: t('pages.help.privacy-policy.description'),
name: t('pages.help.privacy-policy.title')
  })
])

const pt_data = `
# Política de Privacidade e Dados

_Última atualização: 24/9/2023_

Sua privacidade é importante para nós. Esta Política de Privacidade e Dados explica como Uhtred M. (referido como "nós", "nosso" ou "nos") coleta, usa e protege suas informações pessoais quando você usa nosso site (referido como o "Site"). Ao acessar ou utilizar o Site, você concorda com as práticas descritas nesta política. Se você não concorda com esta política, por favor não utilize o Site.

1. **Informações que coletamos:**
- **Informações Pessoais:** Poderemos coletar informações pessoais fornecidas voluntariamente por você, como seu endereço de e-mail quando você assina nossa newsletter. Não coletamos nenhuma informação pessoal obrigatória.
- **Informações Não Pessoais:** Também poderemos coletar informações não pessoais, como seu endereço IP, tipo de navegador e sistema operacional, para melhorar sua experiência em nosso Site.
- **Google Signals:** podemos usar os Google Signals no Google Analytics para permitir a coleta de dados adicionais de usuários que ativaram a Personalização de anúncios em suas contas do Google. Esses dados são agregados e anonimizados para fornecer insights sobre o comportamento do usuário em todos os dispositivos.

2. **Uso de informações:**
- **Informações Pessoais:** Poderemos usar seu endereço de e-mail para enviar boletins informativos periódicos e atualizações sobre nosso conteúdo, produtos ou serviços. Você pode cancelar a assinatura dessas comunicações a qualquer momento.
- **Informações Não Pessoais:** Informações não pessoais são usadas para análise e para melhorar sua experiência em nosso Site. Isso nos ajuda a entender como os usuários interagem com nosso conteúdo e a melhorar nossos serviços.

3. **Biscoitos:**
- Utilizamos cookies para melhorar a experiência do usuário e coletar informações não pessoais. Você pode gerenciar ou desativar os cookies através das configurações do seu navegador. No entanto, observe que alguns recursos do Site podem não funcionar corretamente sem cookies. Para saber mais sobre como usamos cookies, acesse a seção de cookies.

4. **Links de terceiros:**
- Nosso Site pode conter links para sites ou serviços externos que não são operados por nós. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites de terceiros. Encorajamos você a revisar suas respectivas políticas de privacidade.

5. **Segurança de dados:**
- Tomamos medidas razoáveis para proteger suas informações pessoais. No entanto, esteja ciente de que nenhum método de transmissão de dados pela Internet é completamente seguro e não podemos garantir a segurança das suas informações.

6. **Privacidade das Crianças:**
- Nosso site não se destina a indivíduos com menos de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você acredita que podemos ter coletado tais informações, entre em contato conosco e tomaremos imediatamente as medidas apropriadas.

7. **Alterações nesta Política:**
- Poderemos atualizar esta Política de Privacidade e Dados periodicamente para refletir alterações em nossas práticas ou por motivos legais ou regulatórios. A data da última revisão será indicada no início da apólice.

8. **Informações de contato:**
- Se tiver alguma dúvida ou preocupação sobre esta Política de Privacidade e Dados, ou se desejar exercer os seus direitos relativamente às suas informações pessoais, por favor aceda à [página de contactos](https://uhtred.dev/help/contact-us).

Ao usar o site Uhtred M, você reconhece e concorda com os termos desta Política de Privacidade e Dados. Obrigado por visitar nosso site e nos confiar suas informações. Sua privacidade é importante para nós e temos o compromisso de protegê-la, ao mesmo tempo em que aderimos aos princípios dos Sinais do Google, conforme descritos em suas políticas oficiais. Para garantir a conformidade com as políticas mais recentes do Google, consulte a documentação oficial do Google e procure aconselhamento jurídico, se necessário.
`
const en_data = `
# Privacy and Data Policy

_Last updated: 10/10/2023_

Your privacy is essential to us. This Privacy and Data Policy outlines how Uhtred M (referred to as "we," "our," or "us") collects, uses, and protects your personal information while using our website (referred to as the "Website"). By accessing or using the Website, you consent to the practices described in this policy. If you do not agree with this policy, please refrain from using the Website.

1. **Information We Collect:**
- **Personal Information:** We may collect personal information voluntarily provided by you, such as your email address when you subscribe to our newsletter. We do not collect any mandatory personal information.
- **Non-Personal Information:** We may also collect non-personal information, such as your IP address, browser type, and operating system, to improve your experience on our Website.
- **Google Signals:** We may use Google Signals in Google Analytics to enable additional data collection from users who have turned on Ad Personalization in their Google accounts. This data is aggregated and anonymized to provide insights into user behavior across devices.

2. **Use of Information:**
- **Personal Information:** We may use your email address to send you periodic newsletters and updates about our content, products, or services. You can unsubscribe from these communications at any time.
- **Non-Personal Information:** Non-personal information is used for analytics and to enhance your experience on our Website. It helps us understand how users interact with our content and improve our services.

3. **Cookies:**
- We use cookies to enhance user experience and collect non-personal information. You can manage or disable cookies through your browser settings. However, please note that certain features of the Website may not function properly without cookies. To know more about how we use cookie, please go to [cookie section](https://uhtred.dev/help/cookie-policy).

4. **Third-Party Links:**
- Our Website may contain links to external websites or services that are not operated by us. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review their respective privacy policies.

5. **Data Security:**
- We take reasonable measures to protect your personal information. However, please be aware that no method of data transmission over the internet is completely secure, and we cannot guarantee the security of your information.

6. **Children's Privacy:**
- Our Website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we may have collected such information, please contact us, and we will promptly take appropriate action.

7. **Changes to this Policy:**
- We may update this Privacy and Data Policy from time to time to reflect changes in our practices or for legal or regulatory reasons. The date of the latest revision will be indicated at the beginning of the policy.

8. **Contact Information:**
- If you have any questions or concerns about this Privacy and Data Policy, or if you wish to exercise your rights regarding your personal information, please go to [contact details](https://uhtred.dev/help/contact-us) page.

By using the Uhtred M Website, you acknowledge and agree to the terms of this Privacy and Data Policy. Thank you for visiting our Website and entrusting us with your information. Your privacy is important to us, and we are committed to safeguarding it while adhering to the principles of Google Signals as described in their official policies. To ensure compliance with the latest Google policies, please consult Google's official documentation and seek legal advice if necessary.
`
</script>
