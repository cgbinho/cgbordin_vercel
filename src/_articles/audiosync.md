---
title: 'AudioSync'
excerpt: 'Script em Javascript que mantem o audio dentro de uma precomp, sincronizado com o tempo da comp principal.'
coverImage: '/images/articles/audiosync/audiosync_cover.webp'
date: '2020-03-14T05:35:07.322Z'
---

<a href="https://www.cgbordin.com/images/articles/audiosync/audiosync_interface.webp#width_auto" target="_blank">
<img src="/images/articles/audiosync/audiosync_interface.webp#width_auto alt="AudioSync Interface" />
</a>

*AudioSync Interface*

É muito bom para a organização de um projeto de After Effects, criar pre-composições e quebrar cenas, elementos complexos em partes separadas. 

Esta prática facilita bastante uma leitura da timeline, entender suas masks, fazer ajustes de tempo de cenas... porém, nesta organização de pre-composições eu sempre tive problema com o áudio. 

O áudio da composição principal é a referência para a animação das cenas e elementos que estão na pre-composição. Então eu fazia o que é natural: duplicava o áudio, cortava ele no ponto de inicio e copiava pra dentro da pre-composição. Assim eu tinha uma cópia do áudio da composição principal, dentro da pre-composição e ambos 'sincronizados'.

Isto sempre me gerou um desconforto porque eu sabia que, uma vez que eu precisasse editar a posição destas pre-composições na composição principal, todos estes áudios que estão nas pré-composições iriam ficar fora de sincronia.

<a href="https://www.cgbordin.com/images/articles/audiosync/audiosync_precomp.gif" target="_blank">
<img src="/images/articles/audiosync/audiosync_precomp.gif" alt="Audio da pre-composição fora de sincronia com a composição principal" />
</a>

*Audio da pre-composição fora de sincronia com a composição principal.*

E realmente, 99% das vezes eu tinha que esticar o tempo de uma pre-composição aqui e ali... e todos os áudios dentro das pre-composições perdiam a sincronia.

### Solução

Pesquisando por soluções na internet, encontrei este <a href="https://www.youtube.com/watch?v=uEkMQo1CfXs" target="_blank">tutorial</a> e nele aprendi uma expressão, que é aplicada num Time Remap no áudio que está dentro da Pré-Composição:

```
C = comp ('nome_da_composição_principal');
L = C.layer ('nome_da_precomp');
MainT = time + L.startTime;
```

Curta e eficiente, esta expressão garante que o áudio da pre-composição estará sempre alinhado com o áudio da composição principal.

<a href="https://www.cgbordin.com/images/articles/audiosync/audiosync_precomp_com_expression.webp" target="_blank">
<img src="/images/articles/audiosync/audiosync_precomp_com_expression.webp" alt="Audio dentro da Pre-Composição com a expressão aplicada" />
</a>

*Audio dentro da Pre-Composição com a expressão aplicada.*

Resolvido este problema, eu escrevi um script chamado SyncAudio para facilitar o processo de criação desta expressão.

Basta fazer uma cópia do audio da composição principal para dentro da pre-composição e, com este áudio selecionado, rodar o script.
Nele é só selecionar qual é a composição principal no menu dropdown e apertar o botão SyncAudio.

Pronto, agora o áudio da pré-composição permanece sincronizado com o audio da composição principal, facilitando qualquer trabalho de ajuste de edição das pre-composições.

<a href="https://www.cgbordin.com/images/articles/audiosync/audiosync_precomp_finalizada.gif" target="_blank">
<img src="/images/articles/audiosync/audiosync_precomp_finalizada.gif" alt="Audio da pre-composição em sincronia com a composição principal" />
</a>

*Audio da pre-composição em sincronia com a composição principal.*

O script ainda é um work-in-progress, espero em breve torná-lo disponível para download.

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*