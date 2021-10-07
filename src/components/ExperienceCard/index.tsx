import React from 'react';
import { useRouter } from 'next/router';
import { ExperienceCardContainer } from './styles';

function ExperienceCardTech({ img, title, excerpt }) {
  return (
    <section>
      <img src={img} alt="" />
      <aside>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </aside>
    </section>
  );
}

export function ExperienceCard() {
  const router = useRouter();

  const { locale } = router;

  const title = locale !== 'en' ? 'Experiência' : 'Experience';

  const excerpt =
    locale !== 'en'
      ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.`
      : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat diam, nisi non senectus sagittis, tortor et euismod.`;

  const codingContent = {
    title: 'Coding',
    img: '/images/cgbordin_experience_code.svg',
    excerpt: `• Javascript ES6
    • Typescript
    • ExtendScript
    • Node.js
    • Express
    • React.js - Hooks e Context
    • Next.js
    • React-query
    • Prismic
    • Styled-Components
    • Chakra UI
    • HTML5
    • CSS
    • SCSS
    • Git
    • Github
    • Babel
    • Rollup
    • Stripe API
    • Pagar.me API and others.`,
  };
  const designContent = {
    title: `Design & Motion Design`,
    img: '/images/cgbordin_experience_design.svg',
    excerpt: `• Adobe After Effects
    • Illustrator
    • Photoshop
    • Premiere
    • 3dsMax
    • Figma
    • Whimsical
    • Google Docs & Spreadsheets
    • Notion
    • Slack and others.`,
  };
  const restContent = {
    title: '{ ...rest }',
    img: '/images/cgbordin_experience_rest.svg',
    excerpt: `• Rest API
    • AWS Amplify
    • Redux
    • Docker
    • FaunaDB
    • MongoDB
    • PostgreSQL
    • TypeORM
    • Sequelize
    • Redis
    • BullQueue
    • Princípios SOLID
    • JWT and others.`,
  };

  return (
    <ExperienceCardContainer>
      <h2 id="experience">{title}</h2>
      <p>{excerpt}</p>
      <ExperienceCardTech {...codingContent} />
      <ExperienceCardTech {...designContent} />
      <ExperienceCardTech {...restContent} />
    </ExperienceCardContainer>
  );
}
