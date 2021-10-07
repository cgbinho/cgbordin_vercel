import React from 'react';
import { useRouter } from 'next/router';
import { ExperienceCardContainer } from './styles';

function ExperienceCardTech({ content }) {
  return (
    <section>
      <img src={content.img} alt="" />
      <aside>
        <h3>{content.title}</h3>
        <p>{content.excerpt}</p>
      </aside>
    </section>
  );
}

export function ExperienceCard({ content }) {
  return (
    <ExperienceCardContainer>
      <h2 id="experience">{content.title}</h2>
      <p>{content.excerpt}</p>
      <ExperienceCardTech {...{ content: content.coding }} />
      <ExperienceCardTech {...{ content: content.design }} />
      <ExperienceCardTech {...{ content: content.rest }} />
    </ExperienceCardContainer>
  );
}
