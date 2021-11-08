import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArticleCardContent = styled(motion.li)`
  display: grid;
  grid-auto-rows: max-content;
  align-items: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 2rem;
  /* background-color: var(--gray-170); */
  /* background-color: hsl(190, 50%, 100%, 0.5); */
  background-color: var(--gray-170);
  backdrop-filter: blur(20px);
  border-radius: 4px;
  /* color: var(--font-accent); */

  time {
    font-size: 0.9rem;
  }
  p {
    margin-top: 1rem;
  }

  .tag {
    padding: 0.1rem 0.8rem;
    background: white;
    border-radius: 4px;
    margin-right: 0.3rem;
  }
`;
