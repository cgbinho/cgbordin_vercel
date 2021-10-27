import React from 'react';
import { useRouter } from 'next/router';
import { ExperienceCardContainer } from './styles';
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

function ExperienceCardTech({ content }) {
  return (
    <motion.section whileHover={{ scale: 1.1 }} transition={{ type: 'tween' }}>
      <img src={content.img} alt="" />
      <aside>
        <h3>{content.title}</h3>
        <p>{content.excerpt}</p>
      </aside>
    </motion.section>
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
