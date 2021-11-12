export default {
  title: 'Projetos',
  cards: {
    viewCode: 'Ver Código',
    readArticle: 'Ler Artigo',
    watchVideo: 'Ver Vídeo',
  },
  projects: [
    {
      title: 'Aepzera',
      description: `Aplicação de pipeline de produção para o Adobe After Effects.`,
      article: { link: '/aepzera', isExternal: false },
      image: {
        src: 'images/aepzera/aepzera_cover.webp',
        alt: 'Aepzera Cover',
      },
      tools: [
        'Typescript',
        'ExtendScript',
        'Node.js',
        'React',
        'React Hooks & Context',
        'React-Hook-Form',
        'React-Query',
        'SCSS',
        'Adobe-React-Spectrum',
        'Markdown',
        'Parcel',
      ],
    },
    {
      title: 'Marvel Universe',
      description: `Desafio de código onde criei um catálogo do Marvel Universe usando a Marvel API.`,
      article: {
        link: 'https://github.com/cgbinho/marvel_universe_vercel',
        isExternal: true,
      },
      image: {
        src: 'images/marvel_universe_home.webp',
        alt: 'Marvel Universe Home',
      },
      tools: [
        'Typescript',
        'Next.js',
        'React Hooks & Context',
        'React-Query',
        'Material UI',
      ],
    },
    {
      title: 'Choco Animato',
      article: { link: '/articles/chocoanimato', isExternal: false },
      image: {
        src: 'images/articles/chocoanimato/chocoanimato_cover.webp',
        alt: 'Choco Animato Cover',
      },
      description: `ChocoAnimato é um Projeto Conceito de uma Plataforma de criação de vídeos customizados. Você pode conferir o layout de algumas páginas e ler mais sobre o projeto clicando no Artigo.`,
      tools: [
        'Typescript',
        'Node.js',
        'Express',
        'Next.js',
        'PostgreSQL',
        'TypeOrm',
        'Redis',
        'BullQueue',
        'React Hooks & Context',
        'JWT',
        'Lottie',
        'Pagar.me Api',
      ],
    },
    {
      title: 'Bayer',
      description: `Projeto realizado pelo Motion Hand para a Huawei, meu papel na produção
    foi criar o setup das composições de cada cena: criando os planos 3D dos
    cenários, rig de todos os personagens, luzes e granulados.`,
      video: { src: 'deIBIR3sxcU' },
      image: {
        src: 'images/projects/bayer_thumbnail.webp',
        alt: 'Bayer thumbnail',
      },
      tools: [
        'Javascript',
        'ExtendScript',
        'Adobe After Effects',
        'DUIK',
        'Puppet-Pin',
        'Adobe Illustrator',
        'Adobe Photoshop',
      ],
    },
    {
      title: 'Huawei',
      description: `Projeto realizado pelo Motion Hand para a Huawei, meu papel na
    produção foi bem parecido com o do projeto da Bayer: criar o setup
    das composições de cada cena, montando os planos 3D dos cenários,
    rig de todos os personagens, luzes e granulados.`,
      video: { src: '6UjcFtj92eU' },
      image: {
        src: 'images/projects/huawei_thumbnail.webp',
        alt: 'Huawei Thumbnail',
      },
      tools: [
        'Javascript',
        'ExtendScript',
        'Adobe After Effects',
        'DUIK',
        'Puppet-Pin',
        'Adobe Illustrator',
        'Adobe Photoshop',
      ],
    },
    {
      title: 'Skoland',
      description: `Projeto realizado pela F/Nazca, onde fui responsável pelo setup e animação do personagem, microfone, criação do 3D e animação das latas fantasiadas.`,
      video: { src: 'j4FyLNfmpM4' },
      image: {
        src: 'images/projects/skoland_thumbnail.webp',
        alt: 'Skoland thumbnail',
      },
      tools: [
        'Javascript',
        'ExtendScript',
        'Adobe After Effects',
        'Autodesk 3dsMax',
        'Puppet-Pin',
        'Adobe Illustrator',
        'Adobe Photoshop',
      ],
    },
  ],
};
