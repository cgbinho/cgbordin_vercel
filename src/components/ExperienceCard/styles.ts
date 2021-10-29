/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IContainerProps {
  content: any;
}

export const ExperienceCardContent = styled(motion.section) <IContainerProps>`

    /* Conditionally */
    border-bottom: 2px solid ${(props) => props.content.title === 'Coding' ? `var(--coding-scent)` :
    props.content.title === 'Design & Motion Design' ?
      `var(--design-scent)` : `var(--rest-scent)`};
`;

export const ExperienceCardContainer = styled(motion.div)`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  max-width: 780px;
  margin: 2rem;
  gap: 2rem;

  h3 {
    letter-spacing: 0.1rem;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    overflow: visible;
  }

  img {
    margin-top: -3rem;
  }

  @media screen and (max-width: 800px) {
    margin: 1rem;
  }
`;
