---
title: 'WhatsAfter'
excerpt: 'Aplicação que simula uma conversa no estilo WhatsApp, com Javascript e After Effects.'
coverImage: '/images/articles/whatsafter/whatsafter_cover.webp'
date: '2020-03-17T05:35:07.322Z'
---

Essa ferramenta é o resultado de um processo de Pesquisa e Desenvolvimento para um projeto que eu precisei representar uma conversa entre dois usuários, como um aplicativo de mensagens estilo Whatsapp.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_interface.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_interface.webp#width_auto" alt="WhatsAfter Interface" />
</a>

*WhatsAfter Interface*

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_print.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_print.webp#width_auto" alt="Print da composição finalizada." />
</a>

*Print da composição finalizada.*

**Antes de me aprofundar, eu gostaria de esclarecer que o intuito deste artigo é mostrar um pouco do meu processo de criação, não é um tutorial passo-a-passo e o script não está disponível comercialmente pra download.**

O diálogo que eu precisava simular era longo, e eu logo percebi que seria melhor trabalhar com expressões e scripts.

Minha idéia inicial era apenas gerar as mensagens automaticamente, mas uma coisa acabou puxando a outra e a ferramenta foi ficando mais completa. No final, o script gera uma composição com todo o diálogo entre os usuários. O resultado final pode ser visto no vídeo abaixo:

<figure class="video_container">
  <iframe class="video_content" src="https://www.youtube.com/embed/mBCPQSCgdjM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### Como funciona?

Bom, comecei analisando o que acontece em um diálogo de aplicativo de mensagens e a mecânica principal de animação é que as mensagens vão aparecendo em sequência, da parte debaixo da tela e deslocam as mensagens anteriores para cima, como uma rolagem de página.

Logo de início eu sabia que iria perder muito tempo com tarefas repetitivas como construir cada mensagem, e comecei a analisar onde eu poderia automatizar o processo: basicamente as mensagens tem uma estrutura igual e só mudam o nome do usuário e o texto.

Existem ferramentas online de geração de diálogos de WhatsApp que são usadas em Memes, mas eu sabia que isso não me ajudaria muito.

Comecei criando duas composições de mensagem de usuários, com a foto e o balão de conversa: estas composições serviriam de template para todas as outras mensagens.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_template_user01.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_template_user01.webp#width_auto" alt="Mensagem do usuário principal" />
</a>

*Mensagem do usuário principal.*

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_template_user02.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_template_user02.webp#width_auto" alt="Mensagem do segundo usuário ou demais participantes do grupo" />
</a>

*Mensagem do segundo usuário ou demais participantes do grupo.*

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_user_typing.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_user_typing.webp#width_auto" alt="Mensagem de 'usuário digitando'..." />
</a>

*Mensagem de 'usuário digitando'...*

Alguns detalhes como cores de texto, balão e cores dos nomes, linkei por meio de expressão em um composição de controle.

Caso houvesse a necessidade de alterar algum parâmetro mais tarde, ficaria fácil.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_config_colors.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_config_colors.webp#width_auto" alt="Composição de controle de cores" />
</a>

*Composição de controle de cores*

Criei uma composição principal com o aspecto de retrato ( 9:16 ) em full HD, com o background imitando a janela do aplicativo de mensagens.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_bg.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_bg.webp#width_auto" alt="Imagem de fundo" />
</a>

*Imagem de fundo imitando o WhatsApp*

A partir deste ponto, eu já tinha o necessário para começar a criar a sequência de diálogo, então comecei a escrever um script que foi evoluindo, se transformando e depois de várias revisões, ajustes, bugs esmagados e incrementos... funciona da seguinte forma:

### Input do diálogo via XML
Formatei um XML para o script fazer a leitura das informações de cada mensagem, como exemplo abaixo:

```xml
 <xml>
	<message>
		<username>Jules</username>
		<text>What does Marsellus Wallace look like?</text>
	</message>
	
	<message>
		<username>Brett</username>
		<text>... what?</text>
	</message>
</xml>
```

Desta forma eu pude escrever de forma organizada todo o diálogo entre os usuários.

### Criação dos templates

O script cria um template de mensagem para cada usuário da conversa.
O primeiro usuário é o principal, com o balão verde e alinhado à esquerda e os demais usuários recebem o balão branco e uma cor aleatória para o nome.

### 'Usuário Digitando...'

Antes de inserir a mensagem do usuário na composição principal, o script insere um tempo de resposta randômico que varia em alguns segundos: este é um tempo aproximado de inatividade em que a pessoa lê a mensagem que recebeu, até começar a digitar sua resposta.

O script cria a composição de “Usuário está digitando uma mensagem...” e insere na composição principal.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_julestyping.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_julestyping.webp#width_auto" alt="Jules está digitando..." />
</a>

*Jules está digitando...*

O tempo que esta mensagem fica visível é proporcional ao tamanho da mensagem que o usuário está digitando, assim temos a impressão de que alguém está digitando mesmo a mensagem.

### Criação da mensagem

Na sequência, com os templates de cada usuário feitos, o script cria a composição da mensagem e preenche os campos de nome do usuário e o seu texto.

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_message01.webp#width_80" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_message01.webp#width_80" alt="Composição da mensagem 01" />
</a>

*Composição da mensagem 01*

Ao adicionar a mensagem na composição principal, o script calcula o tempo que passou desde o início da conversa e atualiza o relógio da mensagem, incrementando os minutos que se passaram.

### Loop

Repete o processo para a próxima mensagem, até o final do XML.

### Detalhes adicionais

Para completar, faltava um detalhe que eu sabia que não teria escapatória: suporte à mensagens com imagens e emojis.
Com a estrutura montada do script, foi só adaptar alguns detalhes, para que os emojis e imagens fossem inseridas no lugar do texto da mensagem.

```xml
<message>  
  <username>Brett</username>  
  <text>Wha-what I..?</text>  
</message>

<message> 
  <username>Brett</username>  
  <emoji>/d/project/images/Emoji Smiley-28.webp</emoji>
  <emoji>/d/project/images/Emoji Smiley-31.webp</emoji>
  <emoji>/d/project/images/Emoji Smiley-31.webp</emoji>
  <emoji>/d/project/images/Emoji Smiley-30.webp</emoji>
</message>

<message> 
  <username>Jules</username>  
  <file>/d/project/images/jules_bravo.webp</file>
</message>
```

### Animação do Scroll

O script gera um Null que é responsável pelo Scroll das mensagens.
Quando uma mensagem é inserida na comp principal, ela é parenteada a este Null e então acontece o scroll, por meio de animação do seu position.

Mas as mensagens tem tamanhos diferentes! Mensagens de 1, 2, 3, 4 linhas de texto deixam o balão de mensagem maior e o scroll precisa ser proporcional a este tamanho. Resolvi este problema fazendo uma função que checa quantas linhas tem a mensagem para determinar a quantidade necessária de scroll.

Com tudo testado e funcionando, formatei o diálogo dos usuários no xml e implementei as variáveis de visibilidade de avatares, uso de modo paisagem ou retrato, data e hora do início do diálogo.

Então ao rodar o script, o diálogo entre os usuários se constrói sozinho na composição principal:

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_comp.webp#width_auto" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_comp.webp#width_auto" alt="Composição de todas as mensagens1" />
</a>

*Composição de todas as mensagens*

<a href="https://www.cgbordin.com/images/articles/whatsafter/whatsafter_timeline.webp#width_80" target="_blank">
<img src="/images/articles/whatsafter/whatsafter_timeline.webp#width_80" alt="Timeline com todas as mensagens" />
</a>

*Timeline com todas as mensagens*

### Conclusão

Uma vez com a ferramenta finalizada, passei o período de produção apenas acertando os diálogos do XML e inserindo o caminho das imagens e emojis.

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*
