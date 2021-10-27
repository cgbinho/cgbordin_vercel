import { motion } from 'framer-motion';
import styled from 'styled-components';

export const WelcomeCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin: 3rem 0 1rem 0;
  max-width: 800px;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    margin: 3rem 0 1rem 0;

    h1 {
      letter-spacing: 1px;
    }
  }
`;

export const WelcomeCardContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    text-align: center;
    letter-spacing: 0.15rem;
    line-height: 1.5;
  }

  h2 {
    text-align: center;
    line-height: 1.2;
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

export const WelcomeCardFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  justify-items: center;

  img {
    flex-shrink: 0;
  }

  a {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 0.1rem;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const HorizontalLine = styled(motion.div)`
  height: 3px;
  width: 100%;
  border: 2px solid var(--scent-450);
  border-radius: 1rem;
  margin: 1rem 0;
`;
