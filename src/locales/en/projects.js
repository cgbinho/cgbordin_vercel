export default {
  title: 'Projects',
  cards: {
    viewCode: 'View Code',
    readArticle: 'Read Article',
    watchVideo: 'Watch Video',
  },
  projects: [
    {
      title: 'Aepzera',
      description: `Pipeline production tool for Adobe After Effects.`,
      article: { link: '/aepzera' },
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
      description: `Code Challenge to create a Marvel Universe catalog using Marvel API.`,
      github: { link: 'https://github.com/cgbinho/marvel_universe_vercel' },
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
      article: { link: '/articles/chocoanimato' },
      image: {
        src: 'images/articles/chocoanimato/chocoanimato_cover.webp',
        alt: 'Choco Animato Cover',
      },
      description: `ChocoAnimato is a case study on a Platform to create videos based on templates. You can check some page layouts and read more about them on the Article page.`,
      tools: [
        'Typescript',
        'Node.js',
        'Express',
        'Next.js',
        'React-Hook-Form',
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
      description: `Project made by Motion Hand for Bayer, my role in production
      was to create the setup of the compositions for each scene: creating 3D planes for scenarios, rig all characters, lights and grains.`,
      title: 'Bayer',
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
      description: `Project made by MotionHand for Huawei, my role in
      production was very similar to the Bayer project: creating the setup
      of the compositions of each scene, creating 3D planes for scenarios, rig all characters, lights and grains.`,
      title: 'Huawei',
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
      description: `Project made by F/Nazca, where I was responsible for the setup and animation of the stick 2D character, microphone, 3D creation, setup and animation of all cans.`,
      title: 'Skoland',
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
