import React from 'react';
import { useRouter } from 'next/router';
import { ExperienceCardContainer, ExperienceCardContent } from './styles';
import { motion } from 'framer-motion';

const experienceVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const experienceItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function ExperienceCardItem({ content }) {
  return (
    <ExperienceCardContent
      content={content}
      className="card"
      whileHover={{ translateY: -8 }}
      transition={{ type: 'tween' }}
    >
      <img src={content.img} alt={content.title} />
      <aside>
        <h3>{content.title}</h3>

        <div
          className="tech_list"
          dangerouslySetInnerHTML={{ __html: content.excerpt }}
        />
      </aside>
    </ExperienceCardContent>
  );
}

export function ExperienceCard({ content }) {
  return (
    <ExperienceCardContainer>
      <h2 id="experience">{content.title}</h2>
      <div
        className="text_underline"
        dangerouslySetInnerHTML={{ __html: content.excerpt }}
      />
      <ExperienceCardItem {...{ content: content.coding }} />
      <ExperienceCardItem {...{ content: content.design }} />
      <ExperienceCardItem {...{ content: content.rest }} />
    </ExperienceCardContainer>
  );
}
