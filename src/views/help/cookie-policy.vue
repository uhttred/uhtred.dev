<template>
  <article class="pt-5.5 pl-4 pb-12">
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
# Política de Cookies

## Como o Uhtred M. utiliza cookies.

### O que são Cookies?

Os cookies são pequenos ficheiros de texto que contêm uma cadeia de carateres que podem ser colocados no teu computador ou dispositivo móvel e identificam o teu navegador ou dispositivo de forma única. Podemos recorrer a tecnologias como cookies, píxeis e armazenamento local para disponibilizar, proteger e compreender produtos, serviços e anúncios.

### Para que servem os cookies?

Os cookies e outras tecnologias permitem que um site ou serviços fiquem a saber se o teu computador ou dispositivo os visitou anteriormente. Assim, estas tecnologias podem ser utilizadas para disponibilizar produtos, serviços e anúncios, ajudar-nos a compreender o modo como o site ou o serviço está a ser utilizado, ajudar-te a navegar de forma eficiente entre várias páginas, ajudar a lembrarmo-nos das tuas preferências e, em geral, a melhorar a tua experiência quando utilizas os nossos serviços. Além disso, os cookies podem ajudar a tornar o marketing que vês online mais adequado a ti e aos teus interesses.

### Porquê o Uhtred M. utiliza cookies e tecnologias semelhantes?

Utilizamos cookies, píxeis, armazenamento local e tecnologias semelhantes para te apresentar conteúdos relevantes, melhorar a tua experiência e ajudar a proteger o Uhtred M. e os nossos utilizadores. Podemos recorrer a estas tecnologias para prestar o serviço, disponibilizar um serviço de fácil utilização, permitindo-te navegar no Serviço e utilizar as suas funcionalidades, como aceder a áreas protegidas e armazenar informações para que o Uhtred M. possa responder de forma mais rápida.

Podemos recorrer a estas tecnologias para recolher informações sobre o modo como utilizas o Serviço (por exemplo, que páginas visitas com mais frequência e se recebes mensagens de erro de algumas páginas). Podemos recorrer a estas tecnologias para nos permitir ter um registo das escolhas que fazes (como o teu nome de utilizador, o idioma ou o local onde te encontras) e adaptar o Serviço de modo a apresentar-te funcionalidades e conteúdos melhorados. Além disso, estes cookies podem ser igualmente utilizados para registar as alterações que efetuaste ao tamanho do texto, tipo de letra e outras partes das páginas que podes personalizar.

O Uhtred M. ou os nossos parceiros de publicidade podem recorrer a estas tecnologias para apresentar publicidade que seja relevante para os teus interesses. Estas tecnologias memorizam que o teu dispositivo visitou um site ou serviço, tendo igualmente a capacidade de acompanhar a navegação do teu dispositivo noutros sites ou serviços que não o Uhtred M. Estas informações podem ser partilhadas com organizações externas ao Uhtred M., como anunciantes e/ou redes de publicidade, com vista a apresentar anúncios e ajudar a aferir a eficácia de uma campanha de anúncios. **Podemos recorrer a estas tecnologias para compreender, melhorar e investigar produtos e serviços**.

### Cookies originais e de terceiros.

Os cookies originais são cookies que pertencem ao Uhtred M. ou a outro Produto de Ageu Mateus. Os cookies de terceiros são cookies que terceiros colocam no teu dispositivo através do nosso Serviço. Os cookies de terceiros podem ser colocados no teu dispositivo por alguém para fornecer serviços de publicidade, medição, marketing e análise ao Uhtred M. ou para te fornecer determinadas funcionalidades e melhorar os nossos serviços para ti. Por exemplo, os cookies de outras empresas ajudam-nos a perceber como o nosso serviço é utilizado. Além disso, os cookies de terceiros podem ser colocados no teu dispositivo pelos nossos parceiros comerciais para que possam utilizá-los para te apresentarem anúncios sobre produtos e serviços noutros locais da Internet, para medir o desempenho ou eficácia desses anúncios e para apoio em marketing e análise.

### Por quanto tempo permanecem os cookies no meu dispositivo?

O tempo de permanência de um cookie no teu computador ou dispositivo móvel depende do facto de ser um cookie "persistente" ou de "sessão". Os cookies de sessão permanecem no teu dispositivo até fechares o teu navegador. Os cookies persistentes permanecem no teu computador ou dispositivo móvel até expirarem, ou serem eliminados.

### Como posso controlar os cookies?

Utilizamos cookies para ajudar a personalizar e melhorar conteúdos e serviços, fornecer uma experiência mais segura e mostrar-te anúncios relevantes e úteis dentro e fora do Uhtred M..

Podes desativar os cookies pelo seu navegador. Cada navegador funciona de uma maneira diferente. Procure saber como desativar os cookies do seu navegador com o fabricante do mesmo.

Tem em atenção que, se definires o teu navegador para desativar cookies ou outras tecnologias, podes não conseguir aceder a determinadas partes dos nossos Serviços e outras partes dos nossos Serviços podem não funcionar corretamente.
`
const en_data = `
# Cookies Policy

## How Uhtred M. uses cookies.

### What are Cookies?

Cookies are small text files that contain a string of characters that can be placed on your computer or mobile device and uniquely identify your browser or device. We may use technologies such as cookies, pixels and local storage to provide, protect and understand products, services and advertisements.

### What are cookies for?

Cookies and other technologies allow a website or services to know whether your computer or device has previously visited them. Therefore, these technologies can be used to provide products, services and advertisements, help us understand how the site or service is being used, help you navigate efficiently between different pages, help us remember your preferences and, in general, improving your experience when using our services. Additionally, cookies can help make the marketing you see online more tailored to you and your interests.

### Why does Uhtred M. use cookies and similar technologies?

We use cookies, pixels, local storage and similar technologies to show you relevant content, improve your experience and help protect Uhtred M. and our users. We may use these technologies to provide the service, provide a user-friendly service, allowing you to navigate the Service and use its features, such as accessing protected areas and storing information so that Uhtred M. can respond more quickly.

We may use these technologies to collect information about how you use the Service (for example, which pages you visit most often and whether you receive error messages from some pages). We may use these technologies to allow us to keep track of the choices you make (such as your username, language or location) and adapt the Service to provide you with improved features and content. Additionally, these cookies can also be used to record changes you make to the text size, font and other parts of the pages that you can personalize.

Uhtred M. or our advertising partners may use these technologies to display advertising that is relevant to your interests. These technologies remember that your device has visited a website or service, and also have the ability to track your device's navigation on websites or services other than Uhtred M. This information may be shared with organizations outside of Uhtred M., such as advertisers and /or advertising networks, in order to display advertisements and help measure the effectiveness of an advertising campaign. **We may use these technologies to understand, improve and research products and services**.

### First-party and third-party cookies.

First-party cookies are cookies that belong to Uhtred M. or another Ageu Mateus Product. Third-party cookies are cookies that third parties place on your device through our Service. Third-party cookies may be placed on your device by someone to provide advertising, measurement, marketing and analytics services to Uhtred M. or to provide you with certain features and improve our services to you. For example, cookies from other companies help us understand how our service is used. Additionally, third-party cookies may be placed on your device by our business partners so that they can use them to serve you advertisements about products and services elsewhere on the Internet, to measure the performance or effectiveness of those advertisements, and to support marketing and analysis.

### How long do cookies remain on my device?

How long a cookie stays on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies remain on your device until you close your browser. Persistent cookies remain on your computer or mobile device until they expire or are deleted.

### How can I control cookies?

We use cookies to help personalize and improve content and services, provide a safer experience, and show you relevant and helpful ads on and off Uhtred M…

You can disable cookies through your browser. Each browser works differently. Find out how to disable cookies in your browser from your browser manufacturer.

Please note that if you set your browser to disable cookies or other technologies, you may not be able to access certain parts of our Services and other parts of our Services may not function properly.
`
</script>
