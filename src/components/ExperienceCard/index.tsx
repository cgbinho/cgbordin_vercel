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
      <section>
        <h3>{content.title}</h3>

        <ul
          className="tech_list"
          dangerouslySetInnerHTML={{ __html: content.excerpt }}
        />
      </section>
    </ExperienceCardContent>
  );
}

export function ExperienceCard({ content }) {
  return (
    <ExperienceCardContainer>
      <h2>{content.title}</h2>
      <div
        className="text_highlight_green"
        dangerouslySetInnerHTML={{ __html: content.excerpt }}
      />
      <ExperienceCardItem {...{ content: content.coding }} />
      <ExperienceCardItem {...{ content: content.design }} />
      <ExperienceCardItem {...{ content: content.rest }} />
    </ExperienceCardContainer>
  );
}
