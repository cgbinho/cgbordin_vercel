---
title: 'ChocoAnimato'
excerpt: 'Como eu elaborei uma Plataforma de criação de vídeos online'
coverImage: '/images/articles/chocoanimato/chocoanimato_cover.jpg'
date: '2020-08-19T05:35:07.322Z'
---

ChocoAnimato surgiu de uma idéia de produzir uma plataforma online, onde o usuário escolhe um template de vídeo dentre diversas categorias, personaliza os textos e imagens de cada trecho do vídeo e exporta seu vídeo. Tudo isso de uma forma simples, para usuários que não tem familiaridade com edição de vídeos mais elaborada.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_home.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_home.jpg" alt="Choco Animato - Interface da Home" />
</a>

*Choco Animato - Página Inicial*

A partir desta idéia inicial, eu comecei rascunhando algumas telas principais em um papel. Alguns desafios surgiram em relação a diagramação desta customização, pois a área da tela de um celular e de um desktop precisaram ser pensadas de forma dinâmica, com layout responsivo e boa distribuição de elementos, sem deixar o usuário confuso.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_video_custom.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_video_custom.jpg" alt="Choco Animato - Interface da Customização de Vídeo" />
</a>

*Choco Animato - Interface da Customização de Vídeo*

### Backend

Para o Backend, utilizei Node.js com Express, autenticação de usuários com token JWT, TypeORM para acessar o banco de dados PostgreSQL, Lottie como o player dos vídeos, Redis para enfileirar processos (transcodificação dos vídeos e envio de emails, por exemplo) e uma combinação do Pupeteer com o Lottie para gerar uma sequência de imagens  que por fim é combinada em vídeo e som, com a biblioteca ffmpeg. Depois de estudar algum tempo as implementações de pagamento do PagSeguro e MercadoPago, optei pela Pagar.me pela facilidade que ofereceu, mesmo tendo uma taxa diferente das outras.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_schematic01.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_schematic01.jpg" alt="Choco Animato - Esquema de rotas" />
</a>

*Choco Animato - Esquema das rotas*

#### Banco de Dados

Criei as seguintes tabelas: 'users', 'projects', 'templates' e 'orders'. Relacionando os usuários com seus projetos e pedidos. Já os projetos tem uma relação com seus templates, visto que eles são originados a partir de um template selecionado pelo usuário.

#### Frontend

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_mobile_01.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_mobile_01.jpg" alt="Choco Animato - Layouts mobile da Home, Cadastro e Templates" />
</a>

*Choco Animato - Layouts mobile da Home, Cadastro e Templates*

Para o Frontend, utilizei o Next.js com Hooks e Context, fazendo um processo de autenticação de usuário onde verifiquei se o mesmo estava logado via server-side, caso contrário, ele é redirecionado para a página de login, em caso de tentativa de acesso a rotas privadas. Informações de carrinho de compras e dados de formulário também são armazenados em estado por meio de hooks e Context.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_mobile_04.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_mobile_04.jpg" alt="Choco Animato - Layouts mobile da Customização de vídeos e preview" />
</a>

*Choco Animato - Layouts mobile da Customização de vídeos e preview*

Enquanto o usuário modifica os campos de texto e cor da personalização do vídeo, uma atualização em tempo real acontece na janela de preview do usuário, por meio de mutações no estado do projeto, onde utilizei o react-query para estas tratativas de atualização de tela apenas quando os dados novos estavam disponíveis.

#### Fluxo de compra

Ao final do processo de personalização do vídeo, o usuário tem a possibilidade de gerar um preview do vídeo customizado. Neste momento, o backend cria um trabalho na fila do Redis para processar a transcodificação do vídeo em uma qualidade média para o usuário conferir como ficou o resultado.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_mobile_05.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_mobile_05.jpg" alt="Choco Animato - Layouts mobile do Carrinho e Processo de compra" />
</a>

*Choco Animato - Layouts mobile do Carrinho e Processo de compra*

Caso o usuário complete o fluxo de compra, assim que o pagamento é feito, a transcodificação do vídeo em alta resolução acontence e o usuário é notificado via email que o seu pedido está pronto para download.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_order_success.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_order_success.jpg" alt="Choco Animato - Pedido enviado" />
</a>

*Choco Animato - Pedido enviado*

Aqui estão algumas telas dos layouts que produzi tanto para desktop, quanto para mobile.

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_categories.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_order_success.jpg" alt="Choco Animato - Categorias" />
</a>

*Choco Animato - Categorias*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_video_custom.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_video_custom.jpg" alt="Choco Animato - Interface da Customização de Vídeo" />
</a>

*Choco Animato - Interface da Customização de Vídeo*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_order_address.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_order_address.jpg" alt="Choco Animato - Formulário de Pagamento" />
</a>

*Choco Animato - Formulário de Pagamento*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_order_confirm.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_order_confirm.jpg" alt="Choco Animato - Confirmação de pedido" />
</a>

*Choco Animato - Confirmação de pedido*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_order_delivered.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_order_delivered.jpg" alt="Choco Animato - Pedido entregue" />
</a>

*Choco Animato - Pedido entregue*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_mobile_02.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_mobile_02.jpg" alt="Choco Animato - Layouts mobile do Menu Logado, Convidado e página de contato" />
</a>

*Choco Animato - Layouts mobile do Menu Logado, Convidado e página de contato*

<a href="https://www.cgbordin.com/images/articles/chocoanimato/chocoanimato_mobile_03.jpg" target="_blank">
<img src="/images/articles/chocoanimato/chocoanimato_mobile_03.jpg" alt="Choco Animato - Layouts mobile dos Videos Explicativos, Filtros e Projetos do usuário" />
</a>

*Choco Animato - Layouts mobile dos Videos Explicativos, Filtros e Projetos do usuário*

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*.